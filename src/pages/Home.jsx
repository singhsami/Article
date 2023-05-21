import React, { useEffect, useState } from 'react'
import {getArticle} from "../services/api"
import Search from '../components/Search'


const Home = () => {
  
    const [article,setArticle]=useState([])
   
    useEffect(()=>{
        const getData=async()=>{
        let responce=await getArticle();
        setArticle(responce.data)
        }
      getData()
    },[])

  return (
    <Search article={article}/>
  )
}

export default Home
