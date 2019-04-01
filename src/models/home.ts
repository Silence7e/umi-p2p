import home from '../services/home';
import venus from '../services/venus';
import mars from '../services/mars';
import { DvaModel, ReduxAction, ReduxSagaEffects } from '../interfaces';
import { HomeState } from '../interfaces/home';

const NAMESPACE = 'home';

const model: DvaModel<HomeState> = {
  namespace: NAMESPACE,
  state: {
    banners: [],
    mars: [],
    venus: [],
  },
  reducers: {
    addBanners(state, { payload }: ReduxAction) {
      return {
        ...state,
        banners: payload.banners,
      };
    },
    getVenus(state, { payload }: ReduxAction) {
      const { list } = payload;
      return {
        ...state,
        venus: list,
      };
    },
    getMars(state, { payload }: ReduxAction) {
      const { list } = payload;
      return {
        ...state,
        mars: list,
      };
    },
  },
  effects: {
    *getBanners(action: ReduxAction, { put, call }: ReduxSagaEffects) {
      const data = yield call(home.getbanners);
      yield put({
        type: 'addBanners',
        payload: {
          banners: data,
        },
      });
    },
    *fetchVenus(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const { offset, size = 2, total = true } = action.payload;
      const data = yield call(venus.getVenusList, { offset, size, total });
      yield put({
        type: `getVenus`,
        payload: {
          list: data.list,
          size: data.size,
          offset: data.offset,
        },
      });
    },
    *fetchMars(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const { offset, size = 4, total = true } = action.payload;
      const data = yield call(mars.getMarsList, { offset, size, total });
      yield put({
        type: `getMars`,
        payload: {
          list: data.list,
          size: data.size,
          offset: data.offset,
        },
      });
    },
  },
};

export default model;
