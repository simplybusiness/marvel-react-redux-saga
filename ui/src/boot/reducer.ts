import { combineReducers } from 'redux';

import { Action } from 'boot/store';

// interface GlobalState {
//   heroes: Object[];
//   hero: Object;
// }

const defaultState = {
  heroes: [],
  hero: {},
};

const heroes = (
  prevState: Object[] = defaultState.heroes,
  action: Action,
): Object[] => {
  console.log(action);

  return prevState;
};

export default combineReducers({
  heroes,
});
