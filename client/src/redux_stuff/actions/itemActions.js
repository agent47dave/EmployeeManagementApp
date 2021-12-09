import {
  GET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "./types";
import axios from "axios";

//fetch data from the db
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

//using redux
// export function getItems(item){
//   return{
//     type: GET_ITEMS,
//     payload : item
//   }
// }

//add item
export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
};

//edit
// export const editItem = (id) => (dispatch) => {
//   axios.put(`/api/items/${id}`).then((res) =>
//     dispatch({
//       type: EDIT_ITEM,
//       payload: res.data
//     })
//   );
// };

export const editItem = (item) => (dispatch, getState) => {
  axios
    .put(`/api/items/${item._id}`, item, getState)
    .then((res) =>
      dispatch({
        type: EDIT_ITEM,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(err.response.data, err.response.status);
    });
};

//delete action
export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
