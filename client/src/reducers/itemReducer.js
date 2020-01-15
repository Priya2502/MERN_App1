import {
  GET_ITEMS,
  POST_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";
import uuid from "uuid";
import { itemsLoading } from "../actions/itemActions";

const initialState = {
  items: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case POST_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
