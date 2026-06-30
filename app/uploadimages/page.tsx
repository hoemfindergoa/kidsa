"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, Shield, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import { createClient } from "@supabase/supabase-js";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });

export default function AdminUploadPage() {
  // Form State
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState("students");
  const [format, setFormat] = useState("S"); // S = Standard, H = Horizontal/Wide, V = Vertical/Tall
  const [securityKey, setSecurityKey] = useState("");
  
  // Status State
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- CONFIGURATION ---
  const SECRET_KEY = "thisissomekeytouploadimagesonlytospecificuser";
  const BUCKET_NAME = "Schoolimages"; // MUST MATCH YOUR SUPABASE STORAGE BUCKET NAME

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  // Remove a file from the selected list
  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  // Handle the bulk upload process
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Security Check
    if (securityKey !== SECRET_KEY) {
      setStatus("error");
      setMessage("Unauthorized: Invalid Security Key.");
      return;
    }

    // 2. Validation
    if (files.length === 0) {
      setStatus("error");
      setMessage("Please select at least one image to upload.");
      return;
    }

    setStatus("uploading");
    setMessage(`Uploading ${files.length} images... Please wait.`);

    const tableName = category === "students" ? "studentimages" : "partnersimages";
    let successCount = 0;
    let failCount = 0;

    // 3. Process each file
    for (const file of files) {
      try {
        // A. Generate a unique filename to prevent overwrites
        const fileExt = file.name.split('.').pop();
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const storagePath = `${category}/${uniqueFileName}`; // Group in folders by category

        // B. Upload file to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(storagePath, file, { cacheControl: '3600', upsert: false });

        if (uploadError) throw new Error(`Storage error: ${uploadError.message}`);

        // C. Get the public URL of the uploaded image
        const { data: publicUrlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(storagePath);
          console.log("Public URL:", publicUrlData);

        const imageUrl = publicUrlData.publicUrl;

        // D. Insert record into the database table
        const { error: dbError } = await supabase
          .from(tableName)
          .insert([{
            image_url: imageUrl,
            format: format,
            alt_text: file.name // Fallback alt text to filename
          }]);

        if (dbError) throw new Error(`Database error: ${dbError.message}`);

        successCount++;
      } catch (err: any) {
        console.error("Upload failed for a file:", err);
        failCount++;
      }
    }

    // 4. Finalize Status
    if (failCount === 0) {
      setStatus("success");
      setMessage(`Successfully uploaded all ${successCount} images to ${tableName}!`);
      setFiles([]); // Clear form on full success
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {
      setStatus("error");
      setMessage(`Upload complete: ${successCount} succeeded, ${failCount} failed. Check console for details.`);
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 py-20 px-4 md:px-8 flex items-center justify-center ${bodyFont.className}`}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-violet-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-violet-500 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,100 C20,0 50,100 100,0 L100,100 Z" fill="currentColor" />
             </svg>
          </div>
          <h1 className={`text-3xl md:text-4xl relative z-10 ${titleFont.className}`}>
            Gallery Admin Upload
          </h1>
          <p className="relative z-10 text-violet-100 mt-2 font-semibold">
            Securely bulk upload images directly to your database.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-10">
          
          {/* Status Alert */}
          {status !== "idle" && status !== "uploading" && (
            <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 border-2 ${
              status === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-red-50 border-red-200 text-red-700"
            }`}>
              {status === "success" ? <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" /> : <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />}
              <p className="font-bold">{message}</p>
            </div>
          )}

          <form onSubmit={handleUpload} className="space-y-6">
            
            {/* Grid for Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Category / Table Selection */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 ml-1">Target Gallery <span className="text-red-500">*</span></label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={status === "uploading"}
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                >
                  <option value="students">Students (studentimages table)</option>
                  <option value="partners">Testimonials (partnersimages table)</option>
                </select>
              </div>

              {/* Format Selection */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 ml-1">Grid Format Size</label>
                <select 
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  disabled={status === "uploading"}
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                >
                  <option value="S">Standard (Square/Small)</option>
                  <option value="H">Horizontal (Wide - Span 2 Columns)</option>
                  <option value="V">Vertical (Tall - Span 2 Rows)</option>
                </select>
                <p className="text-xs text-slate-400 ml-1">Determines how it fits in the masonry grid.</p>
              </div>
            </div>

            {/* File Uploader Area */}
            <div className="space-y-2">
              <label className="font-bold text-slate-700 ml-1">Select Images <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-violet-300 rounded-2xl p-8 bg-violet-50 hover:bg-violet-100 transition-colors text-center cursor-pointer relative">
                <input 
                  type="file" 
                  multiple 
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  disabled={status === "uploading"}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <div className="flex flex-col items-center gap-3 pointer-events-none">
                  <div className="w-16 h-16 bg-violet-200 text-violet-600 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-violet-900 text-lg">Click or drag images here</p>
                    <p className="text-violet-600 text-sm">Supports JPG, PNG, WEBP (Bulk selection allowed)</p>
                  </div>
                </div>
              </div>

              {/* Selected Files Preview */}
              {files.length > 0 && (
                <div className="mt-4 p-4 bg-slate-100 rounded-xl max-h-48 overflow-y-auto border-2 border-slate-200">
                  <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">{files.length} Files Selected</p>
                  <div className="space-y-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-2 px-3 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <ImageIcon className="w-4 h-4 text-violet-500 shrink-0" />
                          <span className="text-sm text-slate-700 truncate">{file.name}</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => removeFile(idx)}
                          disabled={status === "uploading"}
                          className="text-slate-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Security Key */}
            <div className="space-y-2 pt-4 border-t-2 border-slate-100">
              <label className="font-bold text-slate-700 ml-1">Admin Security Key <span className="text-red-500">*</span></label>
              <div className="relative">
                <Shield className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  placeholder="Enter the secure upload key"
                  disabled={status === "uploading"}
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "uploading"}
              className={`w-full bg-violet-600 hover:bg-violet-700 text-white font-black text-lg py-4 rounded-xl shadow-[4px_4px_0px_rgba(139,92,246,0.3)] hover:shadow-none hover:translate-y-1 transition-all flex items-center justify-center gap-2 mt-6 ${
                status === "uploading" ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {status === "uploading" ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Processing {files.length} Files...
                </>
              ) : (
                <>
                  <Upload className="w-6 h-6" />
                  Upload to Database
                </>
              )}
            </button>

          </form>
        </div>
      </motion.div>
    </div>
  );
}