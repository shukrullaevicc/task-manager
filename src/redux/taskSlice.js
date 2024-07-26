import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'all', // all, completed, incomplete
    sort: 'asc', // asc, desc
  },

  reducers: {
    // Add new task
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
        addedTime: new Date().toLocaleString(),
      });
    },

    // Toggle task
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    // Delete task
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },

    // Edit task
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.items.find(task => task.id === id);
      if (task) {
        task.title = title;
      }
    },

    // Set filter
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    // Set sort
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask, editTask, setFilter, setSort } = tasksSlice.actions;

export default tasksSlice.reducer;