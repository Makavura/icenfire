import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
export default class CharactersListing extends React.Component {

    state = {
        characters: [],
        modalIsOpen: false,
        character: {},
        index: null
    }

    constructor() {
        super();
        this.viewCharacterInNewTab = this.viewCharacterInNewTab.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(character, index) {
        console.warn(character, index);
        const _ = this.state.modalIsOpen;
        this.setState({ modalIsOpen: !_ });
        this.setState({ character: character });
        this.setState({index: index});
    }

    viewCharacterInNewTab = () => {
        let index = this.state.index;
        const win = window.open(`/character/${index + 1}`, "_blank");
        win.focus();
    }


    componentDidMount() {
        axios.get(`https://anapioficeandfire.com/api/characters/`)
            .then(res => {
                const characters = res.data;
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
                                    this.state.characters.map((character, index) => {
                                        return (
                                            <tr onClick={() => { this.toggleModal(character, index) }}  >
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
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.toggleModal}
                contentLabel="Character Modal" ariaHideApp={false}
                className="Modal bg-white shadow w-3/4 mt-10 border mx-auto border-black">
                <div className="bg-white  p-5 pl-5">
                    <div className="flex justify-end pr-2 pt-2">
                        <button onClick={this.toggleModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <div>
                    </div>
                    <div className="m-5">
                        <div >
                            {
                                this.state.character.name
                            }
                        </div>

                        <div>
                            {
                                this.state.character.gender
                            }
                        </div>
                        <div>
                            {
                                this.state.character.culture
                            }
                        </div>

                        <div>
                            {
                                this.state.character.bord
                            }
                        </div>
                        <div>
                            {
                                this.state.character.died
                            }
                        </div>
                        <div>
                            {
                                this.state.character.titles
                            }
                        </div>
                        <div>
                            {
                                this.state.character.father
                            }
                        </div>
                        <div>
                            {
                                this.state.character.mother
                            }
                        </div>
                        <div>
                            {
                                this.state.character.spouse
                            }
                        </div>
                        <div>
                            {
                                this.state.character.allegiances
                            }
                        </div>
                        <div>
                            {
                                this.state.character.books
                            }
                        </div>

                        <div>
                            {
                                this.state.character.povBooks
                            }
                        </div>
                        <div>
                            {
                                this.state.character.tvSeries
                            }
                        </div>
                        <div>
                            {
                                this.state.character.playedBy
                            }
                        </div>
                    </div>
                </div>
                <div className=" text-right flex-none mt-5 p-5" onClick={this.viewCharacterInNewTab}>
                    <a className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                     <span>
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                     </span>
                        View Details in new tab</a>
                </div>
            </Modal>
        </div >


        )
    }

}