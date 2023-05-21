import axios from "axios";



export const getArticle=async()=>{
    try{
let response=await axios.get("https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10");
return response.data;
    }catch(error){
        console.log('Error while calling API',error.message);
        return error.response.data;
    }
}



