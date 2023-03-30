import React from 'react';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar';
export default class TestView extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        user: "",
        link: '/admin-dashboard'
      }
    }
    render() {
        return(
            <div>
                <NavBar link={this.state.link} />
                <body data-theme="night" class="flex bg-gray-100 min-h-screen overflow-hidden">
                <SideBar />
                
  <div>
    <div  className="container mx-[50%]">
      <div className="py-5">
        <div className="flex flex-wrap flex-row mb-1 sm:mb-0 justify-center w-full">
          <h2 className="text-4xl justify-center items-center text-center bg-secondary p-6 px-36 rounded-full  text-white">Tests</h2>
          <div className="text-end">
            <form className="flex w-full space-x-3">
              
            </form>
          </div>
        </div>
        <div className="py-3 mx-11 w-">
          <div data-theme="night" className="max-w-full w-full h-full bg-neutral overflow-x-auto shadow rounded-lg">
            <table className="w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-neutral text-white  border-b border-gray-200   text-left text-sm uppercase font-normal"
                  >
                    Test Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-neutral text-white  border-b border-gray-200   text-left text-sm uppercase font-normal"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-neutral text-white  border-b border-gray-200   text-left text-sm uppercase font-normal"
                  >
                    Till
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-neutral text-white  border-b border-gray-200   text-left text-sm uppercase font-normal"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-neutral text-white  border-b border-gray-200   text-left text-sm uppercase font-normal"
                  />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://img.icons8.com/fluency/48/null/cancel.png"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Algebra (Class IX-B) 
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                      10:00AM 29-03-23
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                      11:00AM 29-03-23 
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                      />
                      <span className="relative">Closed</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://img.icons8.com/office/40/null/checked--v1.png"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Polynomial (Class 10-C)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">11:00AM 29-03-23 </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                    11:50AM 31-03-23 
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://img.icons8.com/fluency/48/null/cancel.png"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Geometry (Class VII-E)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                      9:30AM 02/04/2023
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                      11:30AM 02/04/2023
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      />
                      <span className="relative">Close</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://img.icons8.com/office/40/null/checked--v1.png"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-white whitespace-no-wrap">
                          Rise of Nazism (Class IX-A)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">4:30PM 30/03/2023</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <p className="text-white whitespace-no-wrap">
                      6:30PM 30/03/2023
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-neutral text-white text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-5 bg-neutral text-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl  bg-neutral text-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-white bg-primary hover:bg-blue-400 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base  bg-neutral text-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base  bg-neutral text-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base  bg-neutral text-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl  bg-neutral text-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>




                </body>
            </div>
        )
    }
}
  