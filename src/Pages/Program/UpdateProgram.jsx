import React, { useState } from 'react';

const UpdateProgram = () => {
    const [currentProgramName, setCurrentProgramName] = useState('');
    const [newProgramName, setNewProgramName] = useState('');

    const handleUpdateProgram = () => {
        // Add your logic to handle updating the program
        console.log('Program updated from:', currentProgramName, 'to:', newProgramName);
        // Clear the input fields after updating
        setCurrentProgramName('');
        setNewProgramName('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-ternary">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Program</h2>
                <div className="mb-4">
                    <label htmlFor="currentProgramName" className="block text-sm font-medium text-gray-700">Current Program Name</label>
                    <input
                        type="text"
                        id="currentProgramName"
                        value={currentProgramName}
                        onChange={(e) => setCurrentProgramName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newProgramName" className="block text-sm font-medium text-gray-700">New Program Name</label>
                    <input
                        type="text"
                        id="newProgramName"
                        value={newProgramName}
                        onChange={(e) => setNewProgramName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    onClick={handleUpdateProgram}
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                >
                    Update Program
                </button>
            </div>
        </div>
    );
};

export default UpdateProgram;
