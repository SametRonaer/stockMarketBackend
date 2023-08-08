const axios = require('axios');




async function sendGetRequest(url, args){
  return  await sendRequest(url,'get',args);
}
async function sendPostRequest(url, args, body){
    return await sendRequest(url, 'post',args, body);
}
async function sendPutRequest(url, args, body){
    return await sendRequest(url,'put',args, body);
}
async function sendPatchRequest(url, args, body){
    return await sendRequest(url,'patch',args, body);
}
async function sendDeleteRequest(url, args, body){
    return await sendRequest(url,'delete',args, body);
}

async function sendRequest(url,method, args, body){
  
    
    console.log(url);
    const header = {
   
    };
    let response;

    try {
     response = await axios({
            method: method,
            url: url,
            params: args,
            data: body,
            headers: header,
          });
    console.log(response.data);
    return response;
    } catch (error) {
        console.log("Here error");
        console.log(error);
    }
    
    
}

module.exports = {
    sendGetRequest,
    sendDeleteRequest,
    sendPatchRequest,
    sendPostRequest,
    sendPutRequest
};