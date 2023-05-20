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


            <button onClick={()=>{window.location.href="/results"}} class="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2"
              style={{ marginLeft: "10px", alignSelf: "center" }}>
              <span class="sr-only">Add new user</span>

              <svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd" opacity="75%">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </button>

          </ul>
        </div >
      );
    }
  }
}
