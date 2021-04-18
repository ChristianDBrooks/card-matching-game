export default class CardModel {
  constructor(id, groupId) {
    this.id = id;
    this.index = null;
    this.groupId = groupId;
    this.selected = false;
    this.flipped = false;
    this.matched = false;
  };
}