//QuizFormPage.js: Page for creating a new quiz form for the admin/teacher.

import React from 'react'
import NavBar from '../components/NavBar'
import QuizDetails from '../components/QuizDetails'
import $ from 'jquery'

var option = {}
var Q_and_Ans = {}
var correct_ans = {}


export default class QuizPage extends React.Component {
    constructor() {
        super()

        this.state = {
            submitButton: false,
            amount: 0,
            subject: "",
            class: "",
            section: "",
            qAdd: false
        }
    }

    componentDidMount() {
        let searchParams = new URLSearchParams(window.location.search)

        this.setState({
            amount: searchParams.get('amount'),
            subject: searchParams.get('subject'),
            class: searchParams.get('class'),
            section: searchParams.get('section')
        })
    }

    componentDidUpdate() {
        if (this.state.qAdd === false) {
            this.addQuestion()
            this.setState({ qAdd: true })
        }
    }

    addOption = (qNo) => {
        var op = option[qNo] + 1
        option[qNo] = option[qNo] + 1

        $(`#q-${qNo}-ans`).append(`
        <div>
            <input id="ans-c-q-${qNo}-${op}" type="checkbox" />
            <input id='ans-op-q-${qNo}-${op}' type="text" placeholder='Options:' />
        </div>
        `)
        $(`#ans-op-q-${qNo}-${op}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
        $(`#ans-op-q-${qNo}-${op}`).attr("style", "min-width:90%")
        $(`#ans-c-q-${qNo}-${op}`).on("click", () => { this.checkbox(qNo, op) })

    }




    checkbox(qNo, op_no) {
        correct_ans[qNo] = op_no
    }

    addQuestion() {
        for (let i = 0; i < this.state.amount; i++) {

            option[i] = 1

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
                ></textarea>
                <div id="q-${i}-ans">
                    <div>
                        <input id="ans-c-q-${i}-1" type="checkbox" name="checked"/>
                        <input id='ans-op-q-${i}-1' type="text" placeholder='Options:' class="bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100" />
                    </div>
                </div>

            </div>

            <div class='flex justify-end w-full'>
                <a id="add-option-button-${i}" type="button" class=" w-h hover:bg-gray-300">

                    <span class="p-1 material-symbols-outlined">
                        add_circle
                    </span>

                    <label>Add Option</label>
                </a>
            </div>
        </form>
            `)
            $(`#ans-op-q-${i}-1`).attr("style", "min-width:90%")
            $(`#add-option-button-${i}`).on("click", () => { this.addOption(i) })
            $(`#ans-c-q-${i}-1`).on("click", () => { this.checkbox(i, 1) })

        }
    }


    startQuiz() {
        $("#start-quiz").on("click", () => {
            for (let i = 0; i < this.state.amount; i++) {
                var que = $(`#q-${i}`).val()

                var ans = []

                for (let u = 0; u < option[i]; u++) {
                    var opt = $(`#ans-op-q-${i}-${u + 1}`).val()
                    ans.push(opt)
                }

                Q_and_Ans[que] = ans
            }
            console.log(Q_and_Ans)
            console.log(correct_ans)
        })
    }

    render() {
        if (this.state.amount > 0) {
            return (
                <div>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                    <NavBar />

                    <div className="flex justify-center items-center min-h-screen flex-col mt-10" id="questions" >
                        <form className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 mb-4">
                            <h2 className="text-3xl font-medium">Questions</h2>
                            <h4 className="text-2xl font-medium">Subject: {`${this.state.subject}`}</h4>
                            <h4 className="text-2xl font-medium">Section: {`${this.state.section}`}</h4>
                        </form>

                        <div id='question-container' className="w-full flex justify-center items-center min-h-screen flex-col">

                        </div>

                        <form className="md:p-8 max-w-[500px] space-y-8  rounded-lg w-11/12 mb-4">

                            <a style={{ borderRadius: "10px", textAlign: "center" }} id="start-quiz" type="submit"
                                className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500"
                                onClick={() => { this.startQuiz() }}>
                                Start Quiz
                            </a>
                        </form>
                    </div>

                </div>
            )
        }

        else {
            return (
                <QuizDetails />
            )
        }
    }
}