import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../charts/LineChart01';
import { db } from "../../firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../services/Utils';
import Jdenticon from 'react-jdenticon';

var load = false
var percentag_list = [50, 80, 60, 70, 50, 60, 40, 50, 20, 10, 5, 70]// student marks 
// var percentag_list = []


async function getQuiz() {
  var st_id = localStorage.getItem("user-id")

  const docRef = doc(db, "Student", st_id)
  const docSnap = await getDoc(docRef);
  var data = docSnap.data()

  var data = data
  var quiz_id = data.quiz

  if (load === false) {

    for (var i = 0; i < quiz_id.length; i++) {
      var list_ = data[quiz_id[i]]

      try {
        var percentage = list_.percentage
        percentag_list.push(percentage)
      }

      catch (err) { }
    }

    load = true
  }

}

function DashboardCard01() {
  // getQuiz()

  const name = localStorage.getItem('name')

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      
    ],
    datasets: [
      // Indigo line
      {
        data: percentag_list,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <Jdenticon src={name} size={32} alt="Icon 01" />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li style={{ minWidth: "50px" }} >
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Score Card</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Average:</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2"><I>demo</I></div>{/* average student marks */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
