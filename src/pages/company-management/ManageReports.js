import { EnvelopeSimple, Table, FilePdf } from "phosphor-react";
import React from "react";
import DataTable from "../../components/DataTable";
import PageBuilder from "../../components/layout/PageBuilder";

const ManageReports = () => {
  const demoData = [
    {
      title: "Detailed Payment Report",
      description:
        "List of all  Applicants/Trainees sponsored by an organization per year",
      pdfReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <FilePdf weight="bold" className="w-4 h-4" />
          <span className="ml-1">PDF</span>
        </button>
      ),
      excelReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <Table weight="bold" className="w-4 h-4" />
          <span className="ml-1">Excel</span>
        </button>
      ),
    },
    {
      title: "Detailed Payment Report",
      description:
        "List of all  Applicants/Trainees sponsored by an organization per year",
      pdfReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <FilePdf weight="bold" className="w-4 h-4" />
          <span className="ml-1">PDF</span>
        </button>
      ),
      excelReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <Table weight="bold" className="w-4 h-4" />
          <span className="ml-1">Excel</span>
        </button>
      ),
    },
    {
      title: "Detailed Payment Report",
      description:
        "List of all  Applicants/Trainees sponsored by an organization per year",
      pdfReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <FilePdf weight="bold" className="w-4 h-4" />
          <span className="ml-1">PDF</span>
        </button>
      ),
      excelReport: (
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <Table weight="bold" className="w-4 h-4" />
          <span className="ml-1">Excel</span>
        </button>
      ),
    },
  ];

  return (
    <PageBuilder name="Available Company Reports">
      <div className="flex h-16 w-full mb-2 items-center justify-between">
        <div className="flex">
          <div class="w-64">
            <div class="mt-1 relative">
              <button
                type="button"
                class="relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <span class="flex items-center">
                  <span class="ml-3 block truncate">John Jackson</span>
                </span>
                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
              <div class="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
                <ul
                  tabindex="-1"
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-item-3"
                  class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  <li
                    id="listbox-item-0"
                    role="option"
                    class="text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9"
                  >
                    <div class="flex items-center">
                      <span class="ml-3 block font-normal truncate">
                        Mick Poulaz
                      </span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </li>
                  <li
                    id="listbox-item-1"
                    role="option"
                    class="text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white relative py-2 pl-3 pr-9"
                  >
                    <div class="flex items-center">
                      <span class="ml-3 block font-normal truncate">
                        Julien Schiano
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-secondary mx-0">
            Find Reports
          </button>
        </div>
        <div className="btn-group">
          <button className="btn btn-white !border !border-slate-300 shadow-sm rounded-l-md rounded-r-none !border-r-[0.5px] outline-0 flex items-center justify-between">
            <Table weight="bold" className="w-4 h-4" />
            <span className="ml-1">Export to Excel</span>
          </button>
          <button className="btn btn-white !border !border-slate-300 shadow-sm rounded-l-none rounded-r-md !border-l-[0.5px] outline-0 flex items-center justify-between">
            <EnvelopeSimple weight="bold" className="w-4 h-4" />
            <span className="ml-1">Export Messaging List</span>
          </button>
        </div>
      </div>
      <DataTable
        headers={["Report Title", "Description", "PDF Report", "Excel Report"]}
        data={demoData}
      />
    </PageBuilder>
  );
};

export default ManageReports;
