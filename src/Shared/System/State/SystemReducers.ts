import { AnyAction } from 'redux';
import { SystemStateInterface, UPDATE_USERINFO } from '../SystemTypes';
import { INITIAL_STATE } from './StateTypes';

export default function systemReducer(state:SystemStateInterface = INITIAL_STATE, action: AnyAction): SystemStateInterface {
  switch (action.type) {
    case UPDATE_USERINFO: {
      return {
        ...state,
        userInfo: state.userInfo,
      };
    }
    default:
      return state;
  }
}
