import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BankDetails from './BankDetails';
import Navbar from './Navbar';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Bank Details');
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-1 mt-0">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={collapsed}
          handleCollapseToggle={handleCollapseToggle}
        />
        <main className={`flex-grow p-4 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
          <div className="w-full max-w-2xl mx-auto ml-8">  {/* Adjust ml-8 to shift to the right */}
            {activeSection === 'Bank Details' && <BankDetails />}
            {activeSection !== 'Bank Details' && (
              <div className="p-4 text-gray-500">Section not implemented.</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
