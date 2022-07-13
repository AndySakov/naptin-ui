import React from "react";

const DataTable = ({
  headers = [],
  data = [],
  serials = true,
}) => {
  return (
    <div className="flex w-full border border-slate-300 shadow-sm rounded-lg max-h-[40rem] overflow-y-scroll">
      <table className="table-auto w-full max-h-[40rem] overflow-y-scroll">
        <thead className="bg-white sticky top-0 shadow-sm shadow-primary-200 z-10">
          <tr>
            {serials ? (
              <th scope="col" className="table-col-head">
                S/N
              </th>
            ) : (
              <></>
            )}
            {headers.map((header, index) => (
              <th scope="col" className="table-col-head" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-y">
              {serials ? (
                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                  {index + 1}
                </td>
              ) : (
                <></>
              )}
              {Object.keys(row) !== null ? (
                Object.keys(row).map((cell, index) => (
                  <td className="table-col-body" key={index}>
                    {row[cell]}
                  </td>
                ))
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
