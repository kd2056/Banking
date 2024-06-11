//This file will put together the navbar.js bankdetail.js and sidebar.js to make the project look like as it was intended to look
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BankDetails from './BankDetails';
import Navbar from './Navbar';
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Bank Details');

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
         <Sidebar setActiveSection={setActiveSection} />         {/*prop given to sidebar.js for changing active section */}
        <div className="flex-1 p-4 overflow-auto">
          {activeSection === 'My Dashboard' && <div>Welcome to your dashboard</div>}
          {activeSection === 'TOTM links' && <div>Here are your TOTM links</div>}
          {activeSection === 'Daily Summary' && <div>Your daily summary</div>}
          {activeSection === 'Bank Details' && <BankDetails />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
