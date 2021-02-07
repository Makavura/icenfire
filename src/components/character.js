import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Character(){

    const { index } = useParams();
    useEffect(() => {
        console.log("INDEX: ", index)
    })

        return (
            <div className="m-5">
                {/* <div>
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
                </div> */}
            </div>

        )
    
}