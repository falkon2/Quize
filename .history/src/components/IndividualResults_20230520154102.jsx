import React from 'react';
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";
import $ from "jquery"

var quiz_displayed = ""

export default class IndividualResult extends React.Component {

  constructor(e) {
    super()

    this.state = {
      a: e.e,
      data: "",
      quiz_id: [],
      subject: "",
      no_of_question: "",
      dates: ""
    }
    quiz_displayed = this.state.a

  }

  async getQuiz() {
    let searchParams = new URLSearchParams(window.location.search)

    var st_id = searchParams.get("id")

    const docRef = doc(db, "Student", st_id)
    const docSnap = await getDoc(docRef);
    var data = docSnap.data()

    this.setState({ data: data, quiz_id: data.quiz })

    await this.getQuizDetails(data.quiz)
    this.display_quiz_details()
  }

  async getQuizDetails(id) {
    var quiz_id = id

    var subject = {}
    var no_of_question = {}
    var quiz_date = {}

    for (var i in quiz_id) {

      try {
        const docRef = doc(db, "questions", quiz_id[i])
        const docSnap = await getDoc(docRef);
        var data = docSnap.data()

        // console.log(data)

        if (data !== undefined) {

          subject[quiz_id[i]] = data.subject
          quiz_date[quiz_id[i]] = data.quiz_date
          no_of_question[quiz_id[i]] = data.no_of_question
        }

      }
      catch (err) {
        console.log(err)
        continue
      }

      this.setState({
        "subject": subject,
        "no_of_question": no_of_question,
        "dates": quiz_date
      })
    }

  }

  componentDidMount() {
    this.getQuiz()

  }

  display_quiz_details() {

    if (quiz_displayed === false) {

      var quiz_data = this.state.data
      var quiz_id = this.state.quiz_id
      var subject = this.state.subject
      var no_of_question = this.state.no_of_question
      var dates = this.state.dates

      $("#tag").remove()


      for (var i = 0; i < quiz_id.length; i++) {
        var list_ = quiz_data[quiz_id[i]]
        var subs_ = subject[quiz_id[i]]
        var date = dates[quiz_id[i]]
        var no_ques = no_of_question[quiz_id[i]]
        var percentage, marks
        var location = `path1=questions/&path2=`

        if (list_ !== undefined) {
          try {
            percentage = (list_.percentage)
            marks = (list_.marks)


            $("#quiz-details").append(`
          <tr>
            <td class="p-2">
              <div class="flex items-center">
                <div class="flex items-center">
                  <img class="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/office/40/null/checked--v1.png" width="36" height="36" viewBox="0 0 36 36" />
                  <div class="text-slate-800">${subs_}</div>
                </div>
              </div>
            </td>
            <td class="p-2">
              <div class="text-center">${date}</div>
            </td>
            <td class="p-2">
              <div class="text-center">${marks}/${no_ques}</div>
            </td>
            <td class="p-2">
              <div class="text-center">${percentage}%</div>
            </td>
          </tr>
        `)
            $(`#view-quiz${i}`).on("click", (e) => { this.view_quiz(e, location) })
          }
          catch (err) {
            console.log(err)
            continue
          }
        }


      }

    }
    quiz_displayed = !quiz_displayed
  }


  view_quiz(el, location) {
    let id = el.target.getAttribute("id");
    let name_ = localStorage.getItem('name')

    window.location.replace(`/${name_}/ViewQuizResult?` + location + id)
    console.log(id)
  }


  render() {
    return (
      <div className="col-span-full xl:col-span-8 bg-red shadow-lg rounded-sm border border-slate-200">
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
                    <div className="font-semibold text-left">Subject</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Dates</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Marks</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Percentage</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody id='quiz-details' className="text-sm font-medium divide-y divide-slate-100">
                <div id="tag" style={{paddingTop:"20px", paddingLeft:"5px"}}>
                  <text>
                    <i>Loading....</i>
                  </text>
                </div>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}