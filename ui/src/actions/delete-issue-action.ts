"use server";

import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export async function deleteIssueAction(prevState: any, formData: FormData) {
    try {
        const issues = await fetch(
            `http://localhost:8080/api/issues/${Number(formData.get("id"))}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-sitemate-signature": "test_123",
                },
            }
        );

        revalidatePath("/");
        return { message: "deleted" };
    } catch (error) {
        toast.error("something went wrong");
    }
}
