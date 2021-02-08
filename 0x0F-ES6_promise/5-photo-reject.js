export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
  // return new Promise.rej((reject) => {
  //   reject(() => new Error(`$fileName cannot be processed`));
  // });
}
console.log(uploadPhoto('guillame.jpg'));
