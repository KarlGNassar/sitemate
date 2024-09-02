import mongoose from "mongoose";
import IssueModel, { Issue } from "./models/issue.model";

export function getAllIssues() {
    return IssueModel.find();
}

export function getIssueById(issueId: number) {
    return IssueModel.findOne({ id: issueId });
}

export function createIssue(input: Issue) {
    return IssueModel.create(input);
}

export function updateIssue(id: mongoose.Types.ObjectId, input: Issue) {
    return IssueModel.findByIdAndUpdate(id, input);
}

export function deleteIssue(issueId: number) {
    return IssueModel.deleteOne({ id: issueId });
}
