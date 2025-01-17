'use client'

import { useState } from 'react'

export default function Home() {
  const [preferences, setPreferences] = useState({
    format: 'three-line',
    batesFormat: '(ABC111 - ABC222)',
    dateFormat: '1/4/25'
  })

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Exhibit Descriptions Preferences</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Format Structure</label>
          <select 
            value={preferences.format}
            onChange={(e) => setPreferences({...preferences, format: e.target.value})}
            className="w-full border p-2 rounded"
          >
            <option value="three-line">Three Lines (Number/Description/Bates)</option>
            <option value="combined">Combined (Description with Bates)</option>
            <option value="two-line">Two Lines (No Bates)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Bates Format</label>
          <select 
            value={preferences.batesFormat}
            onChange={(e) => setPreferences({...preferences, batesFormat: e.target.value})}
            className="w-full border p-2 rounded"
          >
            <option value="none">No Bates numbers in index</option>
            <option value="(ABC111 - ABC222)">(ABC111 - ABC222)</option>
            <option value="(ABC111 to ABC222)">(ABC111 to ABC222)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Date Format</label>
          <select 
            value={preferences.dateFormat}
            onChange={(e) => setPreferences({...preferences, dateFormat: e.target.value})}
            className="w-full border p-2 rounded"
          >
            <option value="1/4/25">1/4/25</option>
            <option value="1/4/2025">1/4/2025</option>
            <option value="01/04/25">01/04/25</option>
          </select>
        </div>

        <button 
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => console.log('Exporting with preferences:', preferences)}
        >
          Export Template
        </button>
      </div>
    </main>
  )
}
