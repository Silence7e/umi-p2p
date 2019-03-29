import request from '../utils/request';
import { ListParams } from '../interfaces/list';

export async function getVanusList({ offset = 0, size = 10, total = true }: ListParams) {
  const { data } = await request(`/api/vanus?offset=${offset}&size=${size}&total=${total}`);
  return data.notifications;
}

export default {
  getVanusList,
};
