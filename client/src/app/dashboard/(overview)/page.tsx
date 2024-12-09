import Chart from "@/app/ui/dashboard/Chart/chart";
// Import NewsCard

const Page = () => {
  return (
    <main className="mx-12 my-8">
      <div>
        <header>
          <h1 className="text-3xl font-semibold">Trending Markets</h1>
          <h2 className="text-xl">December 8th</h2>
        </header>
        <div>
          <div className="grid grid-cols-2 mt-8 pb-4 border-b">
            <Chart />
            <Chart />
          </div>
          <div className="grid grid-cols-4 mt-4">
            <Chart />
            <Chart />
            <Chart />
            <Chart />
          </div>
        </div>
        {/* News Goes Here */}
      </div>
    </main>
  );
};

export default Page;
