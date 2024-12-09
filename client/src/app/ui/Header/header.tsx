import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, RefreshCw, SunMoon } from "lucide-react";

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="flex items-center justify-self-center space-x-4 ml-8">
        <Button size="icon" className="bg-sky-500">
          <Plus />
        </Button>
        <Button size="icon">
          <RefreshCw />
        </Button>
      </div>

      <div className="flex w-full max-w-sm mx-auto space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>

      <div className="flex items-center justify-self-end space-x-8 mr-8">
        <SunMoon size={32} />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
