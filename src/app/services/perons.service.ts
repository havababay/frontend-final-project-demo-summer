import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { personConverter } from './converter/person-converter';

@Injectable({
  providedIn: 'root',
})
export class PeronsService {
  constructor(private firestore: Firestore) {}

  list(): Person[] {
    return [];
  }

  get(id: string): Person | undefined {
    return undefined;
  }

  async add(newPersonData: Person) {
    const personCollection = collection(this.firestore, 'people').withConverter(
      personConverter
    );
    await addDoc(personCollection, newPersonData);
  }

  update(existingPerson: Person): void {}

  delete(existingPersonId: string): void {}
}
