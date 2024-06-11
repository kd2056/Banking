import React, { useState } from 'react';
//importing buttons from material ui 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GridViewIcon from '@mui/icons-material/GridView';
import LinkIcon from '@mui/icons-material/Link';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Sidebar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false); //initially sidebar is closed

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-12'} bg-gray-800 text-white h-full transition-width duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 focus:outline-none"
      >
        {isOpen ? <ArrowBackIcon/> : <ArrowForwardIcon/>}
      </button>
      {/* //Sidebar will appear only when ArrowForwardIcon is clicked */}
      {isOpen && (
  <nav className="mt-4">
    <a href="#" onClick={() => setActiveSection('My Dashboard')} className="block py-2 px-4 hover:bg-gray-700"><GridViewIcon/> My Dashboard</a>
    <a href="#" onClick={() => setActiveSection('TOTM links')} className="block py-2 px-4 hover:bg-gray-700"><LinkIcon/> TOTM links</a>
    <a href="#" onClick={() => setActiveSection('Daily Summary')} className="block py-2 px-4 hover:bg-gray-700"><SummarizeIcon/> Daily Summary</a>
    <a href="#" onClick={() => setActiveSection('Bank Details')} className="block py-2 px-4 hover:bg-gray-700"><AccountBalanceIcon/> Bank Details</a>
  </nav>
)}

    </div>
  );
};

export default Sidebar;
