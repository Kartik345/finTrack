import { getDateSevenDaysAgo } from '@/lib';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const DateRange = () => {
    const sevenDaysAgo = getDateSevenDaysAgo();
    const [searchParams, setSearchParams] = useSearchParams();

    const [dateFrom, setDateFrom] = useState(() => {
        const df = searchParams.get("df");
        return df && new Date(df).getTime() <= new Date().getTime()
            ? df
            : sevenDaysAgo || new Date().toISOString().split("T")[0];
    });
    const [dateTo, setDateTo] = useState(() => {
        const dt = searchParams.get("dt");
        return dt && new Date(dt).getTime() >= new Date(dateFrom).getTime()
            ? dt : new Date().toISOString().split("T")[0];
    });

    useEffect(() => {
        setSearchParams({ df: dateFrom, dt: dateTo });
    }, [dateFrom, dateTo, setSearchParams]); // Added setSearchParams to dependency array (good practice)

    const handleDateFromChange = (e) => {
        const newDateFrom = e.target.value;
        setDateFrom(newDateFrom);
        // Ensure dateFrom is not after dateTo
        if (new Date(newDateFrom).getTime() > new Date(dateTo).getTime()) {
            setDateTo(newDateFrom); // Optionally update dateTo to be the same as dateFrom
        }
    };

    const handleDateToChange = (e) => {
        const newDateTo = e.target.value;
        setDateTo(newDateTo);
        // Ensure dateTo is not before dateFrom
        if (new Date(newDateTo).getTime() < new Date(dateFrom).getTime()) {
            setDateFrom(newDateTo); // Optionally update dateFrom to be the same as dateTo
        }
    };

    return (
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
                <label
                    className='block text-gray-700 dark:text-gray-400 text-sm mb-2'
                    htmlFor='dateFrom'
                >
                    From
                </label>
                <input
                    type="date"
                    className='inputStyles'
                    max={dateTo}
                    value={dateFrom}
                    onChange={handleDateFromChange}
                    id="dateFrom"
                />
            </div>
            <div className='flex item-center gap-1'>
                <label
                    className='block text-gray-700 dark:text-gray-400 text-sm mb-2'
                    htmlFor='dateTo'
                >
                    To
                </label>
                <input
                    type="date"
                    className='inputStyles'
                    min={dateFrom}
                    value={dateTo}
                    onChange={handleDateToChange}
                    id="dateTo"
                />
            </div>
        </div>
    );
};

export default DateRange;