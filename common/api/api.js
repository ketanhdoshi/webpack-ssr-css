
import axios from 'axios';

export const apiGetUsers = (successCB, dispatch) => {
axios.get('http://jsonplaceholder.typicode.com/users')
  .then(res => {
        return res.data;
  })
  .then(data => {
    console.log ("data is ", data[0])
    successCB (dispatch, data)
  })  
  .catch(err => {
    console.log(err);
  }); 
}

export const apiGetPost = (postNo, successCB, dispatch) => {
axios.get('http://jsonplaceholder.typicode.com/posts/' + postNo)
  .then(res => {
        return res.data;
  })
  .then(data => {
    console.log ("data is ", data)
    successCB (dispatch, data)
  })  
  .catch(err => {
    console.log(err);
  }); 
}

export const apiFetchGetUsers = (successCB, dispatch) => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })  
      .then(data => {
        console.log ("data is ", data[0])
        successCB (dispatch, data[0].phone)
      })  
      .catch(err => {
        console.log(err);
      }); 
}
