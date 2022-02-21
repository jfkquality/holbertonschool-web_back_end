import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'rejected') {
          result.value = `Error: ${result.reason.message}`; // eslint-disable-line no-param-reassign
          delete result.reason; // eslint-disable-line no-param-reassign
        }
      });
      return results;
    });
}

// console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
