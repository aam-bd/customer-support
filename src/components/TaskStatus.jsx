import React from 'react';

const TaskStatus = ({ inProgressTickets, resolvedTickets, onComplete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg lg:mt-13 p-8 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      {/* In Progress */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Task Status ({inProgressTickets.length})
        </h3>
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {inProgressTickets.map((ticket) => (
            <div 
              key={ticket.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <h4 className="font-medium text-gray-800 line-clamp-1">
                  {ticket.title}
                </h4>
                <button
                  onClick={() => onComplete(ticket)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
          {inProgressTickets.length === 0 && (
            <p className="text-gray-400 text-sm text-center py-4">
              No tickets in progress
            </p>
          )}
        </div>
      </div>

      {/* Resolved Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Resolved Tasks ({resolvedTickets.length})
        </h3>
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {resolvedTickets.map((ticket) => (
            <div 
              key={ticket.id}
              className="bg-[#E0E7FF] rounded-lg p-4 shadow-sm"
            >
              <h4 className="font-medium text-gray-800 line-clamp-1">
                {ticket.title}
              </h4>
            </div>
          ))}
          {resolvedTickets.length === 0 && (
            <p className="text-gray-400 text-sm text-center py-4">
              No resolved tickets
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;