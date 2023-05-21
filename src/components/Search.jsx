import React from 'react'
import Article from '../components/Article'
import { Container,Grid} from 'semantic-ui-react'
import { useState } from 'react'

const Search = ({article}) => {

  const[text,setText]=useState("")
  const getText=(text)=>{
    setText(text)
  }

  return (
    <div className='clr' >
     <div className="InputStyle">
     <h1 style={{marginLeft:110,marginTop:30}}>All articles</h1>
    
    <input style={{marginTop:30}} onChange={(e)=>getText(e.target.value)}  placeholder="Search articles" />

     </div>   
    
    
<Container>
    <Grid columns={3} doubling>
    {
      article.filter((data)=>{
          return text.toLowerCase() === "" 
          ? data 
          : data.title.toLowerCase().includes(text)}).map((data)=>(


            <Grid.Column>
            <br/>
            <br/>
            <Article data={data}/>
           </Grid.Column>
    ))
      }
    </Grid>
    </Container>
    </div>
  )
}

export default Search
