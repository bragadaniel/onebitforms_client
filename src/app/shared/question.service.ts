import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

@Injectable()
export class QuestionService {

  constructor(private http: Http,
              private _tokenService: Angular2TokenService) { }

  createQuestion( formID, question ) {
    return this._tokenService.post('question', {formID: formID, question}).map( res => res.json());
  }

  updateQuestion( questionID, questionParams ) {
    return this._tokenService.put(`questions/${questionID}`, questionParams).map( res => res.json());
  }

  destroyQuestion( questionID ) {
    return this._tokenService.delete(`questions/${questionID}`).map(res => res.json());
  }
}
