export interface ITask {
    _id: string
    task: string
    isDone: boolean
}

export interface ITaskList {
    task: ITask
    getTasks: () => void
}

