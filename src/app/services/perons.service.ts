import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';
import { addDoc, collection, DocumentSnapshot, Firestore, getDocs, QuerySnapshot } from '@angular/fire/firestore';
import { personConverter } from './converter/person-converter';

@Injectable({
  providedIn: 'root',
})
export class PeronsService {
  constructor(private firestore: Firestore) {}

  async list(): Promise<Person[]> {
    const personCollection = collection(this.firestore, 'people').withConverter(
      personConverter
    );

    const querySnapshot: QuerySnapshot<Person> = await getDocs(
      personCollection
    );

    const result: Person[] = [];

    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<Person>) => {
      const data = docSnap.data();
      if (data) {
        result.push(data);
      }
    });  

    return result;
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
