import React from 'react'
import {Card } from 'semantic-ui-react'
import Dialogeimg from './Dialogeimg'
import { useState } from 'react'

const Article = ({data}) => {
  const[open,setOpen]=useState(false)

  function myfunction(){
    setOpen(true)
  }
  
  return (
    <Card style={{width:550,height:350}}>
    
    <img src={data.thumb} alt="data" style={{height:150}} />
    <Dialogeimg open={open} setOpen={setOpen} data={data}/>
        
       <div className='para'>
        <button  className='headingCard'>
        <h3 style={{background:"white",marginBottom:20}}onClick={myfunction}>{data.title}.</h3> 
        </button>
        <p>{data.slug}</p>
        </div>
    </Card> 
    
  )
}

export default Article