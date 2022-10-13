import React from 'react';
import {
  FlatList,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {ITask, useTaskList} from '../../context/TaskContext';

export interface Itasks {
  id: string;
  title: string;
}

export const TaskList = () => {
  const {tasks, removeTask} = useTaskList();

  const handleRemoveTasks = (id: string) => {
    Alert.alert('Are you sure?', 'Do you really want delete your task?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Delete',
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.buttonTask}
          onPress={() => handleRemoveTasks(item.id)}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
