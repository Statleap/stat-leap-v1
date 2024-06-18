import React, { useState } from 'react';

const Modal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="rounded-3xl shadow-2xl bg-white p-8 text-center sm:p-12">
        <p className="text-lg text-gray-500">{message}</p>
        <button
          className="mt-4 inline-block w-[200px] rounded-full bg-gray-600 py-2 text-sm font-bold text-white shadow-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Support = () => {
  const [showModal, setShowModal] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-[90px] max-w-[1240px] mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-4 text-[#25d366]">Support</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Here to assist you with your queries and issues</p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
      <div className='text-center'>
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#25d366]">Student Support Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Registered Email ID</label>
              <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 bg-blue-50 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700 ">Issue Type</label>
              <select id="issue-type" className="mt-1 block w-full p-2 border border-gray-300 bg-blue-50 rounded-md" required>
                <option value="">Select an issue type</option>
                <option value="credential">Credentials not received</option>
                <option value="app-not-working">App is not working</option>
                <option value="wrong-data-file">Wrong Data file</option>
                <option value="wrong-csv-file">Wrong CSV file</option>
                <option value="general">General</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" rows="4" className="mt-1 block w-full p-2 border border-gray-300 bg-blue-50 rounded-md" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-bold">Submit</button>
          </form>
        </div> */}

        <div className="bg-white rounded-lg ">
          {/* <h2 className="text-2xl font-semibold mb-4 text-[#25d366]">Need Additional Help?</h2> */}
          <h2 className='font-semibold text-[#25d366]  text-xl'> Contact Us</h2>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p className="mb-6">📧 text@example.com</p>
          <h3 className="text-xl font-semibold mb-2 text-[#25d366]">Support Hours</h3>
          <p className="mb-2"><strong>Weekdays (including Saturdays)</strong></p>
          <p className="ml-4">Phone Support – 9:30 am till 8:00 pm</p>
          <p className="ml-4 mb-4">Email Support - 9:30 am till 8:00 pm</p>
          <p className="mb-2"><strong>Sundays & Public Holidays</strong></p>
          <p className="ml-4">Email Support – 9:30 am till 8:00 pm</p>
        </div>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} message="Form has been submitted and it will be resolved within 24 hours." />
    </div>
  );
};

export default Support;
