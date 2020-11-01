export default class EventService {
  static events = {};

  static Subscribe(eventName, func) {
    this.events[eventName] = [...(this.events[eventName] || []), func];
  }

  static Emit(eventName) {
    this.events[eventName] && this.events[eventName].map((x) => x());
  }
}
