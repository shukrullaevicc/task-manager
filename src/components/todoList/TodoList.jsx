import { List, Button, Typography } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { toggleTask, deleteTask } from '../../redux/taskSlice';

const { Text } = Typography;

const TodoList = () => {
  const { items, filter, sort } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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

  return (
    <List
      className='task__list'
      itemLayout="horizontal"
      dataSource={sortedTasks}
      renderItem={task => (
        <List.Item
          className={`task-item ${task.completed ? 'completed' : ''}`}
          actions={[
            <Button
              className='complate'
              type="link"
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.completed ? 'Incomplete' : 'Complete'}
            </Button>,

            <Button
              className='delete'
              type="link"
              danger
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={<Text delete={task.completed}>{task.title}</Text>}
            description={`Added: ${task.addedTime}`}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;