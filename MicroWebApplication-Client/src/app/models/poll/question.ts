import { Option } from './option';

export class Question {

    questionId: number;
    questionName: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean;

    constructor(data: any)  {
        data = data || {};
        this.questionId = data.questionId;
        this.questionName = data.questionName;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
