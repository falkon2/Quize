//QuizFormPage.js: Page for creating a new quiz form for the admin/teacher.

import React from 'react'
import NavBar from '../components/NavBar'


export default class QuizDetails extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="justify-center flex items-center min-h-screen ">
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
                            <label className="text-gray-600 font-medium" htmlFor="class">
                                Select Class
                            </label>
                            <select
                                id="class"
                                name="class"
                                className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300">

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
                                <option value="Assamese">Assamese</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Sanskrit">Sanskrit</option>
                            </select>
                        </div>

                        <button style={{borderRadius: "10px"}} type="submit" className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500">
                            Start
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}