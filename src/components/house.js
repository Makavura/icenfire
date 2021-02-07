import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function House() {
    const { index } = useParams();
    const [data, setHouseData] = useState({});
    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/houses/${index}`)
            .then(res => {
                setHouseData(res.data)
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