import React from 'react'
import App from './App';
import { Route, Routes } from "react-router-dom";
import EmptyPage from './pages/EmptyPage';
import PageWrapper from './components/layout/PageWrapper';
import LinkTree from './components/layout/LinkTree';
import Step from './components/layout/Step';
import ManageOrganizations from './pages/company-management/ManageOrganizations';
import ManageReports from './pages/company-management/ManageReports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LinkTree />} />
        <Route path="dashboard" element={<PageWrapper />}>
          <Route index element={<EmptyPage />} />
          <Route path="manage" element={<Step />}>
            <Route path="organizations" element={<ManageOrganizations />} />
            <Route path="reports" element={<ManageReports />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes