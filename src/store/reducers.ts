import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza all day', complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      //console.log('called todo reducer');
      return {
        ...state,
        data
      };
    }
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );

      //console.log(action.payload);
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
