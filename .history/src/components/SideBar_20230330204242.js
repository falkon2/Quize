import React from 'react';
import { HiAcademicCap, HiDocumentSearch } from "react-icons/hi";
import { CgDatabase } from "react-icons/cg"
import { MdLeaderboard } from "react-icons/md"
import { IoSettings } from "react-icons/io5"
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';

export default function SideBar() {

  const themeValues = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

  useEffect(() => {
    themeChange(false)
  })

  return(
    <aside class="hidden sm:flex sm:flex-col bg-neutral ">
    
    <div class="flex-grow flex flex-col justify-between text-gray-500   ">
      <nav class="flex flex-col mx-3 my-6 space-y-4">
        <Link to="/user-dashboard"  class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-white hover:bg-primary focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Students">
          <span  class="sr-only">Folders</span>
          <HiAcademicCap  title='Student' size={35} />
        </Link>
        <Link to="/admin-dashboard" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 text-neutral bg-primary rounded-lg" data-tip="Dashboard">
          <span class="sr-only">Dashboard</span>
          <CgDatabase title='dashboard' size={35} />
        </Link>
        <a href="#" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-white hover:bg-primary focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Leaderboard">
          <span class="sr-only">Messages</span>
          <MdLeaderboard title='LeaderBoard' size={35} />
        </a>
        <Link to="/admin-dashboard/test-view" class="tooltip tooltip-primary tooltip-right inline-flex items-center justify-center py-3 hover:text-white hover:bg-primary focus:text-gray-400 focus:bg-gray-700 rounded-lg" data-tip="Tests">
          <span class="sr-only">Documents</span>
          <HiDocumentSearch title='Tests' size={35} />
        </Link>
        <div class="tooltip tooltip-primary tooltip-right flex my-[150%] items-center justify-center h-20 w-20 border-t border-gray-700 " data-tip="Settings">
        <div className="dropdown dropdown-right dropdown-end">
        <label tabIndex={0} className="btn m-1"><IoSettings size={35} /></label>
          <ul tabIndex={0} className="dropdown-content menu py-3  shadow bg-base-100 rounded-box w-52">
            <select className="select select-primary w-full max-w-xs" data-choose-theme>
              <option className="text-primary" option value="">Default</option>
                {themeValues.map((value) => (
                  <option className='text-primary hover:bg-neutral' key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
                ) )}
            </select>
        </ul>
    </div>
      </div>
      </nav>

    </div>
    </aside>
)
}