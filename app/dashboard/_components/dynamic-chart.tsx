'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const clickData = [
  { day: 'Mån', clicks: 20 },
  { day: 'Tis', clicks: 35 },
  { day: 'Ons', clicks: 50 },
  { day: 'Tors', clicks: 45 },
  { day: 'Fre', clicks: 65 },
  { day: 'Lör', clicks: 80 },
  { day: 'Sön', clicks: 60 },
]

export default function DynamicChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={clickData}>
          <XAxis dataKey="day" stroke="#888" fontSize={12} />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#ec4899"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
