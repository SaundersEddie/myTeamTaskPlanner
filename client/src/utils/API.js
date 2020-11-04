// API calls to backend

import axios from 'axios';

export default {
    getUser: function () {
        console.log("Inside API getUser");
        return axios.get('/user/users');
    },
    getUserInfo: function (myUser) {
        console.log("Inside API getUserName");
        return axios.get('/user/' + myUser)
    }
}
