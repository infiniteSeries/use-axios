import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios.defaults.baseURL = 'http://123.207.32.32:8000',
// axios.defaults.timeout = 5000,
// axios({
//   url: '/home/multidata',
//   method: 'get',
// }).then(res=>{
//   console.log(res);
// })

// axios([axios({
//   url:'/home/multidata',
// }),axios({ 
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'pop',
//     page:1,
//   },}
// )]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))


// const instence = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   headers:{'X-Requested-With': 'XMLHttpRequest'}
// })
// instence({
//   url:'/home/data',
// }).then(res=>{
//   console.log(res);
// })

import {request} from './network/request.js';

request({url:'/home/data'},
function(a){console.log(a);},
function(b){console.log(b);})

request({
  url:'/home/data'
}).then(res=>{console.log(res);})
.catch(err=>{console.log(err);})