"use client";
import Hero from "@/components/Hero";
import BookTestPage from "@/components/Book";
import MegaDiagnosticsNavbar from "../navbar/navbar";
import { useRouter } from "next/navigation";
import { defaultEmail } from "@/lib/data";
import { createEmail } from "@/lib/actions/blog";
import { EmailFormschemaType} from "@/lib/schema";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { toast } from "sonner"
export default function Page() {

  const router = useRouter();

	// Regular expression for validating email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const onHandleSubmit = async (data: EmailFormschemaType) => {
		// Validate email format before sending data
		if (!emailRegex.test(data.email)) {
			toast( "email verification failed", {
				description: "Please enter a valid email address.",
				action: {
					label: "Try Again",
					onClick: () => {
						router.push("/"); // Redirect to the homepage or any other page
					},
				}
			
			}
		);
			return; // Stop submission if email is invalid
		}

		try {
			const result = await createEmail(data);	

			console.log("Email submission result:", result);
			if (!result) {
				throw new Error("No response received from server.");
			}

			const parsedResult = result as PostgrestSingleResponse<null>;
			console.log(parsedResult);
			const { error } = parsedResult;

			if (error?.message) {
				toast("Error submitting email", {
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">{error.message}</code>
						</pre>
					),
				});
			} else {
				toast("successfully added the email 🎉", {
					description: data.email,
				});
				router.push("/thankyou");
			}
		} catch (error) {
			console.error("Error occurred while handling submit:", error);
			toast("Error submitting email", {
				description: "An error occurred while submitting your email. Please try again.",
			});
		}
	};
 

  return (
    <div className=" dark:bg-neutral-950" >
              <MegaDiagnosticsNavbar/>

      <div  className="">
      <BookTestPage onHandleSubmit={onHandleSubmit} defaultEmail={defaultEmail} />
      </div>
<div className="">
</div>
    </div>
  )
}