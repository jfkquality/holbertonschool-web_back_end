import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(fileName), uploadPhoto(firstName, lastName)];
  return Promise.allSettled(promises)
    .then((results) => results.forEach((result) => { result.status, result.value }));
}

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
