export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof (length) !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students)
        && students.every((student) => typeof (student) === 'string')) {
      this._students = students;
    } else {
      throw TypeError('students must be an Array of strings');
    }
    this._name = name;
    this._length = length;
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

  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
