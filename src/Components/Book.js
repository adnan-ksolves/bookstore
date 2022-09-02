import React from 'react'
import './Style.css'

const Book = ({imgLink,title,change}) => {
  return (
    
    <div id="card">
        <img src={imgLink}></img>
        <div id="buyBtn"><p>{title}</p><br/><br/>
    <button id="buy" name={title} onClick={change} >Buy</button></div>  
    </div>
  )
}

export default Book
