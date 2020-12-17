export default function handleResponseFromAPI(promise) {
  promise.finally(() => {
    console.log('Got a response from the API');
  });
  promise.then(
    () => (
      {
        status: 200,
        body: 'Success',
      }),
    () => {
      Error();
    },
  );
}
