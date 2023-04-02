import React from 'react';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection} from "firebase/firestore";
import $, { data } from "jquery"

var quiz_list = {}
var quiz_displayed = false


export default class DashboardStudent extends React.Component {
  async getQuiz() {
    const colRef = collection(db, "questions");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {

      var res = doc.data()

      quiz_list[doc.id] = {
        "subject": res.subject,
        "class": res.class,
        "section": res.section,
        "quiz_date": res.quiz_date,
        "time": `${res.start_time} - ${res.end_time}`,
        "id": doc.id
      }
    })

    // console.log(quiz_list)
    this.display_quiz_details()

  }

  componentDidMount() {
    this.getQuiz()
    // this.display_quiz_details()
  }

  display_quiz_details() {
    if (quiz_displayed === false) {
      const new_date = new Date()
      var time = `${new_date.getHours()}:${new_date.getMinutes()}`

      var date = new_date.getDate()
      var year = new_date.getFullYear()
      var month = new_date.getMonth() + 1

      if (date < 10) date = `0${date}`
      if (month < 10) month = `0${month}`

      var full_date = year + "-" + month + "-" + date
      // console.log(full_date)

      var ids = Object.keys(quiz_list)

      if(ids.length === 0){
        $("#quiz-details").append(`
          <h1 class="p-5">
          No Quiz scheduled</h1>
        `)
      }

      for (var i = 0; i < ids.length; i++) {

        var data = quiz_list[ids[i]]
        var location = `/prev-quiz?path1=questions/&path2=${ids[i]}`
        // console.log(location)

        $("#quiz-details").append(`
          <tr>
            <td class="p-2">
              <div class="flex items-center">
                <div class="flex items-center">
                  <img class="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/office/40/null/checked--v1.png" width="36" height="36" viewBox="0 0 36 36" />
                  <div class="text-slate-800">${data.subject} (${data.class}-${data.section})</div>
                </div>
              </div>
            </td>
            <td class="p-2">
              <div class="text-center">${data.quiz_date}</div>
            </td>
            <td class="p-2">
              <div class="text-center">${data.time}</div>
            </td>
            <td class="p-2">
              <div class="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>
            </td>
            <td id="view-quiz-${i}" class="p-2">
              <div id=${data.id} class="text-center text-sky-500">View</div>
            </td>
          </tr>
        `)
        $(`#view-quiz-${i}`).on("click", () => { this.view_quiz(location, data.subject, i) })

      }
      quiz_displayed = true
    }
  }

  view_quiz(location, sub, i) {
    console.log(location)
    console.log(sub + " : " + i)
  }


  render() {
    return (
      <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">QUIZS</h2>
        </header>
        <div className="p-3">

          {/* Table */}
          <div style={{maxHeight:"340px", minHeight:"100px"}} className="overflow-x-auto overflow-y-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Test</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Date</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Duration</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Status</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">View</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody id='quiz-details' className="text-sm font-medium divide-y divide-slate-100">
                {/* Row */}



              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}