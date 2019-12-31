export class Option {
optionId: number;
questionId: number;
optionName: string;
isAnswer: boolean;
selected: boolean;

constructor(data: any)  {
    data = data || {};
    this.optionId = data.optionId;
    this.questionId = data.questionId;
    this.optionName = data.optionName;
    this.isAnswer = data.isAnswer;
}

}
