import Accounts from '@/components/accounts';
import { Chart } from '@/components/chart';
import Info from '@/components/info';
import Loading from '@/components/loading';
import DoughnutChart from '@/components/piechart';
import RecentTransactions from '@/components/recent-transactions';
import Stats from '@/components/stats';
import api from '@/lib/apiCall';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDashboardStats = async () => {
    const URL =  `transaction/dashboard`;

    try {
      const { data } = await api.get(URL);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || 
          "Something unexpected happened. Try again later."
      );
      if (error?.response?.data?.status === "auth_failed") {
        localStorage.removeItem("user");
        window.location.reload(); 
      }
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDashboardStats();
  }, []);  

  if (isLoading) 
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Loading />
      </div>
    );

  return (
    <div className="px-0 md:px-5 2xl:px-20">
      <Info title="Dashboard" subTitle={"Monitor your financial activities"} />
      <Stats 
        dt={{
          balance: data?.availableBalance,
          income: data?.totalIncome,
          expense: data?.totalExpense
        }}
      />

      <div className='flex flex-col-reverse items-center gap-10 w-ful md:flex-row'>
        <Chart data={data?.chartData} />
        {data?.totalIncome > 0 && (
          <DoughnutChart 
            dt={{
              balance: data?.availableBalance,
              income: data?.totalIncome,
              expense: data?.totalExpense,
            }}
          />
        )}
      </div>
      <div className="flex flex-col-reverse gap-0 md:flex-row md:gap-10 2xl:gap-20">
        <RecentTransactions data={data?.lastTransactions} />
        {data?.lastAccount?.length > 0 && <Accounts data={data?.lastAccount} />}
      </div>
    </div>
  )
}

export default Dashboard