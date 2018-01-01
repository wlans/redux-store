import { reducer } from "./index";

export class Store {
  private subcribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);

    console.log(this.state);
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
