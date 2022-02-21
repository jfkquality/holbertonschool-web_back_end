export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrBuff = new ArrayBuffer(length);
  const int8 = new Int8Array(arrBuff, 0, length);
  int8.set([value], position);
  const dataView = new DataView(arrBuff); // , 0, length);
  // dataView.setInt8 = (position, value);
  // const vectorLength = dataView.getUint8(position);
  return dataView;
}
