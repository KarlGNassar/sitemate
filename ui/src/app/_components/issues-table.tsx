import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Issue } from "@/types/issues.type";
import DeleteIssue from "./delete-issue";
import { Badge } from "@/components/ui/badge";

export default function IssuesTable({ issues }: { issues: Issue[] }) {
    return (
        <Table>
            <TableCaption>A list of your issues</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {issues.map((issue) => (
                    <TableRow key={issue.id}>
                        <TableCell>{issue.id}</TableCell>
                        <TableCell>{issue.title}</TableCell>
                        <TableCell>{issue.description}</TableCell>
                        <TableCell>
                            {issue.priority === "high" ? (
                                <Badge variant="destructive">
                                    {issue.priority}
                                </Badge>
                            ) : issue.priority === "medium" ? (
                                <Badge variant="secondary">
                                    {issue.priority}
                                </Badge>
                            ) : (
                                <Badge variant="default">
                                    {issue.priority}
                                </Badge>
                            )}
                        </TableCell>
                        <TableCell>
                            <DeleteIssue id={issue.id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
