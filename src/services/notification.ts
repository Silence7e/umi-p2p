import request from '../utils/request';

export async function getNotifications(...rest: string[]) {
  const { data } = await request('/api/notifications');
  return data.notifications;
}

export default {
  getNotifications,
};
