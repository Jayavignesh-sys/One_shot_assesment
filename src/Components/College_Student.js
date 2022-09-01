import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Header from './Header'
import PageBody from './PageBody'
import Results from './Results'

import "../Styles/parent.css"

export default function College_Student() {
    const API_URL = 'https://ap-south-1.aws.data.mongodb-api.com/app/oneshot-vkuhk/endpoint/getdata'
    const Prevdata = useRef()

    const [resdata, setResdata] = useState([])
    const [search_word, setSearch_word] = useState("")
    const [selected, setSelected] = useState("")

    const [toggle, setToggle] = useState("College")

    useEffect(()=>{
        Prevdata.current = resdata;
        console.log("UseEffect");
        const fetch_data = setInterval(async ()=>{
            // setLoading(true);
            const {data} = await axios(API_URL);
            console.log(data);
            setResdata(data);
        },1000)
        return ()=> clearInterval(fetch_data)
    });

    return (
        <div className='outer-cont'>
            <div className='PageHeader1'>
                <Header search_word={search_word} setSearch_word={setSearch_word} />
            </div>
            <div className='PageBody1'>
                <PageBody toggle={toggle} setToggle={setToggle}/>
            </div>
            <div className='results-style'>
                <Results toggle={toggle} setToggle={setToggle} resdata={resdata} search_word={search_word} setSearch_word={setSearch_word} selected={selected} setSelected={setSelected} />
            </div>
        </div>
    )
}
