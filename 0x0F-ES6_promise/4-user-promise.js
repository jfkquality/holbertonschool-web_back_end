export default function signUpUser(firstName, lastName) {
  return Promise.resolve({firstName, lastName});
  // return new Promise((resolve) => {
  //   resolve({
  //     firstName,
  //     lastName,
  //   });
  // });
}
// console.log(signUpUser('john', 'knight'));
