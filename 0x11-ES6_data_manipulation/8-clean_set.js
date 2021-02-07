export default function cleanSet(set, startString) {
  if (!startString) return '';
  const arr = Array.from(set).filter(
    (a) => a.includes(startString),
  ).map((e) => e.slice(startString.length)).join('-');
  return (arr);
}
