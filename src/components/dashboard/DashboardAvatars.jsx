import { list } from 'firebase/storage';
import React from 'react';
import Jdenticon from 'react-jdenticon';


var nameList = []

export default class DashboardAvatars extends React.Component {

  constructor(e) {
    super()

    this.state = {
      name: localStorage.getItem('name'),
      a: e.e
    }

  }


  componentDidMount() {
    this.getStudentsName()
  }



  async getStudentsName() {
    var names = localStorage.getItem("nameList")
    nameList = names.split(",")
  }



  render() {
    if (nameList.length !== 0) {
      return (
        <div>
          <ul id="avatar" className="flex  flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px" >
            {
              nameList.map(name_ => {
                return (
                  <li className="icons_avatar">
                    <Jdenticon value={name_} />
                  </li>
                )
              }
              )}


            <button class="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2"
              style={{ marginLeft: "10px", alignSelf: "center" }}>
              <span class="sr-only">Add new user</span>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                </path>
              </svg>
            </button>

          </ul>
        </div >
      );
    }
  }
}
