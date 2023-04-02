import React from 'react';
import { db } from '../../firebase/firebaseConfig'
import { getDocs, collection} from "firebase/firestore";
import $ from "jquery"
import Jdenticon from 'react-jdenticon';

function DashboardStudent() {

  const customers = [
    {
      id: '0',
    //   image: Image01,
      name: 'Alex Shatov',
      roll: '30',
      class: 'X-B',
      score: '26',
    },
    {
      id: '1',
      name: 'Philip Harbach',
      roll: '2',
      class: 'X-B',
      score: '$24',
    },
    {
      id: '2',
      name: 'Mirko Fisuk',
      roll: '26',
      class: 'X-B',
      score: '29',
    },
    {
      id: '3',
      name: 'Olga Semklo',
      roll: '23',
      class: 'X-B',
      score: '10',
    },
    {
      id: '4',
      name: 'Burak Long',
      roll: '42',
      class: 'X-B',
      score: '19',
    },
  ];

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
                  <div className="font-semibold text-left">Roll</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Class</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Score</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <Jdenticon value={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.roll}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">{customer.class}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.score}</div>
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