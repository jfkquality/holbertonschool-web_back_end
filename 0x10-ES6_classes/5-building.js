export default class Building {
  constructor(sqft) {
    // console.log("THIS =", this);
    // console.log("THIS CONSTRUCTOR =", this.constructor);
    // console.log("THIS CONSTRUCTOR prototype =", this.constructor.prototype);
    // console.log("INSTANCE OF THIS =", this instanceof Building);
    // console.log("Building.prototype.evacuationWarningMessage =",
    // Building.prototype.evacuationWarningMessage);
    // console.log("this.evacuationWarningMessage =", this.evacuationWarningMessage);
    // console.log("Super evacuationWarningMessage =", super.evacuationWarningMessage);
    // console.log("SUPER CONSTRUCTOR =", super.prototype);
    // console.log("this.constructor === Building", this.constructor === Building);
    if (this.constructor !== Building
    // && this.evacuationWarningMessage) === undefined) { //super.evacuationWarningMessage
    // && this.evacuationWarningMessage == Building.prototype.evacuationWarningMessage
    ) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // evacuationWarningMessage() {
  //   console.log('HELLO');
  // }
}
// Building.evacuationWarningMessage();
