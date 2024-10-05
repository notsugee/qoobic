import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import Book from "../assets/Book.svg";
import { useTheme } from "@/components/theme-provider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <>
      <section className="relative grow">
        <div className="flex flex-row ">
          <div className="container mx-auto px-4 my-24 z-30">
            <div className="max-w-sm">
              <h1 className="text-left mb-5 text-5xl font-extrabold leading-tight">
                Discover Your Next Favorite Book with Qoobic
              </h1>
              <p className="text-left text-muted-foreground text-lg">
                Personalized recommendations powered by advanced AI and
                sentiment analysis.
              </p>
            </div>
            <div className="flex justify-start">
              <Button className="mt-4">
                <a href="/recommendation">Get Started</a>
              </Button>
            </div>
          </div>
          <div className="flex rotate-45">
            <img
              src={Book}
              alt="Book"
              className={`w-[560px] ${theme === "dark" ? "invert" : ""}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
