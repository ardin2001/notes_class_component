import React from 'react';
import './style.css'

function Footer({title,caption}){
    return(
        <footer>
            <h3>{title}</h3>
            <p>{caption}</p>
        </footer>
    )
}
export default Footer;