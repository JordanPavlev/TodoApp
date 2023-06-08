export interface Todo {
  id?: number;
  title: string;
  description: string;
  createdAt: Date;
  deadline: string;
}

export interface Column {
  id: number;
  name: string;
  todos: Todo[];
}

export interface Section {
  id: number;
  name: string;
  columns: Column[];
}
