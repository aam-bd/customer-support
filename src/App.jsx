import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import ticketData from './Json/api.json';

function App() {
  const [availableTickets, setAvailableTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    // Initialize tickets with status 'open'
    const initializedTickets = ticketData.map(ticket => ({
      ...ticket,
      status: 'open'
    }));
    setAvailableTickets(initializedTickets);
  }, []);

  const handleTicketClick = (ticket) => {
    // Remove from available tickets
    setAvailableTickets(prev => prev.filter(t => t.id !== ticket.id));
    
    // Add to in-progress with updated status
    const updatedTicket = { ...ticket, status: 'in-progress' };
    setInProgressTickets(prev => [...prev, updatedTicket]);
    
    // Show toast notification
    toast.info(`Ticket #${ticket.id} moved to In-Progress!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleComplete = (ticket) => {
    // Remove from in-progress
    setInProgressTickets(prev => prev.filter(t => t.id !== ticket.id));
    
    // Add to resolved with updated status
    const updatedTicket = { ...ticket, status: 'resolved' };
    setResolvedTickets(prev => [...prev, updatedTicket]);
    
    // Show success toast
    toast.success(`Ticket #${ticket.id} has been resolved!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Navbar/>
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Customer Tickets */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableTickets.length === 0 ? (
                <div className="col-span-2 text-center py-12 bg-white rounded-xl shadow-sm">
                  <p className="text-gray-500 text-lg">No tickets available</p>
                  <p className="text-gray-400 text-sm mt-2">All tickets have been moved to progress or resolved</p>
                </div>
              ) : (
                availableTickets.map((ticket) => (
                  <TicketCard 
                    key={ticket.id} 
                    ticket={ticket} 
                    onClick={() => handleTicketClick(ticket)}
                  />
                ))
              )}
            </div>
          </div>

          {/* Right Section - Task Status */}
          <div className="lg:w-1/3">
            <TaskStatus 
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
      <Footer/>
    </div>
  )
}

export default App