import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const TicketCard = ({ ticket, onClick }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'open': return 'text-green-600 bg-green-200';
      case 'in-progress': return 'text-yellow-600 bg-yellow-200';
      case 'resolved': return 'text-green-600 bg-green-200';
      default: return 'text-gray-600 bg-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-200';
      case 'low': return 'text-green-600 bg-green-200';
      default: return 'text-gray-600 bg-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return `${day}/${month}/${year}`;
  };

  return (
    <button 
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:ring-opacity-50"
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 pr-4 line-clamp-1">
            {ticket.title}
          </h3>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg ${getStatusColor(ticket.status)}`}>
            <span className={`w-2 h-2 rounded-full ${ticket.status === 'open' ? 'bg-green-600' : ticket.status === 'in-progress' ? 'bg-yellow-600' : 'bg-green-600'}`}></span>
            <span className="text-sm font-medium capitalize">{ticket.status}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {ticket.description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <span className="text-gray-500 font-mono">#{ticket.id}</span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${getPriorityColor(ticket.priority)}`}>
              {ticket.priority} Priority
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <span className="font-medium">{ticket.customer}</span>
            <div className="flex items-center gap-1 text-gray-400">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-xs">{formatDate(ticket.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TicketCard;