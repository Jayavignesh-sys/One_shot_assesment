import React, { useState } from 'react'
import "../Styles/header.css";
import { BsSearch } from "react-icons/bs";

export default function Header({search_word, setSearch_word}) {
    return (
        <div className='header-cont'>
            <div className='search-bar-cont'>
                <div>
                    <input className='search' placeholder={search_word} onChange={(e)=>{setSearch_word(e.target.value)}}></input>
                </div>
                <div className='icon-cont'>
                    <BsSearch />
                </div>
            </div>
        </div>
    )
}
