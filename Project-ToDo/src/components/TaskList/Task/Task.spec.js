import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Task from './Task';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Task component', () => {
  // Створимо фейковий стан для store
  const initialState = {
    todo: {
      todoList: [
        { id: 1, name: 'Task 1', description: 'Description 1', status: false },
        { id: 2, name: 'Task 2', description: 'Description 2', status: true },
      ],
    },
  };
  const store = mockStore(initialState);// Можете передати початковий стан, якщо потрібно

  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Task
          id={1}
          name="Task Name"
          description="Task Description"
          status={false}
          removeFromList={() => {}}
          updateStatus={() => {}}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
