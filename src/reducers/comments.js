import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      const s = [...state, { comment: action.payload, time: action.time }];
      return s;
    default:
      return state;
  }
}
