import React from 'react'
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";
import $ from "jquery"
import Swal from 'sweetalert2';
import "../styles/login.css"
export default class AdminLoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      user: "Teacher"
    }
  }


  login = async () => {
    var user = $("#User option:selected").val()
    var id = $("#id").val()
    var password = $("#password").val()
    var link

    if (user == "Teachers") { link = "/admin-dashboard" }
    if (user == "Student") { link = "/user-dashboard" }

    try {
      const docRef = doc(db, user, id)
      const docSnap = await getDoc(docRef);
      var data = docSnap.data()

      if (data.id == id && data.password == password) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)

            setTimeout(() => { window.location.replace(`${link}`) }, 5000)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })

      }

      else {
        Swal.fire(
          'Wrong Password',
          'Check your password',
          'error'
        )
      }
    }
    catch (err) {
      console.log(err)
      Swal.fire(
        'Wrong ID',
        'Check your ID',
        'error'
      )
    }
  }
  /*
  const data = {
    nam: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  await setDoc(doc(db, "cities", "new-city-id"), data);
  */

  render() {
    return (
                <div className="hero min-h-screen">
  <div id="user" className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-50">Login now!</h1>
      <p className="py-6 text-blue-50">Experience the world of mathematics in a very fun way in our website, quize.It is very good for children and interactive project.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-sm bg-white/30">
      <div className="card-body">
      {/* <select style={{ color: "black", margin: "20px" }} name="User" id="User">
                    <option type="button" value="Teachers">Teacher</option>
                    <option type="button" value="Student">Student</option>
                  </select> */}
                  <label className="label">
                    <span className="label-text text-black">Login Method</span>
                  </label>  
                  <select className="select select-primary w-full max-w-xs backdrop-blur-sm bg-white/40 text-black" name="User" id="User">
                    <option disabled selected>Select Login method</option>
                    <option value="Teachers">Teacher</option>
                    <option value="Student">Student</option>
                  </select>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">ID</span>
          </label>
          <input id='id' type="text" placeholder="id" className="input input-bordered backdrop-blur-sm bg-white/40 text-black text-bold text-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black"  placeholder="Password">Password</span>
          </label>
          <input id="password" type="password" placeholder="password" className="input input-bordered backdrop-blur-sm bg-white/40 text-black" />
          <label className="label">
            <a href="#" id="fog-pass" className="label-text-alt link link-hover text-black hover:text-blue-300 text-bold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={() => { this.login()}}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}