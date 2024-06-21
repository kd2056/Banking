import React, { useState } from 'react';

const BankDetails = () => {
  const [isEditMode, setIsEditMode] = useState(true);
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    bankCity: '',
    branchName: '',
    relationWithAccountHolder: '',
  });
  const [savedDetails, setSavedDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSave = () => {
    setSavedDetails(bankDetails);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="p-4 mt-4 bg-white shadow-md rounded-lg border border-gray-300 w-full max-w-lg mx-auto md:ml-8">
      {isEditMode ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Update Bank Details</h2>
          {Object.keys(bankDetails).map((key) => (
            <div key={key} className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold w-1/3" htmlFor={key}>
                {key.split(/(?=[A-Z])/).join(' ').toUpperCase()}
              </label>
              <input
                id={key}
                name={key}
                type="text"
                value={bankDetails[key]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={key.split(/(?=[A-Z])/).join(' ').toUpperCase()}
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Bank Details</h2>
          {Object.keys(bankDetails).map((key) => (
            <div key={key} className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold w-1/3">
                {key.split(/(?=[A-Z])/).join(' ').toUpperCase()}
              </label>
              <p className={`shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight ${savedDetails[key] ? 'bg-green-200' : 'bg-white'}`}>
                {savedDetails[key] || bankDetails[key]}
              </p>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BankDetails;
