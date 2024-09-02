"use client";

import { createIssueAction } from "@/actions/create-issue-action";
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

const createInitialState = {
    message: "",
};

function CreateIssueSubmitButton() {
    const { pending } = useFormStatus();

    if (pending) {
        toast.info("creating issue..");
    }

    return (
        <>
            <Button className="mt-2" type="submit">
                Create
            </Button>
        </>
    );
}

export default function CreateIssue() {
    const [state, formAction] = useFormState(
        createIssueAction,
        createInitialState
    );

    if (state?.message === "created") {
        toast.success("issue created successfully");
    }

    return (
        <Dialog>
            <DialogTrigger>Create Issue</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Issue</DialogTitle>

                    <form action={formAction}>
                        <div className="flex flex-col justify-start items-start gap-4 mt-5">
                            <Input placeholder="Id" name="id" type="number" />
                            <Input placeholder="Title" name="title" />
                            <Input
                                placeholder="Description"
                                name="description"
                            />
                            <Input placeholder="Priority" name="priority" />
                            <CreateIssueSubmitButton />
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
