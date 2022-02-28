import { ActionType } from "../action-types";
import { TaskItem } from '../model';
import { Action } from "../actions";
import { setDataTaskList } from "../utils";
import { Pending, Resolved } from "../../constant";
import _ from "lodash";


const initialState: Array<TaskItem> = [];

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_NEW_TASK: {
            let { id, created_at, required_time } = action.payload;
            let update_list = [{ id, created_at, resolved_at: "", status: Pending, image: "", required_time }, ...state]
            setDataTaskList(update_list);
            return update_list;
        }
        case ActionType.RESTORE_RECORDS: {
            let { task_list } = action.payload;
            return task_list;
        }
        case ActionType.UPDATE_TASK: {
            let { id, image, resolved_at } = action.payload;
            let update_list = state.map((item) => {
                if (item.id === id) {
                    return { ...item, image, resolved_at: resolved_at, status: Resolved }
                }
                return item;
            });
            update_list= _.orderBy(update_list, 'status', 'asc');
            setDataTaskList(update_list);
            return update_list;
        }
        default:
            return state;
    }
}

export default reducer