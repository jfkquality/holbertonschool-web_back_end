import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName, lastName)];
  // console.log(promises);
  return Promise.allSettled(promises)
    .then((results) => results.forEach((result) => result));
}

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
