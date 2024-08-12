import { Button } from "../components/ui/button";
import Book from "../../public/Book.svg";
import { useTheme } from "@/components/theme-provider";

const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <section className="relative grow">
        <div className="flex flex-row ">
          <div className="container mx-auto px-4 my-24 z-30">
            <div className="max-w-sm">
              <h1 className="text-left mb-5 text-5xl font-extrabold leading-tight">
                Discover Your Next Favorite Book with Qoobic
              </h1>
              <p className="text-left text-gray-500 text-lg">
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
