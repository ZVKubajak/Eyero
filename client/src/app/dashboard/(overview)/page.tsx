import Chart from "@/app/ui/dashboard/Chart/chart";
// Import NewsCard

const Page = () => {
  return (
    <main className="mx-20 my-12">
      <div>
        <header>
          <h1 className="text-3xl font-semibold">Trending Markets</h1>
          <h2 className="text-xl">December 8th</h2>
        </header>
        <div>
          <div className="grid grid-cols-2 mt-12 pb-12 border-b">
            <Chart />
            <Chart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
