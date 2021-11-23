import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../model/person.model';
import { PersonPhoneListResponse } from '../model/PersonPhoneListResponse';
import { PersonResponse } from '../model/PersonResponse';
import { PersonPhone } from '../model/PersonPhone.model';
import { PersonRequest } from '../model/PersonRequest';
import { PhoneTypeListResponse } from '../model/PhoneTypeListResponse';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:59730/api/personphone';

  getPersonsPhone() {
    return this.http.get<PersonPhoneListResponse>(this.baseUrl + '/get');
  }

  getPersons() {
    return this.http.get<PersonResponse>(this.baseUrl + '/getpersons');
  }

  getPhoneTypes() {
    return this.http.get<PhoneTypeListResponse>(this.baseUrl + '/getphonetypes');
  }    

  createPersonPhone(person: PersonRequest) {
    return this.http.post(this.baseUrl + '/save', person);
  }

  deletePersonPhone(person: PersonPhone) {
    return this.http.post(this.baseUrl + '/delete', person);
  }  
}
