export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    }
    if (typeof (length) === 'number') {
      this._length = length;
    }
    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nam) {
    this._name = nam;
  }

  set length(len) {
    this._length = len;
  }

  set students(stud) {
    this._students = stud;
  }
}
