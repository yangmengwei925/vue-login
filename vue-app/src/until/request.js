import axios from 'axios'
export default function (method,url,data=[]){
    let configData={};
    configData.method=method;
    let type=method==='get'?'params':'data';
    configData[type]=data;
    configData.url=url;
    configData.headers={
        authorToken:localStorage.getItem('token')
    }
    return axios(configData).catch(error=>{
        if(error.response.status===404)
        {
            alert('接口未找到')
        }
        if(error.response.status===500)
        {
            alert('服务器报错');
        }
    })
}