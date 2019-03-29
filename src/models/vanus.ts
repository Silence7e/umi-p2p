import { DvaModel, ReduxAction, ReduxSagaEffects } from '../interfaces/index';
import service from '../services/vanus';
const NAMESPACE = 'vanus';

const vanus: DvaModel<any> = {
  namespace: NAMESPACE,
  state: {
    list: [],
    offset: 0,
    size: 10,
  },
  reducers: {
    getVanus(state, { payload }: ReduxAction) {
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
    *fetchVanus(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const { offset, size, total = true } = action.payload;
      const data = yield call(service.getVanusList, { offset, size, total });
      yield put({
        type: `${NAMESPACE}/getVanus`,
        payload: {
          list: data.list,
          size: data.size,
          offset: data.offset,
        },
      });
    },
  },
};

export default vanus;
