'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface ChartProps {
  data: { name: string; value: number }[]
  xAxis?: string
  yAxis?: string
  className?: string
}

export function Chart({
  data,
  xAxis = 'name',
  yAxis = 'value',
  className,
}: ChartProps) {
  return (
    <Card className={cn('w-full h-full', className)}>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={xAxis}
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              wrapperStyle={{
                borderRadius: '0.375rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
              contentStyle={{
                backgroundColor: 'white',
                borderColor: '#e5e7eb',
              }}
              labelStyle={{ color: '#4b5563', fontWeight: 500 }}
            />
            <Bar dataKey={yAxis} fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
