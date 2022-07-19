import useSWR from 'swr';

interface IResults {
  month: string;
}

export const Results = ({ month }: IResults) => {
  console.log(month);
  const {  data } = useSWR<string[]>(
    `/api/calendar/${month}`
  );

  return <div data-testid="Calendar">{data}</div>;
};
