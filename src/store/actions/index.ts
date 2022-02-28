
import { ActionType } from "../action-types";
import { TaskItem } from "../model";

export type AddNewTaskPayload = {
    id: number, created_at: string, required_time:number
}
export type UpdateTaskPayload = {
    id: number, resolved_at: string, image: string
}
export type RestoreListPayload = {
    task_list: Array<TaskItem>
}
export interface AddNewTaskAction {
    type: ActionType.ADD_NEW_TASK,
    payload: AddNewTaskPayload
}
export interface UpdateTaskAction {
    type: ActionType.UPDATE_TASK,
    payload: UpdateTaskPayload
}
export interface RestoreListAction {
    type: ActionType.RESTORE_RECORDS,
    payload: RestoreListPayload
}

export type Action = RestoreListAction | AddNewTaskAction | UpdateTaskAction;