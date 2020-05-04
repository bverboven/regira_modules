import EventHandler from "../events/event-handler";

class EntityManager {
  constructor(service) {
    this._service = service;
    this.state = {
      details: undefined,
      items: undefined
    };
  }

  async details(id) {
    const original = this.state.details;
    const item = await this._service.details(id);
    this.setDetails(item);
    await this.trigger("change-details", { original, item });
    return this.state.details;
  }
  async list(so = {}) {
    const original = this.state.items;
    const items = await this._service.list(so);
    this.setItems(items);
    await this.trigger("change-items", { original, items });
    return this.state.items;
  }
  async save(item = this.state.details) {
    const saved = await this._service.save(item);
    this.setDetails(saved);
    if (this.state.items != null) {
      const newItems = [...this.state.items];
      const itemIndex = newItems.findIndex(x => x.id === item.id);
      if (itemIndex !== -1) {
        newItems.splice(itemIndex, 1, saved);
      } else {
        newItems.push(saved);
      }
      this.setItems(newItems);
    }
    await this.trigger("save-item", { original: item, saved });
    return saved;
  }
  async delete(item = this.state.details) {
    await this._service.delete(item);
    if (this.state.items != null) {
      const newItems = this.state.items.filter(x => x.id !== item.id);
      this.setItems(newItems);
    }
    if (this.state.details && this.state.details.id === item.id) {
      this.setDetails(null);
    }
    await this.trigger("delete-item", { item });
    return item;
  }

  async newItem() {
    const newItem = {};
    return this.setDetails(newItem);
  }
  setDetails(item) {
    this.state.details = item;
  }
  setItems(items) {
    this.state.items = items;
  }

  reset() {
    this.state.items = undefined;
    this.state.details = undefined;
  }
}
EventHandler.injectInto(EntityManager.prototype);

export default EntityManager;
