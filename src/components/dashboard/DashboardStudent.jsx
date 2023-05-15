import React from 'react';
import Jdenticon from 'react-jdenticon';
import { db } from "../../firebase/firebaseConfig"
import { getDoc, doc, collection, getDocs } from "firebase/firestore";


var details = []
var nameList = []
var update = false

class DashboardStudent extends React.Component {

  async getStudent() {
    const colRef = collection(db, "Student");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      var res = doc.data()

      this.getStudentData(res.id, res.name, res.class)
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

      details.push({
        name: name,
        class: class_,
        id: st_id,
        percent: total / percentage_list.length
      })

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
          <header className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Student</h2>
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
                      <div className="font-semibold text-center">View</div>
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
                            <div className="text-m font-semibold text-center text-sky-500">
                              <button>View</button>
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