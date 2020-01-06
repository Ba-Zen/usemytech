import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  FETCH_ITEM_START,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  EDIT_ITEM_START,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  FETCH_ID_START,
  FETCH_ID_SUCCESS,
  FETCH_ID_FAILURE,
  SELECT_ITEM_START,
  SELECT_ITEM_SUCCESS
} from '../actions';

const initialState = {
  loggingIn: false,
  isSignedUp: false,
  error: '',
  token: localStorage.getItem('token'),
  addingItem: false,
  fetchingItems: false,
  owner: null,
  items: [],
  deletingItem: false,
  message: null,
  editingItem: false,
  editingItemId: null,
  item: null,
  selectedItem: null,
  fetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload.token,
        owner: action.payload.id
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };

    case SIGNUP_START:
      return {
        ...state,
        isSignedUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSignedUp: false,
        error: action.payload
      };
    case ADD_ITEM_START:
      return {
        ...state,
        addingItem: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        addingItem: false,
        error: '',
        message: action.payload
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        addingItem: false,
        error: ''
        // items: action.payload
      };
    case FETCH_ITEM_START:
      return {
        ...state,
        fetchingItems: true
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        fetchingItems: false,
        items: action.payload.reverse()
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        fetchingItems: false,
        error: action.payload
      };
    case DELETE_ITEM_START:
      return {
        ...state,
        deletingItem: true
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        deletingItem: false,
        error: '',
        message: action.payload
      };
    case EDIT_ITEM_START:
      return {
        ...state,
        editingItem: true,
        error: ''
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
        editingItem: false,
        items: action.payload,
        error: ''
      };
    case EDIT_ITEM_FAILURE:
      return {
        ...state,
        editingItem: false,
        error: action.payload
      };
    case FETCH_ID_START:
      return {
        ...state,
        fetchingItems: true
      };
    case FETCH_ID_SUCCESS:
      return {
        ...state,
        fetchingItems: false,
        item: action.payload
      };
    case FETCH_ID_FAILURE:
      return {
        ...state,
        fetchingItems: false,
        error: action.payload
      };
    case SELECT_ITEM_START:
      return {
        ...state,
        selecting: true,
        error: ''
      };
    case SELECT_ITEM_SUCCESS:
      return {
        ...state,
        selecting: false,
        selectedItem: action.payload,
        error: ''
      };
    default:
      return state;
  }
};

export default reducer;
