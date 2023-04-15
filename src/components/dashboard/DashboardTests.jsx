import React from 'react';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"

var quiz_list = {}
var quiz_displayed = ""
var role_value = ""

export default class DashboardTests extends React.Component {

  constructor(e) {
    super()

    this.state = {
      a: e.e
    }
    quiz_displayed = this.state.a


    if (localStorage.getItem("role") === "Student") role_value = "Start"
    else if (localStorage.getItem("role") === "Teacher") role_value = "View"
  }

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
    // console.clear()
    // console.log(quiz_displayed)

    if (quiz_displayed === false) {

      const new_date = new Date()
      var hour = new_date.getHours()
      var min = new_date.getMinutes()

      var date = parseInt(new_date.getDate())
      var year = new_date.getFullYear()
      var month = new_date.getMonth() + 1


      // console.log(full_date)

      var ids = Object.keys(quiz_list)

      if (ids.length === 0) {
        $("#quiz-details").append(`
          <h1 class="p-5">
          No Quiz scheduled</h1>
        `)
      }
      for (var i = 0; i < ids.length; i++) {
        var data = quiz_list[ids[i]]
        var location = `path1=questions/&path2=`
        // console.log(location)


        try {
          var time = data.time
          var start_exam_hour = parseInt(time.split("-")[0].split(":")[0])
          var start_exam_min = parseInt(time.split("-")[0].split(":")[1])
          var end_exam_hour = parseInt(time.split("-")[1].split(":")[0])
          var end_exam_min = parseInt(time.split("-")[1].split(":")[1])
          // console.log(exam_hour)


          var full_exam_date = data.quiz_date
          var eaxm_year = parseInt(full_exam_date.split("-")[0])
          var exam_mon = parseInt(full_exam_date.split("-")[1])
          var exam_date = parseInt(full_exam_date.split("-")[2])
          // console.log(exam_date + " :: " + date)
        }
        catch (err) {
          console.log(err)
        }

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
              <div class="text-center">${full_exam_date}</div>
            </td>
            <td class="p-2">
              <div class="text-center">${time}</div>
            </td>
            <td id="status-${i}" class="p-2">
              
            </td>
            <td id="view-quiz${i}" class="p-2">
              <div id=${data.id} class="text-center text-sky-500">${role_value}</div>
            </td>
          </tr>
        `)

        // console.log(sub)
        // console.log(ids[i])

        if (eaxm_year >= year && exam_mon > month || exam_date >= date) {
          if (exam_mon === month && exam_date === date) {

            if (start_exam_hour <= hour && end_exam_hour >= hour) {
              if (end_exam_min >= min) {
                $(`#status-${i}`).append(`<div class="text-center text-yellow-500 bg-yellow-200 p-1 rounded-full">In Progress</div>`)
                $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
              }
              else {
                $(`#status-${i}`).append(`<div class="text-center text-red-500 bg-red-200 p-1 rounded-full">Closed</div>`)
                if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
              }

            }
            else {
              $(`#status-${i}`).append(`<div class="text-center text-red-500 bg-red-200 p-1 rounded-full">Closed</div>`)
              if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
            }

          }
          else {
            $(`#status-${i}`).append(`<div class="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>`)
            if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
          }
        }
        else {
          $(`#status-${i}`).append(`<div class="text-center text-red-500 bg-red-200 p-1 rounded-full">Closed</div>`)
          if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
        }

      }
      quiz_displayed = !quiz_displayed
    }
    else {
      quiz_displayed = !quiz_displayed
    }
  }

  view_quiz(el, location) {
    let id = el.target.getAttribute("id");

    if (role_value === "View") {
      window.location.replace("/prev-quiz?" + location + id)
    }

    else if (role_value === "Start") {
      window.location.replace("/start-quiz?" + location + id)
    }
  }


  render() {
    return (
      <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">QUIZS</h2>
        </header>
        <div className="p-3">

          {/* Table */}
          <div style={{ maxHeight: "340px", minHeight: "100px" }} className="overflow-x-auto overflow-y-auto">
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

              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}