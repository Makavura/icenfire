import React from 'react';
import axios from 'axios';

export default class HouseListing extends React.Component {

    state = {
        houses: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get(`https://anapioficeandfire.com/api/houses/`)
            .then(res => {
                const houses = res.data;
                this.setState({ houses });
            })
    }

    render() {
        return (<div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Region
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-min">
                                        Coat of Arms
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Words
                  </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    this.state.houses.map((house, index) => {
                                        return (
                                            <tr >
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {
                                                        house.name
                                                    }
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {
                                                        house.region
                                                    }
                                                </td>
                                                <td class="px-6 py-4 ">
                                                    {
                                                        house.coatOfArms
                                                    }
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {
                                                        house.words
                                                    }
                                                </td>
                                            </tr>

                                        )
                                    }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        )
    }

}