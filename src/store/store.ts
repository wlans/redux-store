import { reducer } from './index';

export class Store {
  private subcribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subcribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  subsribe(fn) {
    this.subcribers = [...this.subcribers, fn];
    this.notify();
    return () => {
      this.subcribers = this.subcribers.filter(sub => sub !== fn);
    };
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();

    //console.log(this.state);
  }

  private notify() {
    this.subcribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    console.log(state);
    for (const prop in this.reducers) {
      //console.log("its " + state[prop]);
      newState[prop] = this.reducers[prop](state[prop], action);
      //console.log(" then its " + state[prop]);
    }

    return newState;
  }
}
