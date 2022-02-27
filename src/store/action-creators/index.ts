import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";
import { getDateTime, randomIntFromInterval } from '../utils';
import _ from "lodash";

export const addNewTask = (id: number, created_at: string = getDateTime()) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.ADD_NEW_TASK, payload: { id, created_at } });
        setTimeout(() => {
            fetch("https://api.unsplash.com/photos/random?&client_id=xO4CqJLnbGHSeZXjjJ_sKONWC0EswBvsktNVB1ZArnA&count=1&query=food").then((response) => (response.json())).then((items: Array<object>) => {
                for (let item of items) {
                    dispatch({ type: ActionType.UPDATE_TASK, payload: { id, resolved_at: getDateTime(), image: _.get(item, 'urls.small_s3') } });
                }
            })

        }, randomIntFromInterval(1, 60)*5*1000);
    }
}