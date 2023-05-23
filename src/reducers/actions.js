// Action type
export const UPDATE_USER = 'UPDATE_USER';

// Action creator
export const updateUser = (userData) => {
  return {
    type: UPDATE_USER,
    payload: userData
  };
};