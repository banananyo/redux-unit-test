import { SAVE_COMMENT } from './types';

export function saveComment(comment, time) {
    return {
        type: SAVE_COMMENT,
        payload: comment,
        time,
    };
}
