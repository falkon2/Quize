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
    <div  className="container mx-auto">
      <div className="py-8">
        <div className="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-4xl justify-center items-center text-center bg-black p-6 rounded-full  text-white">Tests</h2>
          <div className="text-end">
            <form className="flex w-full space-x-3">
              
            </form>
          </div>
        </div>
        <div className="py-4">
          <div data-theme="night" className="max-w-full bg-neutral overflow-x-auto shadow rounded-lg">
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
                            src="/images/5.jpg"
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

    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-neutral text-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
          Website Design
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Encompassing today’s website design technology to integrated and build
          solutions relevant to your business.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
          Branding
        </h3>
        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
          Share relevant, engaging, and inspirational brand messages to create a
          connection with your audience.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
          SEO Marketing
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Let us help you level up your search engine game, explore our
          solutions for digital marketing for your business.
        </p>
      </div>
    </div>
  </div>




                </body>
            </div>
        )
    }
}
  