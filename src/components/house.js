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
        <div >
            {
                data.name
            }
        </div>
        <div >
            {
                data.region
            }
        </div>
        <div >
            {
                data.coatOfArms
            }
        </div>
        <div >
            {
                data.words
            }
        </div>
        <div >
            {
                data.titles
            }
        </div>
        <div >
            {
                data.seats
            }
        </div>
        <div >
            {
                data.currentLord
            }
        </div>
        <div >
            {
                data.heir
            }
        </div>
        <div >
            {
                data.overlord
            }
        </div>
        <div >
            {
                data.founded
            }
        </div>
        <div >
            {
                data.diedOut
            }
        </div>
        <div >
            {
                data.ancestralWeapons
            }
        </div>
        <div >
            {
                data.cadetBranches
            }
        </div>
        <div >
            {
                data.swornNames
            }
        </div>
    </div>
    )
}