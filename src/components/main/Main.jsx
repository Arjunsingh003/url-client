import React, { useState } from 'react';
import './main.css';
import {
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody
} from  '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

export default function Main() {
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
  )
}
