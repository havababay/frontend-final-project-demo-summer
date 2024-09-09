import { Person } from '../../shared/model/person';

export const personConverter = {
  toFirestore: (personToSave: Person) => {
    const phonesArr = [];

    for (let i =0; i < personToSave.phones.length; ++i) {
        phonesArr.push(
            {
                phoneNumer : personToSave.phones[i].number,
            }
        );
    }

    return {
        firstName : personToSave.firstName,
        lastName : personToSave.lastName,
        email : personToSave.email,
        age : personToSave.age,
        phones : phonesArr
    }
  },
  fromFirestore: () => {
    return new Person("","","","");
  }
};
