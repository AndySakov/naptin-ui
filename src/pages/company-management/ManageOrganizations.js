import { EnvelopeSimple, Funnel, Table, DotsThree } from "phosphor-react";
import React from "react";
import DataTable from "../../components/DataTable";
import PageBuilder from "../../components/layout/PageBuilder";
import SearchBar from "../../components/SearchBar";

const ManageOrganizations = () => {
  const demoData = [
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    {
      companyName: "Jamiu Saleh",
      type: "-",
      location: "Electrical House Wiring Installation",
      email: "maigari264@gmail.com",
      phone: "08064792657",
      active: (
        <button className="border border-slate-300 rounded-lg p-2 shadow-sm focus:border-gray-500 focus:border-2 hover:border-primary-500 transitions-all">
          <DotsThree weight="bold" className="w-5 h-5" />
        </button>
      ),
    },
    
  ];
  
  return (
    <PageBuilder
      name="List of Organizations"
      extras={
        <div className="flex flex-row w-full h-full py-4">
          <SearchBar placeholder="Search by name, email or phone..." />
          <button type="submit" className="btn btn-secondary mx-0">
            Add New Organization
          </button>
        </div>
      }
    >
      <div className="flex h-16 w-full mb-2 items-center justify-between">
        <button className="flex justify-between items-center px-5 m-0 btn btn-white border border-x-slate-100 border-t-slate-50 border-r-slate-50 shadow-sm shadow-slate-200">
          <Funnel weight="bold" className="w-5 h-5" />
          <span className="ml-1">Filters</span>
        </button>
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
        headers={[
          "Company Name",
          "Type",
          "Location",
          "Email Address",
          "Phone",
          "Active",
        ]}
        data={demoData}
      />
    </PageBuilder>
  );
};

export default ManageOrganizations;
