import axios from "axios";
import { toQueryString } from "../utilities/http-utility";

class EntityService {
  constructor(settings) {
    this.listUrl = settings.listUrl;
    this.detailsUrl = settings.detailsUrl;
    this.saveUrl = settings.saveUrl;
    this.deleteUrl = settings.deleteUrl;
    this.version = settings.version;
  }

  async details(id) {
    const url = this.getDetailsUrl(id);
    const response = await axios.get(url);
    this.checkResponse(response);
    return response.data;
  }
  async list(so) {
    const url = this.getListUrl(so);
    const response = await axios.get(url);
    this.checkResponse(response);
    return response.data;
  }
  async save(item) {
    const url = this.getSaveUrl(item);
    const response = await axios.post(url, item);
    this.checkResponse(response);
    return item;
  }
  async delete(item) {
    const url = this.getDeleteUrl(item);
    const response = await axios.delete(url);
    this.checkResponse(response);
    return item;
  }

  getDetailsUrl(id) {
    return this.detailsUrl.replace("{id}", id);
  }
  getListUrl(so = {}) {
    let url = this.listUrl;
    if (Object.keys(so).length > 0) {
      url += "?" + toQueryString(so);
    }
    return url;
  }
  getSaveUrl(item) {
    return this.saveUrl.replace("{id}", item.id);
  }
  getDeleteUrl(item) {
    return this.getDeleteUrl.replace("{id}", item.id);
  }

  checkResponse(response) {
    if (response.status < 200 || response.status >= 400) {
      console.error("Remote error", { response });
      throw Error(`${response.statusText} (${response.status})`);
    }
  }
}

export default EntityService;
