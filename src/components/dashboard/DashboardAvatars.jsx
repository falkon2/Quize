import React from 'react';
import { Link } from 'react-router-dom';
import Jdenticon from 'react-jdenticon';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"


var displayed, user1 = "", user2, user3, user4
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
    // this.display_Avatar()
  }



  async getStudentsName() {

    try {


      const colRef = collection(db, "Student");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        var res = doc.data()
        if (userList.length <= 4) userList.push(res.name)
      })
      user1 = userList[0]
      user2 = userList[1]
      user3 = userList[2]
      user4 = userList[3]

      this.display_Avatar()

    }
    catch (err) {
      console.log(err)
    }

  }



  display_Avatar() {
    if (displayed === false) {
      console.clear()

      for (var i = 0; i < userList.length; i++) {
        $(`${i}`).attr("value",`${userList[i]}`)
      }

      displayed = !displayed
    }
  }



  render() {
      return (
        <div>
          <ul id="avatar" className="flex  flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px" >
            <li>
              <Link className="block" to="#0">
                <Jdenticon id="0" size={32} />
              </Link>
            </li>
            <li>
              <Link className="block" to="#0">
                <Jdenticon id="1" size={32} />
              </Link>
            </li>
            <li>
              <Link className="block rounded-full" to="#0">
                <Jdenticon id="2" size={32} />
              </Link>
            </li>
            <li>
              <Link className="block" to="#0">
                <Jdenticon id="3" size={32} />
              </Link>
            </li>
            <li>
              <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2">
                <span className="sr-only">Add new user</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      );
  }
}

export default DashboardAvatars;
