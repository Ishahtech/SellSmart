import React from 'react';
import { FaUsers, FaCartShopping, FaSitemap, FaWallet } from 'react-icons/fa';

const Content = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
          <FaUsers className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-2xl font-bold">8,430</h3>
            <span className="text-gray-600">New Users</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
          <FaCartShopping className="text-green-500 text-2xl" />
          <div>
            <h3 className="text-2xl font-bold">220,400</h3>
            <span className="text-gray-600">Total Orders</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
          <FaSitemap className="text-yellow-500 text-2xl" />
          <div>
            <h3 className="text-2xl font-bold">315,000</h3>
            <span className="text-gray-600">Products Sold</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
          <FaWallet className="text-red-500 text-2xl" />
          <div>
            <h3 className="text-2xl font-bold">$430.43</h3>
            <span className="text-gray-600">This Month</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Titles</th>
              <th className="text-left">Status</th>
              <th className="text-left">Role</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 flex items-center">
                  <img src="images/user.png" alt="User" className="h-10 w-10 rounded-full mr-4"/>
                  <div>
                    <h5 className="font-semibold">John Doe</h5>
                    <p className="text-gray-600">johndoe@example.com</p>
                  </div>
                </td>
                <td className="py-4">
                  <h5 className="font-semibold">Software Engineer</h5>
                  <p className="text-gray-600">Web dev</p>
                </td>
                <td className="py-4">
                  <p className="text-green-500">Active</p>
                </td>
                <td className="py-4">
                  <p>Owner</p>
                </td>
                <td className="py-4">
                  <a href="#" className="text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Content;
