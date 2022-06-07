import React from "react";


import { Link } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ( {title , imageUrl , size, url} ) => (
    <div className = {`menu-item ${size}`} >
         <div className='background-image'  
            style={ {backgroundImage: `url(${imageUrl})`
         } } />
        <div className='content'>
            <Link className='Link_underlining' to ={`${url}`}>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <span className='subtitle'>Shop Now</span>
            </Link>
        </div>
    </div>
);


export default MenuItem;