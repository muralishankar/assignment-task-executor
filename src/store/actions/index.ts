
import { ActionType } from "../action-types"

export type AddNewTaskPayload = {
    id: number, created_at: string
}
export type UpdateTaskPayload = {
    id: number, resolved_at: string, image: string
}
export interface AddNewTaskAction {
    type: ActionType.ADD_NEW_TASK,
    payload: AddNewTaskPayload
}
export interface UpdateTaskAction {
    type: ActionType.UPDATE_TASK,
    payload: UpdateTaskPayload
}
export type Action = AddNewTaskAction | UpdateTaskAction