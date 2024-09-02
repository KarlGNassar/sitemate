import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import {
    createIssueHandler,
    deleteIssueHandler,
    getIssueByIdHandler,
    getIssuesHandler,
    updateIssueHandler,
} from "./issues.controller";
import validateResource from "../../middleware/validate-resource";
import { deleteIssueSchema, issueSchema } from "./schemas/issues.schema";

const router = Router();

router.get("/", authenticate, getIssuesHandler);
router.get("/:id", authenticate, getIssueByIdHandler);
router.post(
    "/",
    authenticate,
    validateResource(issueSchema),
    createIssueHandler
);
router.put(
    "/:id",
    authenticate,
    validateResource(issueSchema),
    updateIssueHandler
);
router.delete("/:id", authenticate, deleteIssueHandler);

export default router;
