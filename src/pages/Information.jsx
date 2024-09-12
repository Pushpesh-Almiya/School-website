import React, { useState } from 'react';

function Information() {
  const [info, setInfo] = useState([
    {
      date: '2024-09-01',
      content: 'This is the information for the first week of September.',
    },
    {
      date: '2024-08-25',
      content: 'Last week of August information goes here.',
    }
  ]);

  const [newInfo, setNewInfo] = useState('');

  const addInformation = () => {
    if (newInfo.trim() !== '') {
      setInfo([
        ...info,
        { date: new Date().toISOString().split('T')[0], content: newInfo }
      ]);
      setNewInfo(''); // Clear the input
    }
  };

  return (
    <div name="information" className="info-page p-4">
      <h1 className="text-2xl font-bold mb-4">Information</h1>
      {info.map((item, index) => (
        <div key={index} className="info-item mb-4">
          <p className="font-semibold">{item.date}</p>
          <p>{item.content}</p>
        </div>
      ))}

      <div className="new-info mt-8">
        <textarea
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          placeholder="Enter new information..."
          className="border p-2 w-full mb-2"
          rows="4"
        />
        <button onClick={addInformation} className="bg-blue-500 text-white px-4 py-2">
          Add Information
        </button>
      </div>
    </div>
  );
}

export default Information;
