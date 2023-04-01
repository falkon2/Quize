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
            {/* Table body */}
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
                <td className="p-2">
                  <div className="text-center text-sky-500">View</div>
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
                <td className="p-2">
                  <div className="text-center text-sky-500">View</div>
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
                <td className="p-2">
                  <div className="text-center text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#4BC9FF" cx="18" cy="18" r="18" />
                      <path d="M26 14.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C14 19.9 13.4 15 12 15c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z" fill="#FFF" fillRule="nonzero" />
                    </svg>
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
                  <div className="text-center text-red-500 bg-red-200 p-1 rounded-full">220</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#0E2439" cx="18" cy="18" r="18" />
                      <path d="M14.232 12.818V23H11.77V12.818h2.46zM15.772 23V12.818h2.462v4.087h4.012v-4.087h2.456V23h-2.456v-4.092h-4.012V23h-2.461z" fill="#E6ECF4" />
                    </svg>
                    <div className="text-slate-800">Nationialism in Europe (IX-ALL)</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,034</div>
                </td>
                <td className="p-2">
                  <div className="text-center">204</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.9%</div>
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
