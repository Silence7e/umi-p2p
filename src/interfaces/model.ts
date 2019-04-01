import { HomeState } from './home';
import { VenusState } from './product/venus';
import { NotificationState } from './notification';

export interface State {
  home: HomeState;
  venus: VenusState;
  notification: NotificationState;
}
