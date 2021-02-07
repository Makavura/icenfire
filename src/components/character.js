import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Character() {

    const { index } = useParams();
    const [data, setCharacterData] = useState({});
    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/characters/${index}`)
            .then(res => {
                setCharacterData(res.data)
            }).catch(
                error => {
                    console.warn(error);
                }
            )  
    })

    return (
        <div className="m-5">
            <div>
                {
                    data.name
                }
            </div>

            <div>
                {
                    data.gender
                }
            </div>
            <div>
                {
                    data.culture
                }
            </div>

            <div>
                {
                    data.bord
                }
            </div>
            <div>
                {
                    data.died
                }
            </div>
            <div>
                {
                    data.titles
                }
            </div>
            <div>
                {
                    data.father
                }
            </div>
            <div>
                {
                    data.mother
                }
            </div>
            <div>
                {
                    data.spouse
                }
            </div>
            <div>
                {
                    data.allegiances
                }
            </div>
            <div>
                {
                    data.books
                }
            </div>

            <div>
                {
                    data.povBooks
                }
            </div>
            <div>
                {
                    data.tvSeries
                }
            </div>
            <div>
                {
                    data.playedBy
                }
            </div>
        </div>

    )

}