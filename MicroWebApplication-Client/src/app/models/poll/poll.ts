import { PollConfig } from './poll-config';
import { Question } from './question';
import { User } from '../user.model';

export class Poll {
    pollId: number;
    pollName: string;
    pollCreator: User;
    description: string;
    config: PollConfig;
    questions: Question[];
    

    constructor(data: any) {
        if (data) {
            this.pollId = data.id;
            this.pollName = data.name;
            this.pollCreator = data.pollCreator;
            this.description = data.description;
            this.config = new PollConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}