import { UPDATE_USER } from './actions';

const initialState = {
  user: {
    username: '',
    fullname: '',
    avatar: '',
    _id: '',
    email: '',
    stats: {posts: '', follower: '', following: ''},
    follow: {follower: [], following: []}
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;