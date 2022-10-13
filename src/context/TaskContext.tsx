import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext} from 'react';

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

const taskData = '@Mytasks:Tasks';

export interface ITask {
  id: string;
  title: string;
}

export const TaskContext = createContext<ITasksContext>({} as ITasksContext);

interface IProps {
  children: React.ReactElement;
}

export const TasksProvider: React.FC<IProps> = ({children}) => {
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    const loadTasks = async () => {
      const taskList = await AsyncStorage.getItem(taskData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    };
    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
  };

  return (
    <TaskContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskList = (): ITasksContext => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskList, must be used only in one task provider!');
  }
  return context;
};
