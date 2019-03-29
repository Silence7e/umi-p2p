import { HomeState } from './home';
import { VanusState } from './product/vanus';
import { NotificationState } from './notification';

export interface State {
  home: HomeState;
  vanus: VanusState;
  notification: NotificationState;
}
