import { Component, OnInit } from '@angular/core';

import { PollService } from '../../../../services/poll.service';
import { Option } from '../../../../models/poll/option';
import { Question } from '../../../../models/poll/question';
import { Poll } from '../../../../models/poll/poll';
import { PollConfig } from '../../../../models/poll/poll-config';



// This poll setup was taken from https://www.codeproject.com/articles/1167451/quiz-application-in-angular  ---MS

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
  providers: [PollService]
})
export class PollComponent implements OnInit {
  polles: any[];
  poll: Poll = new Poll(null);
  mode = 'poll';
  pollName: string;
  config: PollConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time (in secs) in which poll needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.polles = this.pollService.getAll();
    this.pollName = this.polles[0].id;
    this.loadPoll(this.pollName);
  }

  loadPoll(pollName: string) {
    this.pollService.get(pollName).subscribe(res => {
      this.poll = new Poll(res);
      this.pager.count = this.poll.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'poll';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.poll.questions) ?
      this.poll.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.questionId !== option.optionId) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'poll';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.poll.questions.forEach(x => answers.push({ 'pollId': this.poll.pollId, 'questionId': x.questionId, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.poll.questions);
    this.mode = 'result';
  }
}