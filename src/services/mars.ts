import request from '../utils/request';
import { ListParams } from '../interfaces/list';

export async function getMarsList({ offset = 0, size = 10, total = true }: ListParams) {
  const { data } = await request(`/api/mars?offset=${offset}&size=${size}&total=${total}`);
  return data;
}

export default {
  getMarsList,
};
