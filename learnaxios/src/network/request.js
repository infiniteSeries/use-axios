import axios from 'axios'

// export function request(config, success, failure){

//   const instence = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000,
//     headers:{'X-Requested-With': 'XMLHttpRequest'}
// })
//     instence(config).then(res=>{
//         success(res);
//     }).catch(err=>{
//         failure(err);
//     })
// }

// export function request(config){
//   return new Promise((resolve,reject)=>{
//     const instence = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000,
//       headers:{'X-Requested-With': 'XMLHttpRequest'},
//     })
//     instence(config).then(res=>{resolve(res)}).catch((err)=>{reject(err)})
//    })
// }


export function request(config){
      const instence = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
        headers:{'X-Requested-With': 'XMLHttpRequest'},
      })
      return instence(config)
  }