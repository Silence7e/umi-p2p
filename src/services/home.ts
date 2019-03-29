import request from '../utils/request';

export async function getbanners(...rest: string[]) {
  const { data } = await request('/api/home/banners');
  return data.banners;
}

export default {
  getbanners,
};
