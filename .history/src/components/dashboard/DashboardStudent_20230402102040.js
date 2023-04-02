import React from 'react';

function DashboardStudent() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">TESTS</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Test</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Created at</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Till</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">View</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}{/* All Tests get mapped here  */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <div className="flex items-center">
                    <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/office/40/null/checked--v1.png" width="36" height="36" viewBox="0 0 36 36" />
                    <div className="text-slate-800">Polynomials (X-A)</div>
                  </div>
                    <div className="text-slate-800">Algebra (IX-B)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center "> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>
                </td>
                <td onClick={()=>{window.location.replace("/student-result")}} className="p-2">
                  <div className="text-center cursor-pointer rounded-full hover:bg-sky-200 text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/office/40/null/checked--v1.png" width="36" height="36" viewBox="0 0 36 36" />
                    <div className="text-slate-800">Polynomials (X-A)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center "> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>
                </td>
                <td onClick={()=>{window.location.replace("/student-result")}} className="p-2">
                  <div className="text-center cursor-pointer rounded-full hover:bg-sky-200 text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <div className="flex items-center">
                    <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/office/40/null/checked--v1.png" width="36" height="36" viewBox="0 0 36 36" />
                    <div className="text-slate-800">Polynomials (X-A)</div>
                  </div>
                    <div className="text-slate-800">Nazism (IX-ALL)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500 bg-green-200 p-1 rounded-full">Active</div>
                </td>
                <td onClick={()=>{window.location.replace("/student-result")}} className="p-2">
                  <div className="text-center cursor-pointer rounded-full hover:bg-sky-200 text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <div className="flex items-center">
                    <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/fluency/48/null/cancel.png" width="36" height="36" viewBox="0 0 36 36" />
                    <div className="text-slate-800">Polynomials (X-A)</div>
                  </div>
                    <div className="text-slate-800">Geometry (VII-ALL)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center "> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500 bg-red-200 p-1 rounded-full">Close</div>
                </td>
                <td onClick={()=>{window.location.replace("/student-result")}} className="p-2">
                  <div className="text-center cursor-pointer rounded-full hover:bg-sky-200 text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/fluency/48/null/cancel.png" width="36" height="36" viewBox="0 0 36 36" />
                    
                    <div className="text-slate-800">Nationialism in Europe (IX-ALL)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center "> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500 bg-red-200 p-1 rounded-full">Close</div>
                </td>
                <td onClick={()=>{window.location.replace("/student-result")}} className="p-2">
                  <div className="text-center cursor-pointer hover:bg-sky-200 rounded-full text-sky-500">View</div>
                </td>
              </tr>
                            {/* Row */}
                            {/* Row */}
                            <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <div className="flex items-center">
                    <img className="shrink-0 mr-2 sm:mr-3" src="https://img.icons8.com/fluency/48/null/cancel.png" width="36" height="36" viewBox="0 0 36 36" />
                    <div className="text-slate-800">Polynomials (X-A)</div>
                  </div>
                    <div className="text-slate-800">Geometry (VII-ALL)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center "> 10:00AM 29-03-23</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500 bg-red-200 p-1 rounded-full">Close</div>
                </td>
                <td className="p-2">
                  <div className="text-center cursor-pointer rounded-full hover:bg-sky-200 text-sky-500">View</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardStudent;
