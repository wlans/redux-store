import { renderTodos } from './utils';
import * as fromStore from './store';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: fromStore.reducer
};

const store = new fromStore.Store(reducers);

console.log(store.value);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddToDo(todo));

    console.log(store.dispatch);

    input.value = '';
  },
  false
);

const unsubcribe = store.subsribe(state => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubcribe, false);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    //console.log(target);
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    store.dispatch(new fromStore.RemoveToDo(todo));
  }
});

store.subsribe(state => console.log('State:::', state));
