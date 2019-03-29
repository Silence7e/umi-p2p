export interface Notification {
  title: string;
  content: string;
  date?: string;
  id: 1;
}

export interface NotificationState {
  data: Notification[];
}
