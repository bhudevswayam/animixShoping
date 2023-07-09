import React from "react";
import Card from "./Card";
import SData from "../src/SData";

const OnePiece = () =>{
    return <>
      <h1 className='top-title'>One-Piece Edition</h1>
      <div className="cardIndex">
        { SData.map((item,index)=> {
        if(item.product_anime === 'one-piece'){
        return <Card 
          img={item.img} 
          title={item.title}
          desc={item.desc} 
          price={item.price}
          item={item}
          key = {item.id}
        />}
        })}
      </div>
    </>
  }
  
  export default OnePiece;