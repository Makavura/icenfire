import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
export default class HouseListing extends React.Component {

    state = {
        houses: [],
        modalIsOpen: false,
        house: {},
        index: null
    }

    constructor() {
        super();
        this.toggleModal = this.toggleModal.bind(this);
        this.viewHouseInNewTab = this.viewHouseInNewTab.bind(this);
    }

    viewHouseInNewTab = () => {
        let index = this.state.index;
        const win = window.open(`/house/${index + 1}`, "_blank");
        win.focus();
    }

    componentDidMount() {
        axios.get(`https://anapioficeandfire.com/api/houses/`)
            .then(res => {
                const houses = res.data;
                this.setState({ houses });
            })
    }

    toggleModal(house, index) {
        console.warn(house, index);
        const _ = this.state.modalIsOpen;
        this.setState({ modalIsOpen: !_ });
        this.setState({ house: house });
        this.setState({index: index});
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
                                            <tr onClick={() => { this.toggleModal(house, index) }}  >
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
                                this.state.house.name
                            }
                        </div>
                        <div >
                            {
                                this.state.house.region
                            }
                        </div>
                        <div >
                            {
                                this.state.house.coatOfArms
                            }
                        </div>
                        <div >
                            {
                                this.state.house.words
                            }
                        </div>
                        <div >
                            {
                                this.state.house.titles
                            }
                        </div>
                        <div >
                            {
                                this.state.house.seats
                            }
                        </div>
                        <div >
                            {
                                this.state.house.currentLord
                            }
                        </div>
                        <div >
                            {
                                this.state.house.heir
                            }
                        </div>
                        <div >
                            {
                                this.state.house.overlord
                            }
                        </div>
                        <div >
                            {
                                this.state.house.founded
                            }
                        </div>
                        <div >
                            {
                                this.state.house.diedOut
                            }
                        </div>
                        <div >
                            {
                                this.state.house.ancestralWeapons
                            }
                        </div>
                        <div >
                            {
                                this.state.house.cadetBranches
                            }
                        </div>
                        <div >
                            {
                                this.state.house.swornNames
                            }
                        </div>
                    </div>
                </div>
                <div className=" text-right flex-none mt-5 p-5" onClick={this.viewHouseInNewTab}>
                    <a className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                     <span>
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                     </span>
                        View Details in new tab</a>
                </div>
            </Modal>
        </div>

        )
    }

}