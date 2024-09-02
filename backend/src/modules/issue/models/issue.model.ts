import { getModelForClass, prop } from "@typegoose/typegoose";
import { Priority } from "../../../types/priority.enum";

export class Issue {
    @prop({ required: true, index: true })
    id!: number;

    @prop({ required: true })
    title!: string;

    @prop({ required: true })
    description!: string;

    @prop({ required: true, enum: Priority, type: String })
    priority!: Priority;
}

const IssueModel = getModelForClass(Issue);
export default IssueModel;
