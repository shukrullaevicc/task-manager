import { Input, Button } from 'antd';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      
      <Input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '8px' }}
      />

      <Button type="primary" htmlType="submit" block>
        Add Task
      </Button>

    </form>
  );
};

export default TaskForm;
