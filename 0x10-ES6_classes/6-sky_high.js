import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    super.evacuationWarningMessage();
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
