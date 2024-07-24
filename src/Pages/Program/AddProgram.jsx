import React, { useState } from 'react';

const AddProgram = () => {
    const [programName, setProgramName] = useState('');

    const handleAddProgram = () => {
        // Add your logic to handle adding the program
        console.log('Program added:', programName);
        // Clear the input field after adding
        setProgramName('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Program</h2>
                <div className="mb-4">
                    <label htmlFor="programName" className="block text-sm font-medium text-gray-700">Program Name</label>
                    <input
                        type="text"
                        id="programName"
                        value={programName}
                        onChange={(e) => setProgramName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    onClick={handleAddProgram}
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                >
                    Add Program
                </button>
            </div>
        </div>
    );
};

export default AddProgram;
