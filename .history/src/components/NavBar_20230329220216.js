import React from 'react'

export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      id: localStorage.getItem("user-id"),
      name: localStorage.getItem("name")
    }
  }


  render() {
    return (

      <div className="navbar bg-base-100 sticky top-0 z-50" >
        <div className="flex-1">
          <img href="/admin-dashboard" src="https://cdn.discordapp.com/attachments/916242371652509726/1090584639376212048/eyRg7yY.png" className="btn btn-ghost normal-case text-xl" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Name: {`${this.state.name}`}
                </a>
              </li>
              <li><a>ID: {`${this.state.id}`}</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}