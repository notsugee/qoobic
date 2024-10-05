import { Box } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

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
              <a href="/mylibrary">Library</a>
            </Button>
          </div>
          <div className="flex gap-4">
            <ModeToggle />
            {isLoggedIn && (
              <Button
                variant="outline"
                className="rounded-full font-bold hover:bg-primary"
                onClick={handleLogout}
              >
                Log out
              </Button>
            )}
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
