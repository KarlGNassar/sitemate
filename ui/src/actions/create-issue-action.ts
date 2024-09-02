"use server";

import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export async function createIssueAction(prevState: any, formData: FormData) {
    try {
        const issues = await fetch("http://localhost:8080/api/issues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-sitemate-signature": "test_123",
            },
            body: JSON.stringify({
                id: Number(formData.get("id")),
                title: formData.get("title"),
                description: formData.get("description"),
                priority: formData.get("priority"),
            }),
        });

        revalidatePath("/");
        return { message: "created" };
    } catch (error) {
        toast.error("something went wrong");
    }
}
