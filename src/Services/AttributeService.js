import APIService from "./APIService";

export default class AttributeService {
  static getList() {
    return APIService.get("Attribute/list");
  }

  static addAttribute(attributeName) {
    return APIService.post("Attribute/", { name: attributeName });
  }

  static deleteAttribute(id) {
    return APIService.delete(`Attribute/${id}`);
  }

  static editAttribute(id, attributeName) {
    return APIService.put(`Attribute/${id}`, { name: attributeName });
  }
}
