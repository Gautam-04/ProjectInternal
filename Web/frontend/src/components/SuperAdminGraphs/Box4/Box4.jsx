import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './Box4.css'

const resourceAllocationData = [
  { time: '12 AM', NDRF: 5, Medical: 10, Paramedics: 8, SupplyVehicles: 3 },
  { time: '6 AM', NDRF: 8, Medical: 15, Paramedics: 10, SupplyVehicles: 4 },
  { time: '12 PM', NDRF: 10, Medical: 20, Paramedics: 12, SupplyVehicles: 6 },
  { time: '6 PM', NDRF: 15, Medical: 25, Paramedics: 14, SupplyVehicles: 7 },
  { time: '12 AM', NDRF: 18, Medical: 30, Paramedics: 16, SupplyVehicles: 8 },
];

function Box4() {
  return (
    <div className="chart-container">
      <h1>Resource Allocation Over Time</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={resourceAllocationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="NDRF" stroke="#FF9F40" />
          <Line type="monotone" dataKey="Medical" stroke="#FFB6C1" />
          <Line type="monotone" dataKey="Paramedics" stroke="#36A2EB" />
          <Line type="monotone" dataKey="SupplyVehicles" stroke="#4BC0C0" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Box4