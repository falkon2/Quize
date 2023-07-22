import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../services/Transition';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import Swal from 'sweetalert2';
import $ from "jquery"

var studentDetails = []
var looked_up = []

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalContent = React.createRef();
    this.searchInput = React.createRef();

    this.state = {
      searchResults: []
    }
  }

  async getData() {
    var demi_list = []

    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      var res = doc.data()
      var st_data = [res.name, res.id]

      demi_list.push(st_data)
    })

    const dataArray = demi_list
    studentDetails  = [...new Set(dataArray)];

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

  filter(term) {
    var searchTerm
    // console.log(term)

    if (term === undefined) {
      searchTerm = this.searchInput.current.value.toLowerCase();
      // console.log(searchTerm)
    }
    else {
      searchTerm = term
    }

    const filteredResults = studentDetails.filter(student => {
      const studentName = student[0].toLowerCase();
      const studentID = student[1].toLowerCase();
      return studentName.includes(searchTerm) || studentID.includes(searchTerm);
    });

    if (filteredResults.length === 0) {
      Swal.fire("Error", " No user found", "error")
    }

    this.setState({ searchResults: filteredResults });
    if (looked_up.includes(searchTerm) !== true) {
      looked_up.push(searchTerm)
    }
  }


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
                  placeholder="Search Student by Name or ID"
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
                <div id='search' className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Searches</div>
                <ul id="update_search" className="text-sm">

                  {searchResults.map((student, index) => (
                    <li key={index}>
                      {/* Render each student's name and ID */}
                      <Link
                        id="link"
                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        to={`/individual-results?id=${student[1]}`}
                      >
                        <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                          <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                        </svg>
                        <span><b>Name:</b><i> {student[0]};</i>   <b>ID:</b> <i>{student[1]}</i></span>
                      </Link>
                    </li>
                  ))}

                </ul>
                <br></br>
                <div id='search' className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent searches</div>

                <ul className="text-sm flex justify-between flex-wrap">

                  {looked_up.map((term, index) => (
                    <li key={index}>
                      {/* Render each student's name and ID */}
                      <button
                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                        onClick={() => { this.filter(term) }}
                      >
                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>

                        <span>{term}</span>
                      </button>
                    </li>
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
