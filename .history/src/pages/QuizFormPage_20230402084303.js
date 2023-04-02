//QuizFormPage.js: Page for creating a new quiz form for the admin/teacher.

import React from 'react'
import NavBar from '../components/NavBar'
import QuizDetails from '../components/QuizDetails'
import { db, storage } from "../firebase/firebaseConfig"
import { getDoc, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import $ from 'jquery'
import Swal from 'sweetalert2';

var option = {}
var Q_option_list = {}
var correct_ans = {}


export default class QuizPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0,
            subject: "",
            class: "",
            section: "",
            start_time: "",
            quiz_date: "",
            end_time: "",
            qAdd: false,
            link: "/admin-dashboard"
        }
    }

    componentDidMount() {
        let searchParams = new URLSearchParams(window.location.search)

        this.setState({
            amount: searchParams.get('amount'),
            subject: searchParams.get('subject'),
            class: searchParams.get('class'),
            section: searchParams.get('section'),
            start_time: searchParams.get('start_time'),
            quiz_date: searchParams.get('date'),
            end_time: searchParams.get('end_time')
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
                <div class="flex justify-evenly">
                    <textarea
                        type="text"
                        aria-multiline="true"
                        id="q-${i}"
                        class="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                        placeholder='Question:'
                        wrap='hard'
                        style=min-width:90%></textarea>
                    <a id="add-image-button-${i}" type="button" class=" rounded-lg justify-center items-center w-h hover:bg-gray-300">
                        <span class="p-1 pl-2 material-symbols-outlined">
                            upload_file
                        </span>
                    </a>
                </div>
                <div id="q-${i}-ans">
                    <div>
                        <input id="ans-c-q-${i}-1" type="checkbox" name="checked"/>
                        <input id='ans-op-q-${i}-1' type="text" placeholder='Options:' class="bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100" />
                    </div>
                </div>

            </div>

            <div class='flex justify-end w-full'>
                <a id="add-option-button-${i}" type="button" class=" w-h hover:bg-gray-300">
                    <span class="p-1 rounded-lg material-symbols-outlined">
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
            $(`#add-image-button-${i}`).on("click", () => { this.upload_img(i) })

        }
    }


    prevQuiz() {
        $("#prev-quiz").on("click", () => {
            for (let i = 0; i < this.state.amount; i++) {
                var que = $(`#q-${i}`).val()

                var ans = []

                for (let u = 0; u < option[i]; u++) {
                    var opt = $(`#ans-op-q-${i}-${u + 1}`).val()
                    ans.push(opt)
                }

                Q_option_list[que] = ans
            }
            // console.log(Q_option_list)
            // console.log(correct_ans)

            this.upload_to_firebase()
        })
    }


    async upload_to_firebase() {
        var val = Object.keys(correct_ans).length
        var q_keys = Object.keys(Q_option_list)
        var ans_keys = Object.keys(correct_ans)
        var Q_and_Ans = {}


        for (var i = 0; i < val; i++) {
            var que = q_keys[i]
            var options = Q_option_list[q_keys[i]]
            var ans = correct_ans[ans_keys[i]]

            Q_and_Ans[que] = {
                "options": options,
                "ans": ans
            }
        }

        // console.log(Q_and_Ans)

        if (val == this.state.amount) {
            const data = {
                no_of_question: this.state.amount,
                subject: this.state.subject,
                class: this.state.class,
                section: this.state.section,
                start_time: this.state.start_time,
                quiz_date: this.state.quiz_date,
                end_time: this.state.end_time,
                questions: Q_and_Ans

            };

            // console.log(data)
            try {
                var path1 = `questions/${this.state.subject}/${this.state.class}`
                var path2 = `${this.state.section}/${this.state.quiz_date}/no_of_question:${this.state.amount}`
                await setDoc(doc(db, path1, path2), data);
                setTimeout(() => { window.location.replace(`/prev-quiz?path1=${path1}&path2=${path2}`) }, 1000)
            }
            catch (err) {
                Swal.fire(
                    "An error Occurred",
                    "Questions were not uploaded",
                    "error"
                )
            }
        }
        else {
            Swal.fire(
                "Not enough answer",
                "Please select correct answer for each question",
                "warning"
            )
        }
    }


    upload_img = async (qNo) => {
        const { value: file } = await Swal.fire({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload question picture'
            }
        })

        if (file) {

            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    let timerInterval
                    Swal.fire({
                        title: 'Uploading Image',
                        text: 'Please wait whlie the image is uploading',
                        didOpen: () => {
                            if (progress === 100) {
                                Swal.close()
                            } else {
                                Swal.showLoading()
                            }
                        },
                    })
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                            Swal.fire({
                                title: 'Question Image uploaded',
                                imageUrl: downloadURL,
                                imageAlt: 'Picture of the question'
                            })
                        }
                        reader.readAsDataURL(file)

                        $(`#q-${qNo}`).append(`${downloadURL}`)
                        $(`#q-${qNo}`).attr("disabled", 'disabled');
                    });
                }
            );
        }
    }



    render() {
        if (this.state.amount > 0) {
            return (
                <div><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <NavBar link={this.state.link} />

                    <div className=" bg-gradient-to-r from-primary to-accent flex justify-center items-center min-h-screen flex-col mt-10" id="questions" >
                        <form className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 mb-4">
                            <h2 className="text-3xl font-medium">Questions</h2>
                            <h4 className="text-2xl font-medium">Subject: {`${this.state.subject}`}</h4>
                            <h4 className="text-2xl font-medium">Section: {`${this.state.section}`}</h4>
                        </form>

                        <div id='question-container' className="w-full flex justify-center items-center min-h-screen flex-col">

                        </div>

                        <form className="md:p-8 max-w-[500px] space-y-8  rounded-lg w-11/12 mb-4">

                            <a style={{ borderRadius: "10px", textAlign: "center" }} id="prev-quiz" type="submit"
                                className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500"
                                onClick={() => { this.prevQuiz() }}>
                                Preview Quiz
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