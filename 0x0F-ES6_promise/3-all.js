import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return Promise.resolve({photo, user})
  } catch (err) {
    return Promiser.reject({photo: null, user: null});

// handleProfileSignup();
