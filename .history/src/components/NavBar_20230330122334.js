import React from 'react'
import { Link } from 'react-router-dom'
import Jdenticon from 'react-jdenticon';
export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      id: localStorage.getItem("user-id"),
      name: localStorage.getItem("name")
    }
  }

  handleLogOut = () => {
    localStorage.removeItem('user-id')
    localStorage.removeItem('name')
    sessionStorage.clear();
    window.location.href = '/login'
  }  

  render() {
    return (
      
      <div className="navbar backdrop-blur-sm g-white/30 sticky top-0 z-50" >
      
        <div className="flex-1">
          <Link to={this.props.link}><img src="https://cdn.discordapp.com/attachments/916242371652509726/1090584639376212048/eyRg7yY.png" className="btn btn-ghost normal-case" alt='Quize logo' /></Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Jdenticon value={`${this.state.name}`} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Name: {`${this.state.name}`}
                </a>
              </li>
              <li><a>ID: {`${this.state.id}`}</a></li>
              <li><button onClick={this.handleLogOut}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}