import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface RevenueData {
  month: string;
  amount: number;
}

interface RevenueDropdownProps {
  data: RevenueData[];
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

const RevenueDropdown: React.FC<RevenueDropdownProps> = ({
  data,
  selectedMonth,
  onMonthSelect,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-indigo-500/10 px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-indigo-500/20">
          {selectedMonth}
          <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md glass-effect shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.map((item) => (
              <Menu.Item key={item.month}>
                {({ active }) => (
                <button
                  onClick={() => onMonthSelect(item.month)}
                  className={`${
                    active ? 'bg-indigo-500/20' : ''
                  } ${
                    selectedMonth === item.month ? 'bg-indigo-500/30' : ''
                  } text-gray-200 group flex w-full items-center justify-between px-4 py-2 text-sm`}
                >
                  <span>{item.month}</span>
                  <span className="text-indigo-400">${item.amount.toLocaleString()}</span>
                </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default RevenueDropdown;