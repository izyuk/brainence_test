import {combineReducers} from 'redux';
import getId from './actions_get';
import useId from './actions_use';
import goAlbId from './alb_id';
const allReducers = combineReducers({
    getUserId: getId,
    dataByID: useId,
    albumByID: goAlbId
});

export default allReducers;