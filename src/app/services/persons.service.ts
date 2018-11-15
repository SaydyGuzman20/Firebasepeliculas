import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class PersonsService {

    constructor(private db:AngularFireDatabase) { }


    public createPerson(person) {
        this.db.database.ref('personas/'+person.id).set(person);
        // this.db.database.ref('personas/').set(person);
    }

    public getPersons() {
        return this.db.list('personas').valueChanges();
        }
}
