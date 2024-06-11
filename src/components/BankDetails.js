import React, { useState } from 'react';

const BankDetails = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [details, setDetails] = useState({
    accountHolderName: '',
    accountNumber: '',
    ifsc: '',
    bankName: '',
    bankCity: '',
    branchName: '',
    relationWithAccountHolder: ''
  });
  const handleChange = (e) => {                //called when user changes value in input field
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = () => {                  //called when user clicks save button and sets isEditing false which will take user to view screen
    setIsEditing(false);
  };

  const handleEdit = () => {                  //called when user clicks edit button
    setIsEditing(true);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      {isEditing ? (
        <div>
          <h2 className="text-2xl mb-4">Edit Bank Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Account Holder Name</label>
            <input
              type="text"
              name="accountHolderName"
              value={details.accountHolderName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={details.accountNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">IFSC Code</label>
            <input
              type="text"
              name="ifsc"
              value={details.ifsc}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={details.bankName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bank City</label>
            <input
              type="text"
              name="bankCity"
              value={details.bankCity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Branch Name</label>
            <input
              type="text"
              name="branchName"
              value={details.branchName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Relation with Account Holder</label>
            <input
              type="text"
              name="relationWithAccountHolder"
              value={details.relationWithAccountHolder}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        //View Screen
        <div>
          <h2 className="text-2xl mb-4">Bank Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Account Holder Name:</label>
            <div className="bg-green-200 p-2 rounded">{details.accountHolderName}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Account Number</label>
            <div className="bg-green-200 p-2 rounded">{details.accountNumber}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">IFSC Code</label>
            <div className="bg-green-200 p-2 rounded">{details.ifsc}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bank Name</label>
            <div className="bg-green-200 p-2 rounded">{details.bankName}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bank City</label>
            <div className="bg-green-200 p-2 rounded">{details.bankCity}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Branch Name</label>
            <div className="bg-green-200 p-2 rounded">{details.branchName}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Relation with Account Holder:</label>
            <div className="bg-green-200 p-2 rounded">{details.relationWithAccountHolder}</div>
          </div>
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default BankDetails;
