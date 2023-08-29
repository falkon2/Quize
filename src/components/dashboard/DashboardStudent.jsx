import React from 'react';
import Jdenticon from 'react-jdenticon';
import { db } from "../../firebase/firebaseConfig"
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import $ from "jquery"

var details = []
var nameList = []
var update = false
var option_selected = "All"

var database_data = null 

class DashboardStudent extends React.Component {

  async getStudent() {
    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    
    database_data = docsSnap
    
    docsSnap.forEach(doc => {
      var res = doc.data()
      this.getStudentData(res.id, res.name, res.class)
    })
  }

  async filter() {
    option_selected = $("#filter").val()
    update = false
    details = []
    
    await database_data.forEach(async doc => {
      var res = doc.data()
      var st_id = res.id
      var name = res.name
      var class_ = res.class

      const docRef = doc(db, "Student", st_id)
      const docSnap = await getDoc(docRef);
      var data = docSnap.data()

      this.setState({ data: data, quiz_id: data.quiz })

      var percentage_list = []
      var total = 0

      for (var i in data.quiz) {
        var list_ = data[data.quiz[i]]

        if (list_ !== undefined) {
          total += list_.percentage
          percentage_list.push(list_.percentage)
        }
      }

      if (nameList.includes(name) === false) {
        nameList.push(name)
      
        if(class_ !== "undefined"){
          if(class_.includes(option_selected) || option_selected === "All")
            details.push({
              name: name,
              class: class_,
              id: st_id,
              percent: total / percentage_list.length
            })
          }
        }
    })
  }


  
  async getStudentData(st_id, name, class_) {

    const docRef = doc(db, "Student", st_id)
    const docSnap = await getDoc(docRef);
    var data = docSnap.data()

    this.setState({ data: data, quiz_id: data.quiz })

    var percentage_list = []
    var total = 0

    for (var i in data.quiz) {
      var list_ = data[data.quiz[i]]

      if (list_ !== undefined) {
        total += list_.percentage
        percentage_list.push(list_.percentage)
      }
    }

    // console.clear()

    if (nameList.includes(name) === false) {
      nameList.push(name)
      
      if(class_ !== "undefined"){
        if(class_.includes(option_selected) || option_selected === "All")
        details.push({
          name: name,
          class: class_,
          id: st_id,
          percent: total / percentage_list.length
        })
      }

    }

    update = true
  }

  componentDidMount() {
    this.getStudent()
  }

  render() {
    if (update !== false) {
      return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <header className="px-5 py-4 border-b border-slate-100 flex justify-between">
            <h2 className="font-semibold text-slate-800">Student</h2>
            
            <div style={{
            "minWidth": "400px",
            "display": "flex",
            "justifyContent": "space-evenly",
            "alignItems": 'center'
          }}  hidden >

            <label style={{ marginLeft: "-10px" }} className="text-gray-600 font-medium">
              Class:  {option_selected}
            </label>

            <label className="text-gray-600 font-medium" htmlFor="filter">
              Section:
            </label>

            <select
              id="filter"
              name="filter"
              className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            >
              
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>

            <button style={{ borderRadius: "10px" }} type="submit" className="bg-green-600 rounde-md p-3 text-white hover:bg-yellow-500"
              onClick={()=>{this.filter() }}>
              Filter
            </button>
          </div>

            
          </header>
          <div className="p-3">

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Class</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Average %</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold cursor-pointer text-center">View</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-100">
                  {
                    details.map(student => {
                      return (
                        <tr key={student.id}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                <Jdenticon value={student.name} />
                              </div>
                              <div className="font-medium text-slate-800">{student.name}</div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{student.class}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium ">{student.percent} %</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-m font-semibold cursor-pointer text-center text-sky-500">
                              <button onClick={(e)=>{window.location.href =`/individual-results?id=${student.id}`;}}>View</button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>


            </div>
          </div>

        </div>
      );
    }
  }
}
export default DashboardStudent;
