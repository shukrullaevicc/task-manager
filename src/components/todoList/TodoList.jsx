import { List, Button, Typography, Input } from 'antd';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTask, deleteTask, editTask } from '../../redux/taskSlice';

const { Text } = Typography;

const TodoList = () => {
  const { items, filter, sort } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  const filteredTasks = items.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    const comparison = a.title.localeCompare(b.title);
    return sort === 'asc' ? comparison : -comparison;
  });

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  };

  const handleSave = (id) => {
    dispatch(editTask({ id, title: editingTitle }));
    setEditingTaskId(null);
    setEditingTitle('');
  };

  const handleCancel = () => {
    setEditingTaskId(null);
    setEditingTitle('');
  };

  return (
    <List
      className='task__list'
      itemLayout="horizontal"
      dataSource={sortedTasks}
      renderItem={task => (
        <List.Item
          className={`task-item ${task.completed ? 'completed' : ''}`}
          actions={[
            editingTaskId === task.id ? (
              <>
                <Button className='save' type="link" onClick={() => handleSave(task.id)}>Save</Button>
              
                <Button danger className='cancel' type="link" onClick={handleCancel}>Cancel</Button>
              </>
            ) : (
              <>
                <Button className='complete' type="link" onClick={() => dispatch(toggleTask(task.id))}>
                  {task.completed ? 'Incomplete' : 'Complete'}
                </Button>

                <Button className='edit' type="link" onClick={() => handleEdit(task)}>Edit</Button>

                <Button danger className='delete' type="link" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
              </>
            )
          ]}
        >
          <List.Item.Meta
            title={editingTaskId === task.id ? (
              <Input
                className='edit-input'
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onPressEnter={() => handleSave(task.id)}
              />
            ) : (
              <Text delete={task.completed}>{task.title}</Text>
            )}
            description={`Added: ${task.addedTime}`}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
