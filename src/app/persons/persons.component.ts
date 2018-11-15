import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

    persons = null;
    person: any = {};

    constructor(private personsService: PersonsService) {
        this.persons = personsService.getPersons();
    }

    ngOnInit() { }

    createPerson() {

         this.person.id = Date.now();
         console.log(this.person);
        this.personsService.createPerson(this.person);
    }

    cancel() {
        this.person = {};
    }
}
