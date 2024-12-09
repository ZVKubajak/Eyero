import Header from "../ui/Header/header";
// Import Sidebar

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <header className="flex justify-end h-20 items-center border-b-2">
          <div className="w-4/5">
            <Header />
          </div>
        </header>

        <main className="flex flex-1">
          <div className=" flex flex-col w-1/5 border-r-2">
            <div>Sidebar</div>
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
