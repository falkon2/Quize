import React from 'react';
import { Link } from 'react-router-dom';
import Jdenticon from 'react-jdenticon';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"


var displayed
// var userList = []
var userList = ["Fred Nerk", "Person1", "Joe Bloggs", "Fred_Nerk", "Person2"]


class DashboardAvatars extends React.Component {

  constructor(e) {
    super()

    this.state = {
      name: localStorage.getItem('name'),
      a: e.e
    }
    displayed = this.state.a

  }


  componentDidMount() {
    // this.getStudentsName()
    this.display_Avatar()
  }



  async getStudentsName() {

    try {


      const colRef = collection(db, "Student");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        var res = doc.data()

        if (userList.length <= 4) userList.push(res.name)
      })

      this.display_Avatar()

    }
    catch (err) {
      console.log(err)
    }

  }



  display_Avatar() {
    if (displayed === false) {
      // console.clear()

      for (var i = 0; i < userList.length; i++) {
        $("#avatar").append(`
          <li>
            <Link class="block" to="#0">
              <Jdenticon value=${userList[i]} size={32} />
            </Link>
          </li>
        `)
        console.log("fhb")
      }

    }

    displayed = !displayed
  }



  render() {
    return (
      <ul id="avatar" className="flex  flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px" >
        {/*<li>
          <Link className="block" to="#0">
            <Jdenticon value={`Te01`} size={32} />
          </Link>
        </li>
        <li>
          <Link className="block" to="#0">
            <Jdenticon value={`sfjg`} size={32} />
          </Link>
        </li>
        <li>
          <Link className="block rounded-full" to="#0">
            <Jdenticon value={`sfikjy`} size={32} />
          </Link>
        </li>
         <li>
          <Link className="block" to="#0">
            <Jdenticon value={`dfskjhg`} size={32} />
          </Link>
        </li>*/}
        <li>
          <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2">
            <span className="sr-only">Add new user</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
          </button>
        </li>
      </ul>
    );
  }
}

export default DashboardAvatars;
