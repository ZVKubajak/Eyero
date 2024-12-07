import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-4/5 h-20 float-right flex items-center justify-center border-b-2">
      <div className="flex w-full max-w-sm space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
    </header>
  );
}

export default Header;
