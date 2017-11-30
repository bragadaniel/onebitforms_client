import { QuestionsAnswer } from './questions-answer.model';
export class Question {
  id: number;
  title: string;
  kind: string;
  form_id: number;
  questionsAnswers: QuestionsAnswer[] = [];

  constructor(questionInfo: any) {
    this.id = questionInfo.id;
    this.title = questionInfo.title;
    this.kind = questionInfo.kind;
    this.form_id = questionInfo.form_id;
    this.includeQuestionsAnswers(questionInfo.questionsAnswers);
  }
  private includeQuestionsAnswers(questionsAnswers: any) {
    for (const count in questionsAnswers) {
      if (questionsAnswers.hasOwnProperty(count)) {
        this.questionsAnswers.push(new QuestionsAnswer(questionsAnswers[count]));
      }
    }
  }
}