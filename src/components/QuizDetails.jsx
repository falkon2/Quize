//QuizFormPage.js: Page for creating a new quiz form for the admin/teacher.

import React from 'react'
import NavBar from './NavBar'


export default class QuizDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            link: "/admin-dashboard"
        }
    }

    render() {
        return (
            <div>
                <NavBar link={this.state.link} />
                <div className="justify-center bg-[cbd5e1] flex items-center min-h-screen ">
                    <form
                        className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 "
                    >
                        <h2 className="text-3xl font-medium">Setup Quiz</h2>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="amount">
                                Number of Questions
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                min={5}
                                max={50}
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
                                />
                            </div>

                            <div className="pl-5 flex flex-col space-y-2">
                                <label className="text-gray-600 font-medium" htmlFor="time">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    id="end_amount"
                                    name="end_time"
                                    className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="Ttype">
                                Test Type
                            </label>
                            <select
                                id="Ttype"
                                name="Ttype"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300">

                                <option value="Class Test">Class Test</option>
                                <option value="Minor Test">Minor Test</option>
                                <option value="Major Test">Major Test</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="class">
                                Select Class
                            </label>
                            <select
                                id="class"
                                name="class"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300">

                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-600 font-medium" htmlFor="section">
                                Select Section
                            </label>
                            <select
                                id="section"
                                name="section"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300">

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
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300">

                                <option value="English">English</option>
                                <option value="Science">Science</option>
                                <option value="Social Studies">Social Studies</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                
                            </select>
                        </div>

                        <button style={{ borderRadius: "10px" }} type="submit" className="bg-yellow-600 cursor-pointer rounded-md w-full p-2 text-white hover:bg-yellow-500">
                            Start
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}