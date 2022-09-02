import React, { Suspense } from 'react'
import { useNavigate} from 'react-router-dom'
import x from "../data"
import Book from "./Book"
import './Style.css'

const Home = () => {
const navig=useNavigate();

  const change = (e) => {
    navig(`/buy/${e.target.name}`);
  }
  
    return (
      <div id="maindiv">
    {x.map((val)=>{
      return <Book change={change} title={val.title} imgLink={val.link}/>
    })}
   </div>)
  
}

export default Home
