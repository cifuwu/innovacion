"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SideBar from "../SideBar";

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDaysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const Page = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [classes, setClasses] = useState([]);
  const [startOfWeekDate, setStartOfWeekDate] = useState(startOfWeek(new Date()));

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data } = await axios.get('/horario/scrape');
        setClasses(data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);
  const handleWeekChange = (weeks) => {
    setStartOfWeekDate(weeks === -1 ? subWeeks(startOfWeekDate, 1) : addWeeks(startOfWeekDate, 1));
  };

  const renderClassesForCurrentDay = () => {
    const dayName = daysOfWeek[currentDate.getDay()];
    const dayClasses = classes.flat().filter(cls => cls.dia === dayName);
    const elements = dayClasses.map((cls, idx) => {
      const [blockStart, blockEnd] = cls.bloque.split('(')[1].split(')')[0].split('-');
      const startMinutes = parseInt(blockStart.split(':')[0]) * 60 + parseInt(blockStart.split(':')[1]);
      const endMinutes = parseInt(blockEnd.split(':')[0]) * 60 + parseInt(blockEnd.split(':')[1]);
      const topPercentage = ((startMinutes - 480) / (720)) * 100; // 8:00 AM is 480 minutes, 8 PM is 1200 minutes
      const heightPercentage = ((endMinutes - startMinutes) / (720)) * 100;

      return (
        <div
          key={idx}
          className="absolute"
          style={{
            top: `${topPercentage}%`,
            height: `${heightPercentage}%`,
            zIndex: 10,
            left: '15%',
            width: '85%'
          }}
        >
          <Card className="shadow-lg bg-gray-800 text-white" style={{ height: `100%` }}>
            <CardHeader><div className="font-bold">{cls.nombre}</div></CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>{cls.tipo}</div>
              <div className="text-xs text-gray-400 mt-auto">Eventos</div>
              <div className="text-xs">{cls.profesor}</div>
              <div className="text-xs text-gray-500">{blockStart} - {blockEnd} | Todos los {shortDaysOfWeek[currentDate.getDay()]}</div>
            </CardContent>
          </Card>
        </div>
      );
    });

    return elements;
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      <SideBar />
      <header className="p-4 bg-gray-800 shadow-md flex items-center">
        <h1 className="text-2xl font-semibold ml-20">Horario</h1>
      </header>
      <div className="container mx-auto p-4">
        <h2 className="text-lg font-medium mb-4">Aquí puedes revisar tu horario semanal</h2>
        <Card className="p-2 bg-gray-800 text-gray-200">
          <div className="flex justify-center items-center">
            <Button variant="ghost" onClick={() => handleWeekChange(-1)} className="text-gray-200 px-1">&lt;</Button>
            {daysOfWeek.map((day, index) => {
              const dayDate = addDays(startOfWeekDate, index);
              return (
                <button key={day} className={`flex flex-col items-center m-1 px-2 py-1 border rounded-md text-sm ${isSameDay(dayDate, currentDate) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`} onClick={() => setCurrentDate(dayDate)}>
                  <div>{format(dayDate, 'd')}</div>
                  <div className="text-xs">{shortDaysOfWeek[index]}</div>
                </button>
              );
            })}
            <Button variant="ghost" onClick={() => handleWeekChange(1)} className="text-gray-200 px-1">&gt;</Button>
          </div>
        </Card>
        <div className="relative">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="relative flex items-center py-6">
              <div className="text-gray-400 w-16">{`${index + 8}:00`}</div>
              <div className="flex-1 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gray-700"></div>
              </div>
            </div>
          ))}
          {renderClassesForCurrentDay()}
        </div>
        <Link href="/horario/add-event">
          <Button variant="secondary" className="fixed bottom-4 right-4 text-xl p-4">+</Button>
        </Link>
      </div>
    </main>
  );
}

export default Page;
