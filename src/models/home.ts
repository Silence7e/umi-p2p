import home from '../services/home';
import { DvaModel, ReduxAction, ReduxSagaEffects } from '../interfaces';
import { HomeState } from '../interfaces/home';

const NAMESPACE = 'home';

const model: DvaModel<HomeState> = {
  namespace: NAMESPACE,
  state: {
    banners: [],
  },
  reducers: {
    addBanners(state, { payload }: ReduxAction) {
      return {
        ...state,
        banners: payload.banners,
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
  },
};

export default model;
