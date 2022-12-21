import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './style.css'
function Header({title,image,onSearch}){
    return(
        <header>
            <div className='left'>
                <img src={image} alt=""/>
                <h2>{title}</h2>
            </div>
            <div className='right'>
                <SearchInput onSearch={onSearch} />
            </div>
        </header>
    )
}
export default Header;