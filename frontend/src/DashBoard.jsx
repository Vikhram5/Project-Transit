import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-blue-900">MTC Bus Transit Analysis Dashboard</h1>
      <div className="max-w-xl text-center">
        <p className="text-xl mb-6">Welcome to the MTC Bus Transit Analysis website. Here's what you can do:</p>
        <ul className="list-none text-xl">
          <li className="mb-4 text-gray-800">Analyze Bus Count data.</li>
          <li className="mb-4 text-gray-800">Analyze Passenger Count data.</li>
          <li className="mb-4 text-gray-800">Conduct Revenue Analysis.</li>
          <li className="mb-4 text-gray-800">View Loading Profiles.</li>
          <li className="mb-4 text-gray-800">Access OD Matrix.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
