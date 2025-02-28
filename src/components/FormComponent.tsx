import React, { useState } from 'react';
import { format } from 'date-fns';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

const FormComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const message = `🍜 Let's eat ramen on ${format(new Date(selectedDate), 'MMMM do, yyyy')} at ${selectedTime} ⏰!`;

    if (navigator.share) {
        navigator.share({
            text: message,
        })
        .then(() => console.log("Partagé avec succès"))
        .catch((error) => console.error("Erreur lors du partage:", error));
    } else {
        alert("Le partage natif n'est pas supporté sur cet appareil.");
    }
};

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
        
      <div>
        <Label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</Label>
        <Input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <Label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</Label>
        <Input
          type="time"
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <Button type="submit" className="w-full py-2 px-4">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;