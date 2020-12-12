/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  // let idx = 0;
  for (const value of array) {
    const idx = array.indexOf(value); // from old code. Much better than counter.
    array[idx] = appendString + value;
    // idx += 1;
  }

  return array;
}
/* eslint-enable no-param-reassign */
