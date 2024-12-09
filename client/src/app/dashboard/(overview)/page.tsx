import Chart from "@/app/ui/dashboard/Chart/chart";
// Import NewsCard

const Page = () => {
  return (
    <main>
      <div>
        <header>
          <h1>Trending Markets</h1>
          <h2>December 8th</h2>
        </header>
        <div>
          <Chart />
        </div>
      </div>
    </main>
  );
};

export default Page;
