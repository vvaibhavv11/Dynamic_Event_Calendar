'use client'

import React, { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router'

export function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const calendarStart = startOfWeek(monthStart)
    const calendarEnd = endOfWeek(monthEnd)
    const dateRange = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const weeks = []
    for (let i = 0; i < dateRange.length; i += 7) {
        weeks.push(dateRange.slice(i, i + 7))
    }

    return (
        <div className='py-20'>
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">
                        {format(currentMonth, 'MMMM yyyy')}
                    </CardTitle>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevMonth}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous month</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextMonth}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next month</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="grid grid-cols-7 gap-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                                {day}
                            </div>
                        ))}
                        {weeks.map((week, weekIndex) => (
                            <React.Fragment key={weekIndex}>
                                {week.map((date, dateIndex) => (
                                    <Button
                                        key={dateIndex}
                                        variant="ghost"
                                        className={`h-20 w-full p-0 font-normal ${!isSameMonth(date, monthStart)
                                            ? 'text-muted-foreground opacity-50'
                                            : isSameDay(date, selectedDate)
                                                ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground'
                                                : ''
                                            }`}
                                        onClick={() => setSelectedDate(date)}
                                    >
                                        <Link to="events">
                                            <time className='justify-center' dateTime={format(date, 'yyyy-MM-dd')}>
                                                {format(date, 'd')}
                                            </time>
                                        </Link>
                                    </Button>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


