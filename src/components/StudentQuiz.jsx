import React from 'react'
import NavBar from './NavBar'
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc, updateDoc } from "firebase/firestore";
import $ from 'jquery'
import Swal from 'sweetalert2';

var question_add = false
var correct_ans = {}

export default class StartQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            path1: "",
            path2: "",
            no_question_value: 0
        }
    }

    componentDidMount() {
        let searchParams = new URLSearchParams(window.location.search)

        var path1 = searchParams.get("path1")
        var path2 = searchParams.get("path2")

        this.setState({ path1: path1, path2: path2 })

        this.getData(path1, path2)
        // this.addQuestion(this.state.data)
    }

    async getData(path1, path2) {
        const docRef = doc(db, path1, path2)
        const docSnap = await getDoc(docRef);
        var data = docSnap.data()

        this.setState({ data: data })
        // console.log(data)
        this.addQuestion(data)
    }

    addOption = (qNo, options, data, ans, ques) => {
        var options_len = (data["questions"][ques]["options"].length)
        // console.log(ans)

        for (var i = 0; i < options_len; i++) {
            var op_ans = options[i]
            if (i === ans - 1) {
                // console.log(`: ${i}`)
                $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" class="${options[i]}" type="checkbox" correct />
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" correct disabled></input>
                    </div>
                    `)
                $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                $(`#ans-c-q-${qNo}-${i}`).on("click", (e) => {
                    var op_selected = $(e.target).attr("class")
                    this.checkbox(qNo, op_selected, "true", ques)

                })

            }
            else {
                $(`#q-${qNo}-ans`).append(`
                <div>
                    <input id="ans-c-q-${qNo}-${i}" class="${options[i]}" type="checkbox"  />
                    <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                </div>
                `)
                $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                $(`#ans-c-q-${qNo}-${i}`).on("click", (e) => {
                    var op_selected = $(e.target).attr("class")
                    this.checkbox(qNo, op_selected, "false", ques)
                })
            }
        }
    }

    checkbox(qNo, op_no, result, ques) {
        correct_ans[qNo] = [op_no, result, ques]
    }

    addQuestion(data) {
        if (question_add === false) {
            // console.log(data["questions"])

            this.setState({ no_question_value: parseInt(data["no_of_question"]) })

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {
                var questions = Object.keys(data["questions"])[i]

                let result = questions.includes("https://firebasestorage.googleapis.com/v0/b/quize-a1c9e.appspot.com/o/");
                // console.log(result)

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
                var question = Object.keys(data["questions"])[i]
                var options = data["questions"][question]["options"]
                var ans = data["questions"][question]["ans"]

                this.addOption(i, options, data, ans, question)
            }

            question_add = true
        }
    }

    submit() {

        console.log(this.state.data["start_time"], this.state.data["end_time"])
        const currentTime = new Date();

        // Extract hours and minutes from start and end times
        const startTimeParts = this.state.data.start_time.split(":");
        const endTimeParts = this.state.data.end_time.split(":");

        // Create Date objects for start and end times
        const startTime = new Date(currentTime);
        startTime.setHours(parseInt(startTimeParts[0], 10));
        startTime.setMinutes(parseInt(startTimeParts[1], 10));

        const endTime = new Date(currentTime);
        endTime.setHours(parseInt(endTimeParts[0], 10));
        endTime.setMinutes(parseInt(endTimeParts[1], 10));

        // Check if the current time is within the quiz duration
        if (currentTime >= startTime && currentTime <= endTime) {
            // Your existing submission logic here

            var score = 0;

            var score = 0
            var path1 = `Student/`
            var path2 = localStorage.getItem("user-id")
            var quiz = []

            var quiz_id = this.state.path2
            var q_number = this.state.no_question_value

            try {
                var passed_quiz = localStorage.getItem("quiz")
                quiz = passed_quiz.split(",")
                quiz.push(this.state.path2)
                console.log(quiz)
            }
            catch (err) { console.log(err) }

            console.log(correct_ans)

            var keys = Object.keys(correct_ans)

            for (var i = 0; i < keys.length; i++) {
                var result = (correct_ans[keys[i]][1])
                if (result === "true") score += 1
            }

            var total_q = keys.length

            var update_data_structure = {
                "ans": correct_ans,
                "marks": score,
                "percentage": ((score / total_q) * 100).toFixed(2),
            }

            // console.log(update_data_structure)
            // quiz[quiz_id] = update_data_structure

            var data = { "quiz": quiz }
            data[quiz_id] = update_data_structure

            if (keys.length === q_number) {

                Swal.fire({
                    title: 'Submit Response?',
                    text: "You won't be able to change the answers!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Submit!'

                }).then(async (result) => {
                    if (result.isConfirmed) {
                        console.log("success")

                        const docRef = doc(db, path1, path2)

                        await updateDoc(docRef, data)
                            .then(docRef => {
                                console.log("Submited");
                                Swal.fire(
                                    'Success!',
                                    'Your Response has been submited.',
                                    'success'
                                )
                                localStorage.setItem("quiz", quiz)
                            })
                            .catch(error => {
                                console.log(error);
                                Swal.fire(
                                    'Error Occured!',
                                    'Sorry an error occured.',
                                    'error'
                                )
                            })

                        setTimeout(() => { window.location.replace("/user-dashboard") }, 2000)
                    }
                })

            } else {
                Swal.fire("All questions are mandatory",
                    "Please answer all question",
                    "warning")
            }
        }
        else {
            // Display an error message if the quiz is over
            Swal.fire("Quiz Over",
                "The quiz duration has ended. You cannot submit responses anymore.",
                "error");
        }
    }


    render() {
        return (
            <div className="bg-[cbd5e1]">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />

                <NavBar link={this.state.link} />

                <div className="flex justify-center items-center min-h-screen flex-col mt-10" id="questions" >
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
                            onClick={() => { this.submit() }}>
                            Submit
                        </a>
                    </form>
                </div>

            </div>
        )
    }
}