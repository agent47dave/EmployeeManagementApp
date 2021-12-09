import axios from "axios";
// import mongoUri from "../../../../server/config/uri";

// console.log(mongoUri);

export const getTasks = () => {
    return axios.get("api/items").then(res => res.data)
}

export const getSingleTask = id =>{
    return axios.get("api/items" + '/' + id).then(res => res.data)
}

/**
 * 
 * @param {title, description} data 
 */
 export const addTask = (data) => {
    data.date = new Date()
    data.completed = false
    return axios.post("api/items", data).then(res => res.data)
}


//   export const editTask = (data) => {
//     axios.put(`/api/items/${item._id}`, item, getState)
//     .then(res => res.data)
//   }


export const deleteTask = (id) => {
    return axios.delete("api/items" + '/' + id).then(res => res.data)
}
