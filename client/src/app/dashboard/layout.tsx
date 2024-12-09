import Header from "../ui/Header/header";
// Import Sidebar

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout;
