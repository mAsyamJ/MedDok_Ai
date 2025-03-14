import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, DollarSign } from 'lucide-react';
import { revenueData, ccmBilling } from '../../mockData';

const BillingCard = () => {
  return (
    <div className="dashboard-card billing-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 animate-pulse"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Billing Overview</h2>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-gray-200 hover:bg-indigo-500/20 transition-colors">
              <span>January 2024</span>
              <ChevronDown className="w-4 h-4" />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 rounded-lg glass-effect shadow-lg border border-indigo-500/20">
                <div className="py-1">
                  {revenueData.map((item) => (
                    <Menu.Item key={item.month}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-indigo-500/20' : ''
                          } flex justify-between items-center w-full px-4 py-2 text-sm text-gray-200`}
                        >
                          <span>{item.month}</span>
                          <span className="text-emerald-400">
                            ${item.amount.toLocaleString()}
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 mb-8">
          <div className="p-4 rounded-lg bg-emerald-500/30">
            <DollarSign className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Total Revenue</p>
            <p className="text-3xl font-bold text-emerald-400">$154,873</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Non-Complex CCM</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ccmBilling.nonComplex.map((item) => (
                <div
                  key={item.code}
                  className="p-4 rounded-lg glass-effect border border-indigo-500/20"
                >
                  <p className="text-sm text-gray-400">{item.code}</p>
                  <p className="text-lg font-semibold text-indigo-400">
                    ${item.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Complex CCM</h3>
            <div className="grid grid-cols-2 gap-4">
              {ccmBilling.complex.map((item) => (
                <div
                  key={item.code}
                  className="p-4 rounded-lg glass-effect border border-indigo-500/20"
                >
                  <p className="text-sm text-gray-400">{item.code}</p>
                  <p className="text-lg font-semibold text-indigo-400">
                    ${item.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingCard;
