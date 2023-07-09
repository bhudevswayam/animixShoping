import React from 'react';
import './navbarstyle.css';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useState} from 'react';
import {FcSearch} from 'react-icons/fc';
const Navbar = (props) => {
    const [data, setData] = useState(null);
    const getData = (e) => {
        setData(e.target.value);
        // if (data === props.title){
        console.log(data);
        // }
    }
    return <>
        <div className="navbar">
            <h1>
                Dattebayo!!!!!
            </h1>
            <forms>
                <label onClick={
                    () => {}
                }><FcSearch/>
                </label>
                <input type="text"
                    onChange={getData}
                    placeholder='Search'
                    className='search-section'></input>
            </forms>
            <div className='navigations'>
                <ul>
                    <li id='pading'>
                        <Link className='cartLink1' to='/'>
                            Home
                        </Link>
                    </li>
                    <li id='pading' className='category'>
                        Cetagory
                        <ul className='categoryDropDown'>
                            <Link className='cartLink2' to='/naruto'>
                                <li>Naruto</li>
                            </Link>
                            <Link className='cartLink2' to='/one-piece'>
                                <li>One-Piece</li>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        
                    </li>

                </ul>
                
            </div>
            <h2 className='cart'>
                            <Link className='cartLink' to='/cart'>

                                <AiOutlineShoppingCart/>
                            </Link>
                            {/* <span id='cart-items-number'></span> */} </h2>
        </div>

    </>
};

export default Navbar;
