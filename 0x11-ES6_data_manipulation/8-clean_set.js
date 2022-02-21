export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const arr = Array.from(set).filter(
    (a) => (a ? a.includes(startString) : ''),
  ).map((e) => e.slice(startString.length)).join('-');

  // const arr2 = arr.filter((a) => (a ? a.includes(startString) : ''));
  // const arr3 = arr2.map((e) => e.slice(startString.length));
  return (arr);
}
