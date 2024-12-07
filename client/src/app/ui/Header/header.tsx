import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="w-4/5 h-20 float-right grid grid-cols-3 items-center border-b-2">
      <div></div> {/* Empty space on the left */}
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
    </header>
  );
};

export default Header;
