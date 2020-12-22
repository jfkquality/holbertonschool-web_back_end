export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.schema === undefined) { // prototype.evacuationWarningMessage() {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
