import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
export default class BooksListing extends React.Component {

    state = {
        books: [],
        modalIsOpen: false,
        book: {},
        index: null
    }

    constructor() {
        super();
        this.toggleModal = this.toggleModal.bind(this);
    }

    viewBookInNewTab = () => {
        let index = this.state.index;
        const win = window.open(`/book/${index + 1}`, "_blank");
        win.focus();
    }

    componentDidMount() {
        axios.get(`https://anapioficeandfire.com/api/books/`)
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
    }

    toggleModal(book, index) {
        console.warn(book, index);
        const _ = this.state.modalIsOpen;
        this.setState({ modalIsOpen: !_ });
        this.setState({ book: book });
        this.setState({ index: index });
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
                                        Author
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ISBN
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Publisher
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pages
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Country
                  </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Released
                  </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    this.state.books.map((book, index) => {
                                        return (
                                            <tr onClick={() => { this.toggleModal(book, index) }}  >
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                {
                                                                    book.name
                                                                }

                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                {
                                                                    book.released
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {
                                                        book.authors
                                                    }
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {
                                                        book.isbn}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div class="flex items-center">
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                {
                                                                    book.publisher
                                                                }
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                {
                                                                    book.mediaType
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {
                                                        book.numberOfPages
                                                    }
                                                </td>                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {
                                                        book.country
                                                    }
                                                </td>                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

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
                                    this.state.book.name
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.isbn
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.authors
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.numberOfPages
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.publisher
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.country
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.mediaType
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.released
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.characters
                                }
                            </div>
                            <div>
                                {
                                    this.state.book.povCharacters
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" text-right flex-none mt-5 p-5" onClick={this.viewBookInNewTab}>
                        <a className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                            <span>
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </span>
                        View Details in new tab</a>
                    </div>
                </Modal>
            </div>
        </div>

        )
    }

}