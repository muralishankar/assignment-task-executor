import { STORAGE_KEY } from "../../constant";
import { TaskItem } from "../model";

export const getDateTime = () => {
    return new Date().toLocaleString();
}
export const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const fetchRecords = () => (window.localStorage.getItem(STORAGE_KEY));

export const getDataTaskList = (): Array<TaskItem> => (JSON.parse((fetchRecords() ? fetchRecords() : '[]') as string));

export const setDataTaskList  = (list: Array<TaskItem>): void => (window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list)));
