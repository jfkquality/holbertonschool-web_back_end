export default function createIteratorObject(report) {
  return report[Symbol.iterator]();
}
