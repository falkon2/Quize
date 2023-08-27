import React from 'react';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection } from "firebase/firestore";
import $ from "jquery"
import Swal from 'sweetalert2';

var quiz_list = {}
var quiz_displayed = ""
var role_value = ""
var subject_selected = "All"

var quiz_done = localStorage.getItem("quiz")
var st_class = localStorage.getItem("class").split("-")[0]
var sec_class_st = localStorage.getItem("class").split("-")[1]

export default class DashboardTests extends React.Component {

  constructor(e) {
    super()

    this.state = {
      a: e.e,
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

  filter() {
    subject_selected = $("#filter").val()
    quiz_displayed = false
    $("#quiz-details").remove()
    $("#table").append(`<tbody id='quiz-details' className="text-sm font-medium divide-y divide-slate-100"></tbody>`)
    this.display_quiz_details()
  }

  check_date(date, st_time, end_time) {
    // Define the date, start time, and end time of the quiz
    var quizDate = date;  // Replace with the quiz date
    var quizStartTime = st_time;  // Replace with the quiz start time
    var quizEndTime = end_time;    // Replace with the quiz end time

    // Get the current date and time
    var currentDate = new Date();

    // Parse the quiz date, start time, and end time
    var [quizYear, quizMonth, quizDay] = quizDate.split('-').map(Number);
    var [startHour, startMinute] = quizStartTime.split(':').map(Number);
    var [endHour, endMinute] = quizEndTime.split(':').map(Number);

    // Convert the quiz date, start time, and end time to Date objects
    var quizStartDate = new Date(quizYear, quizMonth - 1, quizDay, startHour, startMinute, 0);
    var quizEndDate = new Date(quizYear, quizMonth - 1, quizDay, endHour, endMinute, 0);

    // Compare the current date and time with the quiz start and end times
    if (currentDate < quizStartDate) {
      return ('will_Start');
    } else if (currentDate >= quizStartDate && currentDate <= quizEndDate) {
      return ('progress');
    } else {
      return ('ended');
    }

  }

  display_quiz_details() {

    if (quiz_displayed === false) {

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

          var start_time = time.split("-")[0]
          var end_time = time.split("-")[1]

          var full_exam_date = data.quiz_date

          var test_status = this.check_date(full_exam_date, start_time, end_time)

        }
        catch (err) {
          console.log(err)
        }
        var q_class = data.class
        var sec_class = data.section

        if (q_class === st_class || st_class === "undefined") {
          if (sec_class === sec_class_st || st_class === "undefined") {
            if (subject_selected === "All" || subject_selected === data.subject) {
              $("#quiz-details").append(`
              <tr id="display-quiz">
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
                  <div id=${data.id}:${test_status} class="text-center cursor-pointer text-sky-500">${role_value}</div>
                </td>
              </tr>
              `)


              if (test_status === "progress") {
                $(`#status-${i}`).append(`<div  class="text-center text-yellow-500 bg-yellow-200 p-1 rounded-full">In Progress</div>`)
                $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
              }
              else if (test_status === "ended") {
                $(`#status-${i}`).append(`<div  class="text-center text-red-500 bg-red-200 p-1 rounded-full">Closed</div>`)
                if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
              }
              else if (test_status === "will_Start") {
                $(`#status-${i}`).append(`<div class="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>`)
                if (role_value === "View") $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
              }

            }
          } else {
            $("#quiz-details").append(`
                <h3 class="p-5">
                <I>---End Line---</I></h3>
              `)
          }
        } else {
          $("#quiz-details").append(`
              <h3 class="p-5">
              <I>---End Line---</I></h3>
            `)
        }



      }
      quiz_displayed = !quiz_displayed
    }
    else {
      quiz_displayed = !quiz_displayed
    }
  }

  view_quiz(el, location) {
    let id = el.target.getAttribute("id").split(":")[0];
    let status_test = el.target.getAttribute("id").split(":")[1];

    if (role_value === "View") {
      window.location.replace("/prev-quiz?" + location + id + "&status=" + status_test)
    }

    else if (role_value === "Start") {
      var quizes = quiz_done.split(",")

      if (quizes.includes(id)) {
        Swal.fire("Quiz Attempted", "You have already attempted the quiz", "info")
      } else {
        window.location.replace("/start-quiz?" + location + id)
      }
    }
  }


  render() {
    return (
      <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100 flex justify-between">
          <h2 className="font-semibold text-slate-800">QUIZS</h2>


          <div style={{
            "minWidth": "400px",
            "display": "flex",
            "justifyContent": "space-evenly",
            "alignItems": 'center'
          }}>

            <label style={{ marginLeft: "-10px" }} className="text-gray-600 font-medium">
              Class:  {st_class}-{sec_class_st}
            </label>

            <label className="text-gray-600 font-medium" htmlFor="filter">
              Subject:
            </label>

            <select
              id="filter"
              name="filter"
              className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"

            >
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Social Studies">Social Studies</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Artificial Intelligence">Computer</option>
            </select>

            <button style={{ borderRadius: "10px" }} type="submit" className="bg-green-600 rounde-md p-3 text-white hover:bg-yellow-500"
              onClick={(e) => { this.filter() }}>
              Filter
            </button>
          </div>


        </header>


        <div className="p-3">

          {/* Table */}
          <div style={{ maxHeight: "340px", minHeight: "100px" }} className="overflow-x-auto overflow-y-auto">
            <table id="table" className="table-auto w-full">
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
                    <div className="font-semibold text-center ">View</div>
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