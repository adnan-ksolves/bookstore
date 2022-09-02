import React, { useState } from 'react'
import './Style.css'
import x from "../data"
import { useParams } from 'react-router-dom'

const BuyPage = () => {

    const para = useParams()

    const[book,setBook]=useState(x.filter((val)=>{
        return val.title==para.title;
    }));


  return (
    <div id="buypage">
      <div id="first">
      <img src={book[0].link}></img>
      </div>
      <div id="second">
      <h3>{book[0].title}</h3><br/>
      <i>~written by {book[0].author}</i><br/><br/>
      Language: {book[0].language}<br/><br/>
      Genre: {book[0].genre}<br/><br/>
      Country: {book[0].country}<br/><br/>
      Year: {book[0].year}<br/><br/>
      Pages: {book[0].pages}<br/><br/>
      <button id="order">Order Now</button>
      </div>
    </div>
  )
}

export default BuyPage
