export default class CardModel {
  constructor(id, groupId, thumbnail) {
    this.id = id;
    this.groupId = groupId;
    this.selected = false;
    this.matched = false;
    this.thumbnail = thumbnail;
  };
}