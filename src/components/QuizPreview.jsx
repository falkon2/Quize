import React from 'react'
import NavBar from './NavBar'
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";
import $ from 'jquery'
import Swal from 'sweetalert2';

var question_add = false



export default class PreviewQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            path1: "",
            path2: ""
        }
    }



    componentDidMount() {
        let searchParams = new URLSearchParams(window.location.search)

        var path1 = searchParams.get("path1")
        var path2 = searchParams.get("path2")
        var test_status = searchParams.get("status")

        
        this.setState({ path1: path1, path2: path2, test_status: test_status })
        
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
            if (i === ans - 1) {
                // console.log(`: ${i}`)
                $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" checked disabled/>
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}" disabled></input>
                    </div>
                    `)
                $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
            }
            else {
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
    }

    addQuestion(data) {
        if (question_add === false) {
            // console.log(data["questions"])

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
                var questions_ = Object.keys(data["questions"])[i]
                var options = data["questions"][questions_]["options"]
                var ans = data["questions"][questions_]["ans"]

                this.addOption(i, options, data, ans, questions_)
            }

            question_add = true
        }
    }

    changeQuiz() {
        var status_ = this.state.test_status

        if (status_ === "will_Start") {
            window.location.replace(`/edit-quiz?path1=${this.state.path1}&path2=${this.state.path2}`)
        }
        else if (status_ === "progress") {
            Swal.fire(
                "Quiz is in progress",
                "Editing is closed",
                "info"
            )
        }
        else if (status_ === "ended") {
            Swal.fire({
                title: 'Quiz has ended',
                text: "Editing is closed!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'View Result'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace(`/results`)
                }
            })
        }
    }

    submit() {
        Swal.fire(
            "Quiz Ready",
            "Quiz will start according to the given time",
            "success"
        )

        setTimeout(() => { window.location.replace("/admin-dashboard") }, 2000)
    }


    render() {
        return (
            <div className="bg-[cbd5e1] ">
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
                            className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500"
                            onClick={() => { this.changeQuiz() }}>
                            Edit
                        </a>

                        <a style={{ borderRadius: "10px", textAlign: "center" }} href="javascript:void(0);" id="prev-quiz" type="submit"
                            className="bg-yellow-600 rounded-md w-full p-2 ml-5 text-white hover:bg-yellow-500"
                            onClick={() => { this.submit() }}>
                            Submit
                        </a>
                    </form>
                </div>

            </div>
        )
    }
}