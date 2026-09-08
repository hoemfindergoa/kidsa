import type { MetadataRoute } from 'next';
import { readBlog } from "@/lib/actions/blog";
import { createClient } from "@supabase/supabase-js";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.littledreamersatcambridge.com';

    // Initialize Supabase to fetch centers
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Fetch dynamic blogs
    let { data: blogs } = await readBlog();
    const postEntries: MetadataRoute.Sitemap = blogs?.map((blog) => ({
        url: `${siteUrl}/blog/${blog?.slug}`,
        lastModified: blog?.created_at ? new Date(blog.created_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    })) || [];

    // Fetch dynamic centers
    const { data: centers } = await supabase.from('centers').select('slug');
    const centerEntries: MetadataRoute.Sitemap = centers?.map((center) => ({
        url: `${siteUrl}/centers/${center.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    })) || [];

    // Static routes from the app directory
    const staticPaths = [
        "",
        "/about",
        "/admission",
        "/blogs",
        "/career",
        "/contact",
        "/enroll",
        "/franchise",
        "/gallery",
        "/gamezone",
        "/Ourcenters",
        "/privacy",
        "/privacy-policy",
        "/privacypolicy",
        "/Programs",
        "/Whyus",
    ];

    const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === "" ? 1.0 : 0.8,
    }));

    // Combine static entries with postEntries and centerEntries
    const allEntries: MetadataRoute.Sitemap = [...staticEntries, ...postEntries, ...centerEntries];

    return allEntries;
}
