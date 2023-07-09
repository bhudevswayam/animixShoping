import React from "react";
import Card from "./Card";
import SData from "../src/SData";

const Home = () =>{
    return <>
      <h1 className='top-title'>Naruto Edition</h1>
      <div className="cardIndex">
        { SData.map((item,index)=> {
          if(item.product_anime === 'Naruto'){ 
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
      
      <h1 className='top-title'>One-Piece Edition</h1>
      <div className="cardIndex">
        { SData.map((item, index)=> {
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
  
  export default Home;