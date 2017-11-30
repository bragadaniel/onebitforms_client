import { QuestionsAnswer } from './questions-answer.model';

export class Answer {
  id: number;
  form_id: number;
  questionAnswers: QuestionsAnswer[] = [];

  constructor( answerInfo: any) {
    this.id = answerInfo.id;
    this.form_id = answerInfo.form_id;

    this.includeQuestionsAnswers( answerInfo.questionAnswers);
  }
  private includeQuestionsAnswers( questions: any) {
    for ( const count in questions) {
      if ( questions.hasOwnProperty(count)){
        this.questionAnswers.push(new QuestionsAnswer(questions[count]));
      }
    }
  }
}