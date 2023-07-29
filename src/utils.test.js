import {
  addTask,
  updateTaskStatus,
  updateTaskDescription,
  moveTaskToTop,
  moveTaskToBottom,
} from './utils.js';

const createMockLocalStorage = () => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
};

const localStorageMock = createMockLocalStorage();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Todo List Functions', () => {
  let initialList;

  beforeEach(() => {
    initialList = [];
  });

  it('should add a task to the list', () => {
    addTask('Test Task 1', initialList);
    addTask('Test Task 2', initialList);

    expect(initialList).toHaveLength(2);
    expect(initialList[0].description).toBe('Test Task 1');
    expect(initialList[1].description).toBe('Test Task 2');
  });

  it('should update localStorage with the new list when adding a task', () => {
    addTask('Test Task 1', initialList);
    addTask('Test Task 2', initialList);

    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(initialList);
  });

  it('should mark a task as completed', () => {
    initialList = [
      {
        id: 1,
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        id: 2,
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        id: 3,
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];

    const updatedList = updateTaskStatus(2, true, initialList);
    expect(updatedList[1].completed).toBe(true);
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(updatedList);
  });

  it('should mark a task as incomplete', () => {
    initialList = [
      {
        id: 1,
        description: 'Task 1',
        completed: true,
        index: 1,
      },
      {
        id: 2,
        description: 'Task 2',
        completed: true,
        index: 2,
      },
      {
        id: 3,
        description: 'Task 3',
        completed: true,
        index: 3,
      },
    ];

    const updatedList = updateTaskStatus(2, false, initialList);
    expect(updatedList[1].completed).toBe(false);
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(updatedList);
  });

  it('should update the description of a task', () => {
    initialList = [
      {
        id: 1,
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        id: 2,
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        id: 3,
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];

    const updatedList = updateTaskDescription(2, 'Updated Task 2', initialList);
    expect(updatedList[1].description).toBe('Updated Task 2');
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(updatedList);
  });

  it('should move a task to the top of the list', () => {
    initialList = [
      {
        id: 1,
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        id: 2,
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        id: 3,
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];

    const updatedList = moveTaskToTop(2, initialList);
    expect(updatedList[0].id).toBe(2);
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(updatedList);
  });

  it('should move a task to the bottom of the list', () => {
    initialList = [
      {
        id: 1,
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        id: 2,
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        id: 3,
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];

    const updatedList = moveTaskToBottom(2, initialList);
    expect(updatedList[2].id).toBe(2);
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual(updatedList);
  });
});
