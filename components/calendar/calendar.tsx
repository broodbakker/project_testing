import { useState } from 'react';
import useSwr from 'swr';
//components
import { Results } from './results';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function usePhotos() {
  const { data, error } = useSwr('/api/calendar/jan', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

const Calendar = () => {
  const [month, setMonth] = useState<'jan' | 'feb' | 'march'>('jan');
  const { data, isLoading, isError } = usePhotos();

  console.log(data, 'data');

  return (
    <div data-testid="Calendar">
      <h1>Car App</h1>
      <button onClick={() => setMonth('jan')}>jan</button>
      <button onClick={() => setMonth('feb')}>feb</button>
      <button onClick={() => setMonth('march')}>march</button>

      <Results month={month} />
    </div>
  );
};

export default Calendar;
