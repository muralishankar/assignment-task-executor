import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";
import { getDataTaskList, getDateTime, randomIntFromInterval } from '../utils';
import _ from "lodash";
import { TaskItem } from "../model";
import { IMAGE_PATH_API, Pending, UNSPLASH_URL } from "../../constant";

export const addNewTask = (id: number, created_at: string = getDateTime()) => {
    return (dispatch: Dispatch<Action>) => {
        let required_time = randomIntFromInterval(1, 60) * 5 * 1000;
        dispatch({ type: ActionType.ADD_NEW_TASK, payload: { id, created_at, required_time } });
        executeTask(dispatch, id, required_time);
    }
}

export const restoreTaskList = () => {
    return (dispatch: Dispatch<Action>) => {
        let task_list = getDataTaskList();
        dispatch({ type: ActionType.RESTORE_RECORDS, payload: { task_list } });
        let pending_tasks = task_list.filter(item => (item.status === Pending));
        for (let { required_time, id, } of pending_tasks) {
            executeTask(dispatch, id, required_time);
        }
    }
}

const executeTask = (dispatch: Dispatch<Action>, id: number, required_time: number = 5) => {
    setTimeout(() => {
        fetch(UNSPLASH_URL).then((response) => (response.json())).then((items: Array<object>) => {
            for (let item of items) {
                dispatch({ type: ActionType.UPDATE_TASK, payload: { id, resolved_at: getDateTime(), image: _.get(item, IMAGE_PATH_API) } });
            }
        })
    }, required_time);
}
