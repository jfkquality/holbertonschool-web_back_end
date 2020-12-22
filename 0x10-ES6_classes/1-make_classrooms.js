import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const room1 = new ClassRoom(19);
  rooms.push(room1);
  const room2 = new ClassRoom(20);
  rooms.push(room2);
  const room3 = new ClassRoom(34);
  rooms.push(room3);
  return rooms;
  // [
  //   new ClassRoom(19),
  //   new ClassRoom(20),
  //   new ClassRoom(34)
  // ];
  // [
  //   Object(new ClassRoom(19)),
  //   Object(new ClassRoom(20)),
  //   Object(new ClassRoom(34))
  // ];
}

// initializeRooms();
