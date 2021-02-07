import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Book() {
    const { index } = useParams();
    const [data, setBookData] = useState({});
    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/books/${index}`)
            .then(res => {
                setBookData(res.data)
            }).catch(
                error => {
                    console.warn(error);
                }
            )  
    })
    return (
        <div className="m-5">
        </div>

    )
}