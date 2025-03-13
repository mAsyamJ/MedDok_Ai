import React, { useState } from 'react';
import { DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { patientBalance } from '../../mockData';

const PatientBalanceCard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="metric-glow glass-effect rounded-xl p-6 hover-glow transition-all duration-300">
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="bg-gradient-to-br from-green-400/30 to-blue-500/30 p-4 rounded-xl animate-pulse">
          <DollarSign className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Patient's Balance
        </h2>
      </div>
      <p className="text-lg mb-4">Current Balance: ${patientBalance.balance.toFixed(2)}</p>
      <div className="mb-4">
        <h3
          className="billing-dropdown-header text-xl font-semibold flex items-center justify-between cursor-pointer p-2 rounded"
          onClick={toggleDropdown}
        >
          Monthly Billing
          {isDropdownOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </h3>
        {isDropdownOpen && (
          <ul className="list-disc list-inside">
            {patientBalance.monthlyBilling.map((billing, index) => (
              <li key={index}>
                {billing.month}: ${billing.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold">Loans</h3>
        <p>${patientBalance.loans.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Patient"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default PatientBalanceCard;