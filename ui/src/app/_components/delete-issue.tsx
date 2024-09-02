"use client";

import { createIssueAction } from "@/actions/create-issue-action";
import { deleteIssueAction } from "@/actions/delete-issue-action";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

const deleteInitialState = {
    message: "",
};

function DeleteIssueSubmitButton() {
    const { pending } = useFormStatus();

    if (pending) {
        toast.info("deleting issue..");
    }

    return (
        <>
            <Button className="mt-2" type="submit">
                Delete
            </Button>
        </>
    );
}

export default function DeleteIssue({ id }: { id: number }) {
    const [state, formAction] = useFormState(
        deleteIssueAction,
        deleteInitialState
    );
    if (state?.message === "deleted") {
        toast.success("issue deleted successfully");
    }

    return (
        <form action={formAction}>
            <input type="hidden" value={id} name="id" />
            <DeleteIssueSubmitButton />
        </form>
    );
}
