import React from 'react';
import {TasksProvider} from './src/context/TaskContext';
import {Home} from './src/pages/Home/Home';

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
