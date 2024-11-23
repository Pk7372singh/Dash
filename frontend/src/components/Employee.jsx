import React, { useState } from 'react';

const Employee = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    phoneNumber: '',
    experience: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
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
          <h1 className="text-2xl font-semibold text-gray-800">Employee List</h1>
          <div className="flex gap-5">
            <i className="fas fa-bell text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-envelope text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
        </div>

        {/* Filter/Search Section */}
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
              Add New Employee
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
              Add New Employee
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">

                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5  border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Department"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-5  border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Experience"
                    required
                  />
                </div>

                <div>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full mt-0 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Employee;
