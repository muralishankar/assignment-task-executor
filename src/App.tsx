import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, ActionCreators } from './store';
import { TaskListTable } from './component/TaskListTable';
import { TaskListItem } from "./component/TaskListItem";
import './App.css';

function App() {
  let taskList = useSelector((state: State) => (state.taskList));
  const dispatch = useDispatch();
  const { addNewTask } = bindActionCreators(ActionCreators, dispatch);
  return (
    <div style={{ width: "75%", }}>
      <button type="button" onClick={() => { addNewTask((new Date()).getTime()); }} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">Add Task</button>
      <TaskListTable>
        {taskList.map((task) => (
          <TaskListItem id={task.id} created_at={task.created_at} resolved_at={task.resolved_at} image={task.image} status={task.status}></TaskListItem>
        ))}
      </TaskListTable>
    </div>

  )
}
export default App;
