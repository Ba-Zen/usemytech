import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_ERROR';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://usemytechstuffapp.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Error. Please try again'
      });
    });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('https://usemytechstuffapp.herokuapp.com/api/register', user)
    .then(res => {
      console.log('response', res);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const ADD_ITEM_START = ' ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItem = item => dispatch => {
  console.log(item);
  dispatch({ type: ADD_ITEM_START });
  const headers = { Authorization: localStorage.getItem('token') };
  return axios
    .post('https://usemytechstuffapp.herokuapp.com/api/items/', item, {
      headers: headers
    })
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE, payload: err });
    });
};

export const FETCH_ITEM_START = 'FETCH_ITEM_START';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const fetchItems = () => dispatch => {
  dispatch({ type: FETCH_ITEM_START });
  return axios
    .get('https://usemytechstuffapp.herokuapp.com/api/items')
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEM_FAILURE, payload: err });
    });
};

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  return axios
    .delete(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res.data.message);
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err.response });
    });
};

export const EDIT_ITEM_START = ' EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const editItem = item => dispatch => {
  dispatch({ type: EDIT_ITEM_START });
  console.log('ITEM', item);
  return axios
    .put(`https://usemytechstuffapp.herokuapp.com/api/items/${item.id}`, item, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res);
      // dispatch({ type: EDIT_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_ITEM_FAILURE, payload: err });
    });
};

export const FETCH_ID_START = 'FETCH_ID_START';
export const FETCH_ID_SUCCESS = 'FETCH_ID_SUCCESS';
export const FETCH_ID_FAILURE = 'FETCH_ID_FAILURE';

export const fetchId = id => dispatch => {
  console.log('ID', id);
  dispatch({ type: FETCH_ID_START });
  return axios
    .get(`https://usemytechstuffapp.herokuapp.com/api/items/${id}`)
    .then(res => {
      console.log('WYA', res.data);
      dispatch({ type: FETCH_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ID_FAILURE, payload: err });
    });
};

export const SELECT_ITEM_START = 'SELECT_ITEM_START';
export const SELECT_ITEM_SUCCESS = 'SELECT_ITEM_SUCCESS';
export const SELECT_ITEM_FAILURE = 'SELECT_ITEM_FAILURE';

export const selectItem = item => dispatch => {
  console.log(item);
  dispatch({ type: SELECT_ITEM_START, payload: 'started' });
  dispatch({ type: SELECT_ITEM_SUCCESS, payload: item });
};

export function logout() {
  localStorage.removeItem('user');
}

//V2
// export const addItem = item => dispatch => {
//     dispatch({ type: ADD_ITEM_START });
//     const headers = { Authorization: localStorage.getItem('token')}
//     return axios
//       .post("https://usemytechstuffapp.herokuapp.com/api/items", item, {headers: headers})
//       .then(res => {
//         console.log(res);
//         dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
//       })
//       .catch(err => {
//         dispatch({ type: ADD_ITEM_FAILURE, payload: err });
//       });
//   };

//v3
// export const addItem = item => dispatch => {
//     dispatch({ type: ADD_ITEM_START });
//      return axios
//       .post("https://usemytechstuffapp.herokuapp.com/api/items", item, {
//           headers: { Authorization: localStorage.getItem('token') }
//       })
//       .then(res => {
//           dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data })
//       })
//       .catch(err => console.log(err))
//   };
