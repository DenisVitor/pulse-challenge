export interface Task {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  category?: string;
}
