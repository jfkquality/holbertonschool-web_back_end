export default function handleResponseFromAPI(promise) {
  promise.then();
  //   => {
  //   return promise.resolve({
  //     status: 200,
  //     body: 'Success',
  //   });
  // }, () => {
  //     return Error();
  // });
  // promise.isResolved(() => {
  console.log('Got a response from the API');
  // });
}
