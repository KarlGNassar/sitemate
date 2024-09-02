import { NextFunction, Request, Response } from "express";
import { responseBuilder } from "../../utils/response-builder";
import {
    createIssue,
    deleteIssue,
    getAllIssues,
    getIssueById,
    updateIssue,
} from "./issues.service";
import { CreateIssueSchema, DeleteIssueSchema } from "./schemas/issues.schema";
import { logger } from "../../lib/logger";
import { CustomError } from "../../types/custom-error";
import { ErrorEnum } from "../../types/errors.enum";

export async function getIssuesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const issues = await getAllIssues();

        return res.status(200).json(responseBuilder(200, "issue", issues));
    } catch (error) {
        next(error);
    }
}

export async function getIssueByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { id } = req.params;
        const issue = await getIssueById(Number(id));

        if (!issue)
            throw new CustomError("Issue not found", ErrorEnum.SM_NOT_FOUND);

        return res.status(200).json(responseBuilder(200, "issue", issue));
    } catch (error) {
        next(error);
    }
}

export async function createIssueHandler(
    req: Request<{}, {}, CreateIssueSchema["body"]>,
    res: Response,
    next: NextFunction
) {
    try {
        const issueBody = req.body;
        const issue = await getIssueById(issueBody.id);
        if (issue) {
            throw new CustomError(
                "Id already exists",
                ErrorEnum.SM_DUPLICATE_KEY
            );
        }

        logger.info(issueBody, "creating issue");
        await createIssue(issueBody);

        return res
            .status(201)
            .json(responseBuilder(201, "Issue created successfully"));
    } catch (error) {
        next(error);
    }
}

export async function updateIssueHandler(
    req: Request<{}, {}, CreateIssueSchema["body"]>,
    res: Response,
    next: NextFunction
) {
    try {
        const issueBody = req.body;

        const issue = await getIssueById(issueBody.id);
        if (!issue)
            throw new CustomError("Issue not found", ErrorEnum.SM_NOT_FOUND);

        logger.info(issueBody, "updating issue");
        await updateIssue(issue._id, issueBody);
        return res
            .status(201)
            .json(responseBuilder(201, "Issue updated successfully"));
    } catch (error) {
        next(error);
    }
}

export async function deleteIssueHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { id } = req.params;
        logger.info(id, "deleting issue");

        await deleteIssue(Number(id));
        return res
            .status(200)
            .json(responseBuilder(200, "issue deleted successfully"));
    } catch (error) {
        next(error);
    }
}
