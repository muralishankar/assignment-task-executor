import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, ActionCreators } from './store';
import { TaskListTable } from './component/TaskListTable';
import { TaskListItem } from "./component/TaskListItem";
import { AppHeader } from './component/AppHeader';
import './App.css';

function App() {
  let taskList = useSelector((state: State) => (state.taskList));
  const dispatch = useDispatch();
  const { addNewTask, restoreTaskList } = bindActionCreators(ActionCreators, dispatch);
  useEffect(() => {
    restoreTaskList();
  }, []);
  return (
    <div className='table-content'>
      <AppHeader headerText={"Job Tracker Application"} actionBtnClick={() => { addNewTask((new Date()).getTime()); }} actionBtnText={"Create Job"} />
      <TaskListTable>
        {taskList.map((task) => (
          <TaskListItem key={task.id} id={task.id} created_at={task.created_at} resolved_at={task.resolved_at} image={task.image} status={task.status}></TaskListItem>
        ))}
      </TaskListTable>
    </div>

  )
}
export default App;
