'use client';

import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trophy, ClipboardList, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default function Dashboard() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [questionsSolved, setQuestionsSolved] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);

  const percentileData = [{ name: 'Your Score', value: percentile, fill: '#6366F1' }];

  const comparisonData = [
    { name: '10%', value: 10 },
    { name: '30%', value: percentile },
    { name: '50%', value: 50 },
    { name: '70%', value: 70 },
    { name: '90%', value: 90 },
    { name: '100%', value: 100 },
  ];
  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="space-y-6">
          {/* Header */}
          <Card className="shadow-md rounded-lg">
            <CardContent className="flex justify-between items-center p-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Hyper Text Markup Language</h2>
                <p className="text-gray-500 text-sm">Questions: 08 • Duration: 15 mins • Submitted on 5 June 2021</p>
              </div>
              <Button onClick={() => setModalOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                Update
              </Button>
            </CardContent>
          </Card>

          {/* Quick Statistics */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon={<Trophy size={28} className="text-yellow-500" />} value={rank.toString()} />
            <StatCard icon={<ClipboardList size={28} className="text-gray-500" />} value={`${percentile}%`} />
            <StatCard icon={<CheckCircle size={28} className="text-green-500" />} value={`${questionsSolved} / 15`} />
          </div>

          {/* Comparison Graph */}
          <Card className="shadow-md rounded-lg">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Comparison Graph</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="4 4" className="stroke-gray-200" />
                  <XAxis dataKey="name" tick={{ fill: '#888' }} />
                  <YAxis tick={{ fill: '#888' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none' }} />
                  <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} />
                  <ReferenceLine x={`${percentile}%`} stroke="red" label="Your Percentile" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <Card className="shadow-md rounded-lg">
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Syllabus Wise Analysis</h3>
            <SyllabusProgress label="HTML Tools, Forms, History" value={80} />
            <SyllabusProgress label="Tags & References in HTML" value={60} />
            <SyllabusProgress label="Tables & References in HTML" value={24} />
            <SyllabusProgress label="Tables & CSS Basics" value={96} />

            {/* Round Chart */}
            <div className="mt-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Percentile Score</h3>
              <ResponsiveContainer width="100%" height={220}>
                    <RadialBarChart
                        innerRadius="70%"
                        outerRadius="100%"
                        barSize={15}
                        startAngle={90}
                        endAngle={-270}
                        data={[
                        { name: 'Remaining', value: 100 - percentile, fill: '#E5E7EB' }, // Gray for remaining
                        { name: 'Your Score', value: percentile, fill: '#6366F1' }, // Blue for scored percentile
                        ]}
                    >
                        <RadialBar
                        
                        dataKey="value"
                        />
                        <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
                    </RadialBarChart>
                </ResponsiveContainer>
              <p className="mt-4 text-lg font-semibold text-gray-800">{percentile}%</p>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Update Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Your Stats</h3>
            <InputField label="Rank" value={rank} onChange={(val) => setRank(Number(val))} />
            <InputField label="Percentile" value={percentile} onChange={(val) => setPercentile(Number(val))} />
            <InputField label="Questions Solved" value={questionsSolved} onChange={(val) => setQuestionsSolved(Number(val))} />

            <div className="mt-4 flex justify-between">
              <Button onClick={() => setModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Quick Stats Card */
function StatCard({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <Card className="flex flex-col items-center justify-center p-5 shadow-md rounded-lg bg-white">
      {icon}
      <p className="mt-2 text-lg font-semibold text-gray-800">{value}</p>
    </Card>
  );
}

/* Syllabus Progress */
function SyllabusProgress({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600">{label} - {value}%</p>
      <Progress value={value} className="h-2 bg-gray-200 rounded-full" />
    </div>
  );
}

/* Input Field */
function InputField({ label, value, onChange }: { label: string; value: number; onChange: (val: string) => void }) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Input type="number" value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full p-2 border rounded" />
    </div>
  );
}
