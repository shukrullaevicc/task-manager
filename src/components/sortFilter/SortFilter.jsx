import { Select, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { setFilter, setSort } from '../../redux/taskSlice';

const { Option } = Select;

const SortFilter = () => {
  const dispatch = useDispatch();
  const { filter, sort } = useSelector((state) => state.tasks);

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const handleSortChange = (value) => {
    dispatch(setSort(value));
  };

  return (
    <div className="sort-filter">
      <Select value={filter} onChange={handleFilterChange} className="w-1/3">
        <Option value="all">All</Option>
        <Option value="completed">Completed</Option>
        <Option value="incomplete">Incomplete</Option>
      </Select>
      
      <Select value={sort} onChange={handleSortChange} className="w-1/3">
        <Option value="asc">Ascending</Option>
        <Option value="desc">Descending</Option>
      </Select>
    </div>
  );
};

export default SortFilter;
