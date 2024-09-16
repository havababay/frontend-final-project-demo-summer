import {
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { Person } from '../../shared/model/person';
import { PhoneNumber } from '../../shared/model/phone-number';
import { PhoneType } from '../../shared/model/phone-type';

export const personConverter = {
  toFirestore: (personToSave: Person) => {
    const phonesArr = [];

    for (let i = 0; i < personToSave.phones.length; ++i) {
      phonesArr.push({
        phoneNumer: personToSave.phones[i].number,
      });
    }

    return {
      firstName: personToSave.firstName,
      lastName: personToSave.lastName,
      email: personToSave.email,
      age: personToSave.age,
      phones: phonesArr,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);

    const person = new Person(
      snapshot.id,
      data['firstName'],
      data['lastName'],
      data['email'],
      data['age']
    );

    const phones = data['phones'];
    if (phones) {
      for (let i = 0; i < phones.length; ++i) {
        person.phones.push(new PhoneNumber(phones[i].number, PhoneType.Mobile));
      }
    }


    return person;
  },
};
