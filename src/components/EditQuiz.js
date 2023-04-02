import React from 'react'
import NavBar from '../components/NavBar'
import { db, storage } from "../firebase/firebaseConfig"
import { getDoc, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import $ from 'jquery'
import Swal from 'sweetalert2';

var question_add = false
var option = {}
var Q_option_list = {}
var correct_ans = {}

export default class PreviewQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            path1: "",
            path2: "",
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

    setOptions = (qNo, options, data, ans, ques) => {
        var options_len = (data["questions"][ques]["options"].length)
        // console.log(ans)

        for (var i = 0; i < options_len; i++) {
            if (i === ans - 1) {
                // console.log(`: ${i}`)
                $(`#q-${qNo}-ans`).append(`
                    <div>
                        <input id="ans-c-q-${qNo}-${i}" type="checkbox" checked  />
                        <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}"  ></input>
                    </div>
                    `)
                $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                $(`#ans-c-q-${qNo}-${i}`).on("click", this.checkbox(qNo, i))

                option[qNo] = option[qNo] + 1
            }
            else {
                $(`#q-${qNo}-ans`).append(`
                <div>
                    <input id="ans-c-q-${qNo}-${i}" type="checkbox"   />
                    <input id='ans-op-q-${qNo}-${i}' type="text" value="${options[i]}"  ></input>
                </div>
                `)
                $(`#ans-op-q-${qNo}-${i}`).attr("class", "bg-gray-50 m-1 ml-4 p-2 rounded-md outline-0 focus:bg-gray-100")
                $(`#ans-op-q-${qNo}-${i}`).attr("style", "min-width:90%")
                $(`#ans-c-q-${qNo}-${i}`).on("click", () => { this.checkbox(qNo, i) })

                option[qNo] = option[qNo] + 1
            }
        }
    }

    addQuestion(data) {
        if (question_add == false) {
            // console.log(data["questions"])

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {
                var questions = Object.keys(data["questions"])[i]
                option[i] = 0

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
                                    style=min-width:90%
                                >${questions}</textarea>

                                <a id="add-image-button-${i}" type="button" class=" w-h hover:bg-gray-300">
                                    <span class="p-1 pl-2 material-symbols-outlined">
                                        upload_file
                                    </span>
                                </a>
                            </div>

                            <div id="q-${i}-ans">

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
                $(`#add-option-button-${i}`).on("click", () => { this.addOptions(i) })
                $(`#add-image-button-${i}`).on("click", () => { this.upload_img(i) })
            }

            for (let i = 0; i < parseInt(data["no_of_question"]); i++) {
                var questions = Object.keys(data["questions"])[i]
                var options = data["questions"][questions]["options"]
                var ans = data["questions"][questions]["ans"]

                this.setOptions(i, options, data, ans, questions)
            }

            question_add = true
        }
    }



    addOptions = (qNo) => {
        var op = option[qNo]
        option[qNo] = option[qNo] + 1
        // console.log(option)

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

    submit() {
        this.setState({
            amount: $('#amount').val(),
            subject: $('#subject').val(),
            class: $('#class').val(),
            section: $('#section').val(),
            start_time: $('#start_time').val(),
            quiz_date: $('#date').val(),
            end_time: $('#end_time').val()
        })

        this.prevQuiz()
    }


    prevQuiz() {
        $("#prev-quiz").on("click", () => {
            for (let i = 0; i < this.state.amount; i++) {
                var que = $(`#q-${i}`).val()

                // console.log(que)

                var ans = []

                for (let u = 0; u < option[i]; u++) {
                    var opt = $(`#ans-op-q-${i}-${u}`).val()
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

        // console.log(correct_ans)


        for (var i = 0; i < val; i++) {
            var que = q_keys[i]
            var options = Q_option_list[q_keys[i]]
            var ans = correct_ans[ans_keys[i]]

            Q_and_Ans[que] = {
                "options": options,
                "ans": ans + 1
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
                setTimeout(() => {
                    Swal.fire(
                        "Updated!!!",
                        "Quiz was edited successfully",
                        "success"
                    )
                    window.location.replace(`/prev-quiz?path1=${path1}&path2=${path2}`)
                }, 2000)
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

                        $(`#q-${qNo}`).val(`${downloadURL}`)
                        $(`#q-${qNo}`).attr("disabled", 'disabled');
                    });
                }
            );
        }
    }


    render() {
        return (
            <div className="bg-gradient-to-r from-primary to-accent">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                <NavBar link={this.state.link} />

                <div className="flex justify-center items-center min-h-screen flex-col mt-10" id="questions" >
                    <form
                        className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 ">

                        <h2 className="text-3xl font-medium">Edit Quiz</h2>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="amount">
                                Number of Questions
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                value={this.state.data["no_of_question"]}
                                disabled
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="data">
                                Date of the Quiz
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                defaultValue={this.state.data["quiz_date"]}
                            />
                        </div>
                        <div className="flex flex-row justify-start">
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-600 font-medium" htmlFor="time">
                                    Start Time
                                </label>

                                <input
                                    type="time"
                                    id="start_time"
                                    name="start_time"
                                    className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                    placeholder='start time'
                                    defaultValue={this.state.data["start_time"]}
                                />
                            </div>

                            <div className="pl-5 flex flex-col space-y-2">
                                <label className="text-gray-600 font-medium" htmlFor="time">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    id="end_time"
                                    name="end_time"
                                    className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                    defaultValue={this.state.data["end_time"]}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="class">
                                Select Class
                            </label>
                            <select
                                id="class"
                                name="class"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                defaultValue={this.state.data["class"]}>

                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="section">
                                Select Section
                            </label>
                            <select
                                id="section"
                                name="section"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                defaultValue={this.state.data["section"]}>

                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="subject">
                                Select Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                defaultValue={this.state.data["subject"]}>

                                <option value="English">English</option>
                                <option value="Science">Science</option>
                                <option value="Social Studies">Social Studies</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Assamese">Assamese</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Sanskrit">Sanskrit</option>
                            </select>
                        </div>
                    </form>



                    <div id='question-container' className="w-full pt-5 flex justify-center items-center min-h-screen flex-col">

                    </div>

                    <form className="md:p-8 max-w-[500px] flex rounded-lg w-11/12 mb-4">

                        <a style={{ borderRadius: "10px", textAlign: "center" }} id="prev-quiz" type="submit"
                            className="bg-yellow-600 rounde-md w-full p-2 ml-5 text-white hover:bg-yellow-500"
                            onClick={() => { this.submit() }}>
                            Submit
                        </a>
                    </form>
                </div>

            </div>
        )
    }
}