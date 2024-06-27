import React, { Component } from 'react';

interface TimeSlot {
  time: string;
  isBooked: boolean;
}

interface TimeSlotModalProps {
  onClose: () => void;
  onSelectTime: (time: string) => void;
  availableTimeSlots: TimeSlot[];
  updateTimeSlot: (timeSlot: TimeSlot[]) => void;
}

interface TimeSlotModalState {
  selectedTime: string;
}

class TimeSlotModal extends Component<TimeSlotModalProps, TimeSlotModalState> {
  constructor(props: TimeSlotModalProps) {
    super(props);
    this.state = {
      selectedTime: '',
    };
  }

  handleTimeSelect = (time: string) => {
    this.setState({ selectedTime: time });
    this.props.onSelectTime(time);
    this.props.onClose();
  };

  handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedTime } = this.state;
    const { availableTimeSlots, updateTimeSlot } = this.props;

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50" onClick={this.handleClickOutside}>
        <div className="bg-white p-6 rounded-lg w-80" onClick={(e) => e.stopPropagation()}>
          <div className="text-lg font-semibold mb-4">Select Time Slot</div>
          <div className="grid grid-cols-1 gap-2">
            {availableTimeSlots.map((timeSlot, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  timeSlot.isBooked ? 'bg-red-500 text-white' : 'bg-green-500'
                } hover:bg-opacity-75`}
                onClick={() => {
                  this.handleTimeSelect(timeSlot.time);
                  updateTimeSlot({...timeSlot, isBooked: true });
                }}
              >
                {timeSlot.time}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 hover:bg-gray-400"
              onClick={this.props.onClose}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${!selectedTime && 'opacity-50 cursor-not-allowed'}`}
              onClick={() => selectedTime && this.props.onClose()}
              disabled={!selectedTime}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSlotModal;
