import React from 'react'
import NavBar from './NavBar'
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";
import $ from 'jquery'
import Swal from 'sweetalert2';

var question_add = false
var ans_val = {}
var color = true
var option_id_green = []
var option_id_red = []

export default class ViewQuizResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            st_data: {},
            quiz_id: "",
            question_id: [],
            path1: "",
            path2: ""
        }
    }

    componentDidMount() {
        let searchParams = new URLSearchParams(window.location.search)

        var path1 = searchParams.get("path1")
        var path2 = searchParams.get("path2")
        // console.log(path2)

        this.setState({ path1: path1, path2: path2 })
        this.get_answer_data(path1, path2)

    }

    async get_answer_data(path1, path2) {
        var st_id = localStorage.getItem("user-id")

        const docRef = doc(db, "Student", st_id)
        const docSnap = await getDoc(docRef);
        var data = docSnap.data()


        this.setState({ st_data: data, question_id: data.quiz })


        await this.getData(path1, path2)
    }

    async getData(path1, path2) {
        const docRef = doc(db, path1, path2)
        const docSnap = await getDoc(docRef);
        var data = docSnap.data()

        // console.log(data)

        this.setState({ data: data })

        var status_ = this.check_date(data["quiz_date"], data["start_time"], data["end_time"])
        // console.log(status_)

        if (status_ !== "ended") {
            $('#question-container').css('filter', 'blur(10px)');
            $('body').css("height", '100%');
            $('body').css('overflow-y', 'hidden');

            color = false

            if (this.state.st_data["class"] === "undefined") {

                Swal.fire({
                    title: "Quiz not ended",
                    text: `Please came back after ${data["end_time"]}`,
                    icon: "info",
                    confirmButtonText: 'Go, Back',
                    cancelButtonText: "View Result"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.history.back();
                    }
                })

            }
        }
        // console.log(color_change)
        this.addQuestion(data, path2)
        this.ans_color()
    }

    addOption = (qNo, options, data, ans, ques, id_ques) => {
        var options_len = (data["questions"][ques]["options"].length)

        var result_value = ans_val[id_ques]


        // console.log(ans)

        for (var i = 0; i < options_len; i++) {
            var option_current = options[i]

            if (`${result_value["result_t_f"]}` === "true") {
                if (option_current === result_value["options_value"]) {
                    option_id_green.push(`ans-op-q-${qNo}-${i}`)

                    $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" checked disabled/>
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                    </div>
                    `)
                    $(`#ans-op-q-${qNo}-${i}`).attr("class", `m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100`)
                    $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                } else {
                    $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" disabled />
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                    </div>
                    `)
                    $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                    $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                }
            }
            else {
                if (option_current === result_value["options_value"]) {
                    option_id_red.push(`ans-op-q-${qNo}-${i}`)

                    $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" checked disabled/>
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                    </div>
                    `)
                    $(`#ans-op-q-${qNo}-${i}`).attr("class", ` m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100`)
                    $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                } else {
                    $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" disabled />
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                    </div>
                    `)
                    $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                    $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                }

                if (i === ans - 1) {
                    if (option_id_green.includes(`ans-op-q-${qNo}-${i}`) === false) {
                        option_id_green.push(`ans-op-q-${qNo}-${i}`)
                    }

                    $(`#ans-op-q-${qNo}-${i}`).attr("class", `m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100`)
                    $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                }

            }

        }
    }


    ans_color() {
        if (color) {
            for (var i = 0; i < option_id_green.length; i++) {
                $(`#${option_id_green[i]}`).attr("class", `bg-green-100 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100`)
            }
            for (var f = 0; f < option_id_red.length; f++) {
                $(`#${option_id_red[f]}`).attr("class", `bg-red-100 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100`)
            }
        }
    }



    addQuestion(data, id_ques) {
        if (question_add === false) {
            // console.clear()

            var quiz_data = this.state.st_data

            // // console.log(quiz_data[id_ques].ans)
            // // console.log(id_ques)

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {
                var questions = Object.keys(data["questions"])[i]

                let result = questions.includes("https://firebasestorage.googleapis.com/v0/b/quize-a1c9e.appspot.com/o/");

                if (result === true) {
                    $("#question-container").append(`
                        <form id=""form-q-${i} class="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 mb-4">

                            <div class="flex flex-col space-y-2">
                                <img
                                    id="q-${i}"
                                    class="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                    placeholder='Question:' src="${questions}"></img>
                                <div id="q-${i}-ans">

                                </div>
                            </div>
                        </form>
                    `)
                } else {
                    $("#question-container").append(`
                        <form id=""form-q-${i} class="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 mb-4">

                            <div class="flex flex-col space-y-2">
                                <textarea
                                    type="text"
                                    aria-multiline="true"
                                    id="q-${i}"
                                    class="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                    placeholder='Question:'
                                    wrap='hard'
                                    disabled
                                >${questions}</textarea>
                                <div id="q-${i}-ans">

                                </div>
                            </div>
                        </form>
                    `)
                }

            }

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {

                var ans_options = quiz_data[id_ques].ans

                var options_value = ans_options[i][0]
                var result_t_f = ans_options[i][1]
                var question_val = ans_options[i][2]

                ans_val[question_val] = { "options_value": options_value, "result_t_f": result_t_f }
            }

            // console.log(ans_val)

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {
                var questions_ = Object.keys(data["questions"])[i]
                var options = data["questions"][questions_]["options"]
                var ans = data["questions"][questions_]["ans"]

                this.addOption(i, options, data, ans, questions_, questions_)
            }


            question_add = true
        }
    }

    changeQuiz() {
        window.location.replace(`/edit-quiz?path1=${this.state.path1}&path2=${this.state.path2}`)
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


    render() {
        if (this.state.data.length !== 0) {

            return (
                <div className="bg-[cbd5e1] ">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />

                    <NavBar link={this.state.link} />

                    <div className="flex justify-center items-center min-h-screen flex-col mt-10" id="questions" >
                        <form className="bg-white p-5 md:p-8 max-w-[500px] space-y-2 shadow rounded-lg w-11/12 mb-4">
                            <h2 className="text-3xl font-medium pb-4">Result:</h2>
                        </form>

                        <form className="bg-white p-5 md:p-8 max-w-[500px] space-y-2 shadow rounded-lg w-11/12 mb-4">
                            <h2 className="text-3xl font-medium pb-4">Details:</h2>
                            <h4 className="text-2xl font-medium">Subject: {`${this.state.data["subject"]}`}</h4>
                            <h4 className="text-2xl font-medium">Class & Section: {`${this.state.data["class"]}/${this.state.data["section"]}`}</h4>
                            <h4 className="text-2xl font-medium">Date: {`${this.state.data["quiz_date"]}`}</h4>
                            <h4 className="text-2xl font-medium">Duration {`${this.state.data["start_time"]} - ${this.state.data["end_time"]}`}</h4>
                        </form>



                        <div id='question-container' className="w-full flex justify-center items-center min-h-screen flex-col">

                        </div>

                        <form className="md:p-8 max-w-[500px] flex rounded-lg w-11/12 mb-4">
                            <a style={{ borderRadius: "10px", textAlign: "center" }} id="prev-quiz" type="submit"
                                className="bg-yellow-600 cursor-pointer rounded-md w-full p-2 ml-5 text-white hover:bg-yellow-500"
                                onClick={() => {
                                    let name_ = localStorage.getItem("name")
                                    window.location.replace(`/${name_}/result`)
                                }}>
                                Back
                            </a>
                        </form>
                    </div>

                </div>
            )
        }
    }
}