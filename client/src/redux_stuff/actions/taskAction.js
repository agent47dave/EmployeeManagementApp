import * as types from "./types";
import axios from "axios";

// //fetch data from the db
export const loadTaskAction = () => {
  return {
    type: types.LOAD_TASKS
  }
}

export const taskLoadAction = (data) => {
  return {
    type: types.TASKS_LOADED,
    data
  }
}


// //fetch data from the db
// export const getItems = () => (dispatch) => {
//   dispatch(setItemsLoading());
//   axios.get("/api/items").then((res) =>
//     dispatch({
      // type: types.LOAD_DATA,
//       payload: res.data
//     })
//   );
// };

export const addTaskAction = (data) => {
  return {
    type: types.ADD_TASK,
    data
  }
}

export const taskAddedAction = (task) => {
  return {
    type: types.TASK_ADDED,
    task
  }
}


// //add item
// export const addItem = (item) => (dispatch) => {
//   axios.post("/api/items", item).then((res) =>
//     dispatch({
      // type: types.ADD_DATA,
//       payload: res.data
//     })
//   );
// };


////edit item
// export const editItem = (item) => (dispatch, getState) => {
//   axios
//     .put(`/api/items/${item._id}`, item, getState)
//     .then((res) =>
//       dispatch({
        // type: types.EDIT_DATA,
//         payload: res.data
//       })
//     )
//     .catch((err) => {
//       dispatch(err.response.data, err.response.status);
//     });
// };

export default deleteTaskAction = (id) => {
  return{
    type: types.DELETE_TASK,
    id
  }
}

export default taskDeletedAction = (id) => {
  return {
    type: types.TASK_DELETED,
    id
  }
}

// //delete action
// export const deleteItem = (id) => (dispatch) => {
//   axios.delete(`/api/items/${id}`).then((res) =>
//     dispatch({
      // type: types.DELETE_DATA,
//       payload: id
//     })
//   );
// };

// export const setItemsLoading = () => {
//   return {
//     type: ITEMS_LOADING
//   };
// };
