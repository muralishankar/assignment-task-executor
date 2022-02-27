import { ActionType } from "../action-types";
import { TaskItem } from '../model';
import { Action } from "../actions";

const getDataInLocal = () => (window.localStorage.getItem("TaskList"));

const setDataInLocal = (list: Array<TaskItem>) => (window.localStorage.setItem("TaskList", JSON.stringify(list)));


const initialState: Array<TaskItem> = JSON.parse((getDataInLocal() ? getDataInLocal() : '[]') as string);

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_NEW_TASK: {
            let { id, created_at } = action.payload;
            return [{ id, created_at, resolved_at: "", status: "Pending", image: "" }, ...state];
        }
        case ActionType.UPDATE_TASK: {
            let { id, image, resolved_at } = action.payload;
            let update_list = state.map((item) => {
                if (item.id === id) {
                    return { ...item, image, resolved_at: resolved_at, status: "Resolved" }
                }
                return item;
            });
            setDataInLocal(update_list);
            return update_list;
        }
        default:
            return state;
    }
}

export default reducer