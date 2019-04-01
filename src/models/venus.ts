import { DvaModel, ReduxAction, ReduxSagaEffects } from '../interfaces/index';
import service from '../services/venus';
const NAMESPACE = 'venus';

const venus: DvaModel<any> = {
  namespace: NAMESPACE,
  state: {
    list: [],
    offset: 0,
    size: 10,
  },
  reducers: {
    getVenus(state, { payload }: ReduxAction) {
      const { list, offset, size } = payload;
      return {
        ...state,
        list,
        offset,
        size,
      };
    },
  },
  effects: {
    *fetchVenus(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const { offset, size=10, total = true } = action.payload;
      const data = yield call(service.getVenusList, { offset, size, total });
      yield put({
        type: `getVenus`,
        payload: {
          list: data.list,
          size: data.size,
          offset: data.offset,
        },
      });
    },
  },
};

export default venus;
