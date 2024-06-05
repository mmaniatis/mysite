import React, { useState, useEffect } from 'react';

interface TimeSlot {
  time: string;
  isBooked: boolean;
}

interface CalendarDay {
  day: number;
  isInPast: boolean;
  isBooked: boolean;
}

const testPotentialTimeSlots = {
    'bookingId': 1,
    'service': {
        'id': 1,
        'name': 'Consult',
        'duration': 30
    },
    'availableDays':['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'workingDayStart': '7:00',
    'workingDayEnd': '11:00',
}

const testBookedTimeSlots = {
    'bookingId': 1,
    'bookedSlots': {
        '2024-6-6': [['7:30', '8:17'], ['8:30', '8:31'], ['8:31', '8:59'], ['9:15', '10:00'], ['10:12', '10:48']],
        '2024-6-7': [['7:30', '8:17'], ['8:30', '8:31'], ['8:31', '8:59'], ['9:15', '10:00'], ['10:12', '10:48']]
    }
}

const BookingForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [calendarData, setCalendarData] = useState<CalendarDay[]>([]);

  const fetchBookedTimeSlots = (selectedDate: Date) => {
    // Assuming we have time slots for all days from 9am to 5pm
    const alreadyBookedSlots: TimeSlot[] = []
    var [startHours, startMinutes] = testPotentialTimeSlots["workingDayStart"].split(":")
    var [endHours, endMinutes] = testPotentialTimeSlots["workingDayEnd"].split(":")
    var startTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), parseInt(startHours, 10), parseInt(startMinutes, 10));
    var endTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), parseInt(endHours, 10), parseInt(endMinutes, 10));
    const currentDate = selectedDate.getFullYear() + "-" + (selectedDate.getMonth()) + "-" + selectedDate.getDate()
    console.log("Finding booked times for: " + currentDate)

    while(startTime < endTime) {
        var currentTimeSlot = startTime.getHours() + ":" + startTime.getMinutes()
        var isBooked = false
        if (currentDate in testBookedTimeSlots['bookedSlots']) {
            var bookedSlots: string[] = testBookedTimeSlots['bookedSlots'][currentDate]
            
            bookedSlots.forEach(element => {
                var [startHours, startMinutes] = element[0].split(":")
                var [endHours, endMinutes] = element[1].split(":")
                if(
                    (startTime.getHours() < parseInt(endHours, 10) &&
                    startTime.getHours() >= parseInt(startHours, 10)) ||
                    (startTime.getHours() == parseInt(endHours, 10) &&
                    (startTime.getHours() >= parseInt(startHours, 10) &&
                    startTime.getMinutes() < parseInt(endMinutes, 10)))
                ) {
                    isBooked = true
                } else {
                    console.log("currentTimeSlot is not booked: " + currentTimeSlot)
                }
            });
        }
        
        if(isBooked) {
            console.log("booked day found, date=" + currentDate);
        }
        
        var time = startTime.toString();
        alreadyBookedSlots.push({time, isBooked});
        startTime.setMinutes(startTime.getMinutes() + testPotentialTimeSlots["service"]["duration"])
    }

    return alreadyBookedSlots;
    };

  useEffect(() => {
    const today = new Date()
    // Update calendar data based on time slots availability
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const updatedCalendarData = Array.from({ length: daysInMonth }, (_, i) => {
        var day = i + 1;
        var isInPast = false;
        const currentDate: Date = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, day)
        fetchBookedTimeSlots(currentDate).forEach(element => {
            console.log(element)
        })
        const isBooked = !fetchBookedTimeSlots(currentDate).some(d => !d.isBooked)
        if ( today > new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)) {
            isInPast = true
        }
        return { day, isBooked, isInPast};
    });
    setCalendarData(updatedCalendarData);
  }, [selectedDate]);

  const handleDateChange = (num: number) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + num));
  };

  const handleDayClick = (day: number) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
    console.log(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))

  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleDateChange(-1)}
        >
          {'<'}
        </button>
        <h2 className="text-xl font-semibold inline-block">
          {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' } )}
        </h2>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleDateChange(1)}
        >
          {'>'}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-gray-700">
            {day}
          </div>
        ))}
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`p-2 text-center  
            ${(day.isInPast ? 'bg-gray-400' : (day.isBooked ? 'bg-red-500' : 'bg-green-500 hover:bg-opacity-75 cursor-pointer'))}
            } text-black`}
            onClick={() => handleDayClick(day.day)}
          >
            {day.day}
          </div>
        ))}
      </div>
      {/* {modalOpen && (
        <TimeSlotModal
            onClose={handleModalClose}
            onSelectTime={handleTimeSelect}
            availableTimeSlots={timeSlots}
            updateTimeSlot={setTimeSlots}
        />
      )} */}
    </div>
  );
};

export default BookingForm;
