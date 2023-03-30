import React from 'react';
import { HiAcademicCap, HiDocumentSearch } from "react-icons/hi";
import { CgDatabase } from "react-icons/cg"
import { MdLeaderboard } from "react-icons/md"
import { IoSettings } from "react-icons/io5"
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component {

//To add functionality on set class for each component

render() {
    return(
            <aside class="hidden sm:flex sm:flex-col ">
            
            <div class="flex-grow flex flex-col justify-between text-gray-500 bg-neutral  ">
              <nav class="flex flex-col mx-3 my-6 space-y-4">
                <Link to="/user-dashboard"  class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Students">
                  <span  class="sr-only">Folders</span>
                  <HiAcademicCap  title='Student' size={35} />
                </Link>
                <Link to="/admin-dashboard" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 text-neutral bg-primary rounded-lg" data-tip="Dashboard">
                  <span class="sr-only">Dashboard</span>
                  <CgDatabase title='dashboard' size={35} />
                </Link>
                <a href="#" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Leaderboard">
                  <span class="sr-only">Messages</span>
                  <MdLeaderboard title='LeaderBoard' size={35} />
                </a>
                <Link to="/admin-dashboard/test-view" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Tests">
                  <span class="sr-only">Documents</span>
                  <HiDocumentSearch title='Tests' size={35} />
                </Link>
              </nav>
              <div class="tooltip tooltip-primary tooltip-right flex my-10 items-center justify-center h-20 w-20 border-t border-gray-700 " data-tip="Settings">
                <div className="dropdown dropdown-right dropdown-end">
                <label tabIndex={0} className="btn m-1"><IoSettings size={35} /></label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <select className="select select-primary w-full max-w-xs">
                      <option>What is the best TV show?</option>
                      <option>Game of Thrones</option>
                      <option>Lost</option>
                      <option>Breaking Bad</option>
                      <option>Walking Dead</option>
                  </select>
                </ul>
            </div>
              </div>
            </div>
            </aside>
        )
    }
}