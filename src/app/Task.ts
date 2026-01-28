export type Status = "All" | "ToDo" | "In progress" | "Done"

export interface Task {
  title: string,
  assignee: string,
  estimation: string,
  status: Status
}
