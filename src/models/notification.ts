import notification from '../services/notification';
import { ReduxAction, ReduxSagaEffects } from '../interfaces';

export default {
  namespace: 'notification',
  state: {
    data: [],
  },
  reducers: {
    notifications(state: any, { payload }: ReduxAction) {
      return {
        ...state,
        data: payload.data,
      };
    },
  },
  effects: {
    *getNotifications(action: ReduxAction, { call, put }: ReduxSagaEffects) {
      const data = yield call(notification.getNotifications);
      yield put({
        type: 'notifications',
        payload: {
          data,
        },
      });
    },
  },
};
