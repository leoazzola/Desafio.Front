import { Component, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service';
import {PersonPhone} from '../model/PersonPhone.model';

@Component({
  selector: 'app-list-person-phone',
  templateUrl: './list-person-phone.component.html',
  styleUrls: ['./list-person-phone.component.css']
})
export class ListPersonPhoneComponent implements OnInit {

  listPersonsPhone: PersonPhone[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersonsPhone()
      .subscribe( data => {
        console.log(data);
        this.listPersonsPhone = data.personPhoneObjects;
    });
  }

  deletePersonPhone(person: PersonPhone): void {
    this.personService.deletePersonPhone(person)
      .subscribe( data => {
        this.personService.getPersonsPhone()
        .subscribe( data => {
          this.listPersonsPhone = data.personPhoneObjects;
        });
      })
  };
}
