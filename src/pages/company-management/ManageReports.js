import { EnvelopeSimple, Table, FilePdf } from "phosphor-react";
import React from "react";
import DataTable from "../../components/DataTable";
import PageBuilder from "../../components/layout/PageBuilder";
import Select from "react-select"

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

  const options = ["Demo 1", "Demo 2", "Demo 3"].map((item) => ({value: item, label: item}))

  return (
    <PageBuilder name="Available Company Reports">
      <div className="flex h-16 w-full mb-2 items-center justify-between">
        <form className="flex">
          <Select
            options={options}
            className="flex items-center justify-center min-w-[26rem] mr-2"
            classNamePrefix="select"
            placeholder="Select a Company"
          />
          <button type="submit" className="btn btn-secondary mx-0">
            Find Reports
          </button>
        </form>
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
