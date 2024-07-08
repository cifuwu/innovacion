'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const initialClasses = [
  {
    id: 1,
    name: 'Introducción a la programación',
    day: 'Monday',
    startTime: '08:00',
    endTime: '09:30',
    description: ''
  },
  {
    id: 2,
    name: 'Matemáticas avanzadas',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    description: ''
  },
  {
    id: 3,
    name: 'Física experimental',
    day: 'Monday',
    startTime: '10:00',
    endTime: '11:30',
    description: ''
  }
];

const AddEvent = () => {
  const [classes, setClasses] = useState([]);
  const [eventData, setEventData] = useState({
    class: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  useEffect(() => {
    // Cargar clases desde localStorage o usar las iniciales
    const storedClasses = localStorage.getItem('classes');
    if (storedClasses) {
      setClasses(JSON.parse(storedClasses));
    } else {
      // Guardar las clases iniciales en localStorage si no están guardadas
      localStorage.setItem('classes', JSON.stringify(initialClasses));
      setClasses(initialClasses);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEvents = localStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    events.push(eventData);
    localStorage.setItem('events', JSON.stringify(events));
    router.push('/horario'); // Redirige de vuelta a la página del horario después de guardar el evento
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>
        <div className="mb-4">
          <label className="block mb-2">Clase</label>
          <select name="class" value={eventData.class} onChange={handleChange} className="w-full border border-gray-600 rounded p-2 bg-gray-700 text-white">
            <option value="">Evento independiente</option>
            {classes.map(cls => (
              <option key={cls.id} value={cls.name}>{cls.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Fecha</label>
          <input type="date" name="date" value={eventData.date} onChange={handleChange} className="w-full border border-gray-600 rounded p-2 bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Horario</label>
          <input type="time" name="time" value={eventData.time} onChange={handleChange} className="w-full border border-gray-600 rounded p-2 bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Descripción</label>
          <input type="text" name="description" value={eventData.description} onChange={handleChange} className="w-full border border-gray-600 rounded p-2 bg-gray-700 text-white" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2">Guardar</button>
      </form>
    </main>
  );
}

export default AddEvent;
