import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'; // підключимо redux-mock-store
import TaskList from './TaskList';

// Створимо фейковий store за допомогою redux-mock-store
const mockStore = configureStore([]);

describe('TaskList component', () => {
  test('renders correctly', () => {
    // Створимо фейковий стан для store
    const initialState = {
      todo: {
        todoList: [
          { id: 1, name: 'Task 1', description: 'Description 1', status: false },
          { id: 2, name: 'Task 2', description: 'Description 2', status: true },
        ],
      },
    };
    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
