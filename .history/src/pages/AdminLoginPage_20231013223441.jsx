import React from 'react'
import { db } from "../firebase/firebaseConfig"
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import $ from "jquery"
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

var nameList = []

export default class AdminLoginPage extends React.Component {

  constructor() {
    super();

    this.state = {
      user: ""
    }
  }

  async get_names() {
    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      var res = doc.data()

      if (nameList.includes(res.name) === false) {
        if (nameList.length < 5) {
          nameList.push(res.name)
        }
      }
      localStorage.setItem("nameList", nameList)
    })
  }

  componentDidMount() {
    this.get_names()
  }


  login = async () => {
    var user = $("#User option:selected").val()
    var id = $("#id").val()
    var password = $("#password").val()
    var link = ""

    if (user === "Teachers") { link = "/admin-dashboard" }
    if (user === "Student") { link = "/user-dashboard" }

    if (link !== "") {
      try {
        const docRef = doc(db, user, id)
        const docSnap = await getDoc(docRef);
        var data = docSnap.data()

        // console.log(data)

        if (data.id === id && data.password === password) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)

              setTimeout(() => {
                localStorage.setItem("user-id", data.id);
                localStorage.setItem("name", data.name);
                localStorage.setItem("class", data.class);
                localStorage.setItem("pass", data.password);
                localStorage.setItem("quiz", data.quiz)
                localStorage.setItem("subject", data.subject);

                if (user === "Teachers") { localStorage.setItem("role", "Teacher") }
                if (user === "Student") {
                  localStorage.setItem("role", "Student")
                  localStorage.removeItem("nameList")
                }
                window.location.replace(`${link}`)
              }, 3000)
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
    else {
      Swal.fire(
        'Error',
        'Please Select the Login Method',
        'info'
      )
    }
  }

  render() {
    return (
      <div className="hero min-h-screen bg-[cbd5e1]">
        <div id="user" className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Login now!</h1>
            <p className="py-6 text-gray-600">Experience the world of create test taking in a very fun way in our website, quiz. It is an interactive way for children to learn.</p>
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
                  <span className="label-text text-black" placeholder="Password">Password</span>
                </label>
                <input id="password" type="password" placeholder="password" className="input input-bordered backdrop-blur-sm bg-white/40 text-black" />
                <Link to='/ForgetPassword' className="label">
                  <button  id="fog-pass" className="label-text-alt link link-hover text-black hover:text-blue-300 text-bold">Forgot password?</button>
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={() => { this.login() }}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}