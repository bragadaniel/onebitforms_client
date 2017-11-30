import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnswerService {

  constructor( private http: Http,
               private _tokenService: Angular2TokenService ) { }

  getAnswers(formID) {
    return this._tokenService.get('answer', {search: {formID: formID}}).map(res => res.json());
  }

  getAnswer( answerID ) {
    return this._tokenService.get(`answers/${answerID}`).map(res => res.json());
  }

  createAnswer( answerParams ) {
    return this._tokenService.post('answers', answerParams).map(res => res.json());
  }

  destroyAnswer( answerID ) {
    return this._tokenService.delete(`answers/${answerID}`).map(res => res.json());
  }
}
