import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import x from "../data"
import Book from "./Book"
import './Style.css'

const Filter = () => {
    const para=useParams();
    const navig =useNavigate();
const [data,setData]=useState([]);

useEffect(()=>{
    setData( x.filter((val)=>{
        return val.genre===para.genre;
    }));
},[para])

const change = (e) => {
    navig(`/buy/${e.target.name}`);
  }

  return (
    <div id="maindiv">
    {data.map((val)=>{
    return <Book change={change} title={val.title} imgLink={val.link}/>
    })}
    </div>
  )
}

export default Filter
