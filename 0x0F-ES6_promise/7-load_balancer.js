export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  return Promise.race(promises)
    .then((value) => value);
}

// console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
