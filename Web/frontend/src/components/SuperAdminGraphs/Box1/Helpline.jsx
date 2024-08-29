import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './helpLine.css'


const emergencyCallsData = [
  { hour: '1 AM', SOS: 10, Helpline: 5 },
  { hour: '2 AM', SOS: 15, Helpline: 7 },
  { hour: '3 AM', SOS: 5, Helpline: 3 },
  { hour: '4 AM', SOS: 20, Helpline: 12 },
  { hour: '5 AM', SOS: 25, Helpline: 8 },
  { hour: '6 AM', SOS: 18, Helpline: 10 },
  { hour: '7 AM', SOS: 12, Helpline: 6 },
  { hour: '8 AM', SOS: 22, Helpline: 11 },
  { hour: '9 AM', SOS: 30, Helpline: 15 },
  { hour: '10 AM', SOS: 27, Helpline: 14 },
  { hour: '11 AM', SOS: 35, Helpline: 18 },
  { hour: '12 PM', SOS: 40, Helpline: 20 },
];

function Helpline() {
  return (
    <div className="barChartBox">
      <h1>Emergency Calls per Hour</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={emergencyCallsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="SOS" fill="#FFCE56" />
          <Bar dataKey="Helpline" fill="#4BC0C0" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Helpline