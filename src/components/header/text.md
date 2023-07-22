```js
import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../services/Transition';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"

var studentDetails = []
var fetch_data = false

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalContent = React.createRef();
    this.searchInput = React.createRef();
  }

  async getData() {

    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      if (fetch_data === false) {
        var res = doc.data()
        var st_data = [res.name, res.id]
        console.log(st_data)

        studentDetails.push(st_data)
        fetch_data = !fetch_data
      }
      else {
        fetch_data = !fetch_data
      }
    })

    console.log(studentDetails)



  }


  componentDidMount() {
    this.getData()

    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleEscKey);

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleEscKey);
  }

  handleOutsideClick = ({ target }) => {
    const { modalOpen, setModalOpen } = this.props;
    if (modalOpen && !this.modalContent.current.contains(target)) {
      setModalOpen(false);
    }
  };

  handleEscKey = ({ keyCode }) => {
    const { modalOpen, setModalOpen } = this.props;
    if (modalOpen && keyCode === 27) {
      setModalOpen(false);
    }
  };

  componentDidUpdate(prevProps) {
    const { modalOpen } = this.props;
    if (modalOpen && !prevProps.modalOpen) {
      this.searchInput.current.focus();
    }
  }


  render() {
    const { id, searchId, modalOpen, fetch_data } = this.props;

    return (
      <>
        {/* Modal backdrop */}
        <Transition
          className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
          show={modalOpen}
          enter="transition ease-out duration-200"
          enterStart="opacity-0"
          enterEnd="opacity-100"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
          aria-hidden="true"
        />
        {/* Modal dialog */}
        <Transition
          id={id}
          className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          show={modalOpen}
          enter="transition ease-in-out duration-200"
          enterStart="opacity-0 translate-y-4"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveStart="opacity-100 translate-y-0"
          leaveEnd="opacity-0 translate-y-4"
        >
          <div ref={this.modalContent} className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
            {/* Search form */}
            <form className="border-b border-slate-200">
              <div className="relative">
                <label htmlFor={searchId} className="sr-only">Search</label>
                <input
                  id={searchId}
                  className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                  type="search"
                  placeholder="Search Anything…"
                  ref={this.searchInput}
                />
                <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                  <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </div>
            </form>


            <div className="py-4 px-2">
              {/* Recent searches */}
              <div className="mb-3 last:mb-0">
                <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent searches</div>
                <ul className="text-sm">
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Form Builder - 23 hours on-demand video</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Access Mosaic on mobile and TV</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Product Update - Q4 2021</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Master Digital Marketing Strategy course</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Dedicated forms for products</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Product Update - Q4 2021</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Recent pages */}
              <div className="mb-3 last:mb-0">
                <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent pages</div>
                <ul className="text-sm">
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="#0"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                      </svg>
                      <span><span className="font-medium text-slate-800 group-hover:text-white">Messages</span> - Conversation / … / Mike Mills</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                      to="www.google.com"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                      </svg>
                      <span><span className="font-medium text-slate-800 group-hover:text-white">Messages</span> - Conversation / … / Eva Patrick</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Transition>
      </>
    );
  }
}

export default SearchModal;
```







































```js


import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../services/Transition';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"

var studentDetails = []
var studentDetails = [
  ["Fred Nerk", "001"],
  ["Joe Bloggs", "9120"],
  ["Zahin A. Tapadar", "9051"]
];
var fetch_data = false

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalContent = React.createRef();
    this.searchInput = React.createRef();

    this.state = {
      searchResults: ""
    }
  }

  async getData() {

    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      if (fetch_data === false) {
        var res = doc.data()
        var st_data = [res.name, res.id]
        console.log(st_data)

        studentDetails.push(st_data)
        fetch_data = !fetch_data
      }
      else {
        fetch_data = !fetch_data
      }
    })

    console.log(studentDetails)



  }


  componentDidMount() {
    // this.getData()

    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleEscKey);

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleEscKey);
  }

  handleOutsideClick = ({ target }) => {
    const { modalOpen, setModalOpen } = this.props;
    if (modalOpen && !this.modalContent.current.contains(target)) {
      setModalOpen(false);
    }
  };

  handleEscKey = ({ keyCode }) => {
    const { modalOpen, setModalOpen } = this.props;
    if (modalOpen && keyCode === 27) {
      setModalOpen(false);
    }
  };

  componentDidUpdate(prevProps) {
    const { modalOpen } = this.props;
    if (modalOpen && !prevProps.modalOpen) {
      this.searchInput.current.focus();
    }
  }

  filter() {
    const searchTerm = this.searchInput.current.value.toLowerCase();
    const filteredResults = studentDetails.filter(student => {
      const studentName = student[0].toLowerCase();
      const st_name = studentName.includes(searchTerm);

      if (st_name !== false) {
        return true;
      } else {
        const studentID = student[1].toLowerCase();
        return studentID.includes(searchTerm);
      }
    });

    if (filteredResults.length !== 0) {

      // $("#update_search").remove()
      // $("#search").append(`<ul id="update_search" class="text-sm"></ul>`)

      var id = filteredResults[0][1]
      var name = filteredResults[0][0]
      $("#update_search").append(`
          <li>
            <Link
              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
              to="#0"
              onClick={() => setModalOpen(!modalOpen)}>

              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
              </svg>
                <span>Access Mosaic on mobile and TV</span>
            </Link>
          </li>
          <li>
            <Link
              class="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
              to="/individual-results?id=${id}">

              <span><i><b>Name:</b> ${name}; <b>ID:</b> ${id}</i></span>
            </Link>
          </li>
      `)
    }
    console.log(filteredResults)
    this.setState({ searchResults: filteredResults });
  };


  render() {
    const { id, modalOpen, setModalOpen } = this.props;
    const { searchResults } = this.state;

    return (
      <div>
        {/* Modal backdrop */}
        <Transition
          className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
          show={modalOpen}
          enter="transition ease-out duration-200"
          enterStart="opacity-0"
          enterEnd="opacity-100"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
          aria-hidden="true"
        />
        {/* Modal dialog */}
        <Transition
          id={id}
          className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          show={modalOpen}
          enter="transition ease-in-out duration-200"
          enterStart="opacity-0 translate-y-4"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveStart="opacity-100 translate-y-0"
          leaveEnd="opacity-0 translate-y-4"
        >
          <div ref={this.modalContent} className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
            {/* Search form */}
            <form className="border-b border-slate-200">
              <div className="relative">
                <label htmlFor="searchId" className="sr-only">Search</label>
                <input
                  id="searchId"
                  className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                  type="search"
                  placeholder="Search Anything…"
                  ref={this.searchInput}
                />
                <button className="absolute inset-0 right-auto group" type="button" onClick={() => this.filter()} aria-label="Search by Name">
                  <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>

                <button className="absolute inset-5 left-auto group" type="button" onClick={() => this.filter()} aria-label="Search by Name">
                  Search
                </button>

              </div>
            </form>


            <div className="py-4 px-2">
              {/* Recent searches */}
              <div className="mb-3 last:mb-0">
                <div id='search' className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent searches</div>
                <ul id="update_search" className="text-sm">

                  {searchResults.map((student, index) => (
                    <li key={index}>{student[0]} (ID: {student[1]})</li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}




```