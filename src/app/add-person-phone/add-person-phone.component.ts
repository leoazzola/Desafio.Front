import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {PersonService} from '../service/person.service';
import { Person } from '../model/person.model';
import { PersonPhoneTypes } from '../model/PersonPhoneTypes.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-person-phone',
  templateUrl: './add-person-phone.component.html',
  styleUrls: ['./add-person-phone.component.css'] 
})
export class AddPersonPhoneComponent implements OnInit {

  listPersons: Person[];
  listPersonsPhoneTypes: PersonPhoneTypes[];
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private personService: PersonService) {
    this.personService.getPersons()
      .subscribe( data => {
        this.listPersons = data.personObjects;
      });
      this.personService.getPhoneTypes()
      .subscribe( data => {
        this.listPersonsPhoneTypes = data.phoneTypeObjects;
      });      
   }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      businessEntityID: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneNumberTypeID: ['', Validators.required]
    });    
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }  

  onSubmit() {
    this.personService.createPersonPhone(this.addForm.value)
      .subscribe( data => {
    });

    if (this.addForm.valid) {
      this.addForm.reset();
    }
  }

}
