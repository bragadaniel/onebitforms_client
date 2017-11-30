import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class FormService {

  constructor(private http: Http,
              private _tokenService: Angular2TokenService) { }

  getForms() {
    return this._tokenService.get('forms').map( res => res.json());
  }

  getForm( formID ) {
    return this._tokenService.get(`forms/${formID}`).map( res => res.json());
  }

  createForm( formParams) {
    return this._tokenService.post('forms', formParams).map(res => res.json());
  }

  updateFOrm(formID, formParams) {
    return this._tokenService.put(`forms/${formID}`, formParams).map(res => res.json());
  }
  destroyForm(formID) {
    return this._tokenService.delete(`forms/${formID}`).map(res => res.json());
  }
}
