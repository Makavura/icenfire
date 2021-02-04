import React from 'react';
import axios from 'axios';

export default class CharactersList extends React.Component {

    state = {
        characters: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get(`https://anapioficeandfire.com/api/characters/`)
            .then(res => {
                const characters = res.data;
                // console.log(characters);
                this.setState({ characters });
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
                                        Gender
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Culture
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Played By
                  </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    this.state.characters.map(character => {
                                        return (
                                            <tr >
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {
                                                                character.name
                                                            }
                                                        </div>
                                                        <div class="text-sm text-gray-500">
                                                            {
                                                                character.alias
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {
                                                    character.gender
                                                }
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {
                                                    character.culture
                                                }
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {
                                                    character.playedBy
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