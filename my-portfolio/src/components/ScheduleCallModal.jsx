import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ScheduleCallModal.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('PFMERKJfTQ3JDObEf');

const ScheduleCallModal = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userName || !selectedDate || !email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Format the date
      const dateString = selectedDate.toDateString();
      const timeString = selectedTime;
      
      // Create a Google Meet link
      const googleMeetLink = `https://meet.google.com/new`;
      
      // Prepare template parameters
      const templateParams = {
        user_name: userName,
        user_email: email,
        selected_date: dateString,
        selected_time: timeString,
        google_meet_link: googleMeetLink,
        to_email: 'jeyemcats@gmail.com'
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        'service_dnzephk',
        'template_wzuko7e',
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitMessage('✓ Call scheduled! Check your email for confirmation.');
      
      // Reset form and close after 2 seconds
      setTimeout(() => {
        setUserName('');
        setSelectedDate(null);
        setEmail('');
        setSelectedTime('10:00');
        setSubmitMessage('');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('✗ Error scheduling call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Schedule a Call</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`p-3 rounded-lg text-sm font-semibold ${
              submitMessage.includes('✓') 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              {submitMessage}
            </div>
          )}

          {/* Calendar */}
          <div className="flex justify-center">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
              className="border border-gray-300 rounded-lg"
            />
          </div>

          {/* Selected Date Display */}
          {selectedDate && (
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                Selected Date: <span className="font-semibold text-gray-800">
                  {selectedDate.toDateString()}
                </span>
              </p>
            </div>
          )}

          {/* Time Slot Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name:
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Time (GMT+8):
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@example.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Scheduling...' : 'Confirm Call'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ScheduleCallModal;
