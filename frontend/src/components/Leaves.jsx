import React, { useState } from 'react';

const Leaves = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Leaves List</h1>
          <div className="flex gap-5">
            <i className="fas fa-bell text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-envelope text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
        </div>

       
        <div className="flex space-x-4 mb-4">
          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <input
              type="text"
              placeholder="All"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <input
              type="text"
              placeholder="More Information"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <button
              onClick={() => setFormVisible(true)}
              className="w-full py-2 text-white font-semibold rounded-lg text-sm hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-500"
              style={{
                background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
              }}
            >
              Add New Leave
            </button>
          </div>
        </div>

       
        {formVisible && (
          <div className="mt-6">
            <h2
              className="w-full py-3 text-white font-semibold rounded-lg text-sm text-center"
              style={{
                background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
              }}
            >
              Add New Leave
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">

                <div>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Employee Name"
                    required
                  />
                </div>

                <div>
                  <select
                    id="leaveType"
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>Select Leave Type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                  </select>
                </div>

                <div>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Start Date"
                    required
                  />
                </div>

                <div>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="End Date"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Reason for Leave"
                    required
                  />
                </div>

                

                <div className="col-span-2 text-center mt-6">
                  <button
                    type="submit"
                    className="w-20 py-2 text-gray font-semibold rounded-lg text-sm"
                    style={{
                      background: 'rgba(164, 164, 164, 1)',
                    }}
                  >
                    Save
                  </button>
                </div>

              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaves;
