import React, { useState } from 'react';
import { MoreVertical, Filter } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { patients } from '../mockData';

interface Patient {
  id: string;
  name: string;
  age: number;
  conditions: string[];
  category: string;
  status: string;
  enrollDate: string;
  program: string;
  provider: string;
  monthlyMins: number;
  avatar: string;
}

const PatientList: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Non-Complex', 'Complex'];
  const displayPatients = showAll ? patients : patients.slice(0, 3);
  
  const filteredPatients = selectedCategory === 'All' 
    ? displayPatients 
    : displayPatients.filter(patient => patient.category === selectedCategory);

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Patients List</h2>
        <div className="flex items-center gap-4">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-gray-200 hover:bg-indigo-500/20 transition-colors">
              <Filter className="w-4 h-4" />
              <span>{selectedCategory}</span>
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 rounded-lg glass-effect shadow-lg border border-indigo-500/20">
                <div className="py-1">
                  {categories.map((category) => (
                    <Menu.Item key={category}>
                      {({ active }) => (
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`${
                            active ? 'bg-indigo-500/20' : ''
                          } ${
                            selectedCategory === category ? 'text-indigo-400' : 'text-gray-200'
                          } flex w-full px-4 py-2 text-sm`}
                        >
                          {category}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-indigo-500/10 rounded-lg text-sm font-medium text-indigo-400 hover:bg-indigo-500/20 transition-colors"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-custom">
        <div className="min-w-[1000px]">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left pb-4">ID</th>
                <th className="text-left pb-4">Patient Name</th>
                <th className="text-left pb-4">Age</th>
                <th className="text-left pb-4">Category</th>
                <th className="text-left pb-4">Conditions</th>
                <th className="text-left pb-4">Status</th>
                <th className="text-left pb-4">Enrolled Date</th>
                <th className="text-left pb-4">Program</th>
                <th className="text-left pb-4">Provider</th>
                <th className="text-left pb-4">Monthly Mins</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-t border-indigo-500/10 hover:bg-indigo-500/5 transition-colors">
                  <td className="py-4 text-gray-300">#{patient.id}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="w-8 h-8 rounded-full mr-3 ring-2 ring-indigo-500/20"
                      />
                      <span className="text-gray-200">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{patient.age} years</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      patient.category === 'Complex' 
                        ? 'bg-rose-500/20 text-rose-300'
                        : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {patient.category}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex flex-wrap gap-2">
                      {patient.conditions.map((condition, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/20 text-emerald-300">
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-300">{patient.enrollDate}</td>
                  <td className="py-4 text-gray-300">{patient.program}</td>
                  <td className="py-4 text-gray-300">{patient.provider}</td>
                  <td className="py-4 text-gray-300">{patient.monthlyMins} mins</td>
                  <td className="py-4">
                    <button className="p-2 hover:bg-indigo-500/10 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientList;