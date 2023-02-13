import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users/Users";
import EditUser from "../Pages/Users/EditUser";
import AddNewUser from "../Pages/Users/AddNewUser";
import CustomerList from "../Pages/MasterLists/CustomerList";
import SalesmenList from "../Pages/MasterLists/SalesmenList";
import ServicemenList from "../Pages/MasterLists/ServicemenList";
import Contracts from "../Pages/Contracts/Contracts";
import NewContract from "../Pages/Contracts/NewContract";
import NewProject from "../Pages/Contracts/NewProject";
import MaterialPicking from "../Pages/Inventory/MaterialPicking";
import InvoiceList from "../Pages/Invoice/InvoiceList";
import AddService from "../Pages/AddService/AddService";
import NotFound from "../Pages/NotFound";

function Paths() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<Users />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/addnewuser" element={<AddNewUser />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/salesmenlist" element={<SalesmenList />} />
        <Route path="/servicemenlist" element={<ServicemenList />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/newcontract" element={<NewContract />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/invoicelist" element={<InvoiceList />} />
        <Route path="/materialpicking" element={<MaterialPicking />} />
        <Route path="/addservice" element={<AddService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Paths;
