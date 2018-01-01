// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators
export class AddToDo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class RemoveToDo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}

//console.log(new AddToDo({}));
