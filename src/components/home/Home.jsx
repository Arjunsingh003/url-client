import React, { useState } from 'react';
import './home.css';
import Main from '../main/Main';
import axios from 'axios';
import '../main/main.css';
import { useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody
} from  '@mui/material';

const baseURL = "https://url-shortner-tgb5.onrender.com/url";
export default function Home() {
    const [shortURL, setShortURL] = useState("");

    

    useEffect(() =>{
      
    },[shortURL])

    const [url,setUrl] = useState([]);

    const fetchurl = async() => {
        const { data } = await axios.get('https://url-shortner-tgb5.onrender.com/url/allData')
        setUrl(data.response);

    };
    console.log(url)
    // get the data form db 
    useEffect(() => {
        fetchurl()
    },[])


  return (
    <div className='home'>
        <div className="homeContainer">
            <h1 className="homeTitle">Enter URL</h1>
            <div className="homeInput">
                <input 
                    type="text" 
                    className="inputField" 
                    placeholder='url'
                    value={shortURL}
                    onChange={e => setShortURL(e.target.value)}
                />
                <button 
                  className="shortButton"
                  onClick={
                    ()=>{
                    const URL = {
                      shortURL
                    }
                    fetch(`${baseURL}`, {
                      method: "POST",
                      body: JSON.stringify(URL),
                      headers: {
                          "Content-type": "application/json",
                      }
                    })
                    // .then((data) => data.json())
                    .then((data) => console.log(data))
                    .then(()=>
                    {
                      alert("Short URL generted successfully")
                      fetchurl()
                    } )
                  }
                  // shortPostURL
                  
                }
                >Short</button>
            </div>
        </div>
        {/* <Main/> */}

        <div className='main'>
      <div className="mainTable">
            <TableContainer className='table'>
                <Table >
                    <TableHead className='tableHead'>
                        <TableRow className='tableHeadRow'>
                          
                            <TableCell className='tableHeadCell'>ShortURL</TableCell>
                            <TableCell className='tableHeadCell'>RedirectURL</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {
                                url.map((allData) => (
                                    <TableRow key={allData._id}>
                                        {/* <TableCell></TableCell> */}
                                        <TableCell>
                                            <a className='tableLinktag' href={allData.redirectURL}>{allData.shortId}</a>
                                        </TableCell>
                                        <TableCell>
                                            <a className='tableLinktag' href={allData.redirectURL}>{allData.redirectURL}</a>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                </Table>
            </TableContainer>
      </div>
    </div>
    </div>
  )
}
