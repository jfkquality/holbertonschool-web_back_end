export default function divideFunction(numerator, denominator) {
  // try {
  //   if (denominator === 0) throw new Error('cannot divide by 0');
  //   return numerator / denominator;
  // } catch (err) {
  //   // err.mesage ='cannot divide by 0';
  //   return (err);
  // }
  if (denominator === 0) throw new Error('cannot divide by 0');
  return numerator / denominator;
}
