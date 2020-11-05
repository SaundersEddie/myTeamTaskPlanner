// API calls to backend

import axios from 'axios';
// import { userData } from '../components/User/NewUser-component';

export default {
    getUser: function () {
        console.log("Inside API getUser");
        return axios.get('/user/users');
    },
    getUserInfo: function (myUser) {
        console.log("Inside API getUserName");
        return axios.get('/user/' + myUser)
    },
    addUser: function (userData) {
        console.log (`Our userData in API.js: `, userData);
        return axios.post('/user/addUser/' + userData);
    }
} 
