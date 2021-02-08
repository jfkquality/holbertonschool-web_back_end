import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user]).then((results) => {
    console.log(results[0].body, results[1].firstName, results[1].lastName);
  });
}

// handleProfileSignup();
