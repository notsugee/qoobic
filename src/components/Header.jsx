import { Box } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 bg-background rounded-full shadow-lg">
        <div className="flex font-bold text-2xl">
          <Box className="h-10 w-10" />
          <div className="mt-1">
            <a href="/">Qoobic</a>
          </div>
        </div>
        <div className="flex">
          <div className="flex mr-4">
            <Button
              variant="ghost"
              className="rounded-full hover:scale-105 transition-all hover:bg-accent mx-2 font-bold"
            >
              <a href="/">Home</a>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full hover:scale-105 transition-all hover:bg-accent mx-2 font-bold"
            >
              <a href="/recommendation">Recommendation</a>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full hover:scale-105 transition-all hover:bg-accent font-bold"
            >
              My Libary
            </Button>
          </div>
          <div className="flex gap-4">
            <ModeToggle />
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
