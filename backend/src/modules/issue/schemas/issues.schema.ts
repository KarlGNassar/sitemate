import { TypeOf, z } from "zod";
import { Priority } from "../../../types/priority.enum";

export const issueSchema = z.object({
    body: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        priority: z.nativeEnum(Priority),
    }),
});
export type CreateIssueSchema = TypeOf<typeof issueSchema>;

export const deleteIssueSchema = z.object({
    params: z.object({
        id: z.number(),
    }),
});
export type DeleteIssueSchema = TypeOf<typeof deleteIssueSchema>;
