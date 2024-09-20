import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const BookSearch = () => {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("book"); // Default to "book"

  const searchBook = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = selectedOption === "book" ? "/recommend" : "/phrase";
      const response = await fetch(
        `https://firm-next-bluegill.ngrok-free.app${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ book_name: bookName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch book recommendations");
      }
      const data = await response.json();
      setBooks(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBook();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold mb-2">Book Recommendations</h1>
        <p className="text-muted-foreground">
          Discover your next great read from our curated selection.
        </p>
        <div className="flex mt-4 justify-center space-x-2">
          <Input
            placeholder="What would you like to read about?"
            className="w-full md:w-[400px] rounded-full"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Select
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          >
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="book">Book</SelectItem>
              <SelectItem value="phrase">Phrase</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            className="rounded-full"
            onClick={searchBook}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 &&
          books.map((book, index) => (
            <div
              key={index}
              className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md flex flex-col hover:scale-105 transition-all"
            >
              <div className="flex-1">
                <img
                  src={book.thumbnail}
                  alt={`Thumbnail of ${book.title}`}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-muted-foreground mb-2">
                  {book.authors
                    ? book.authors.split(";").join(", ")
                    : "Unknown Author"}
                </p>
                <p className="text-sm mb-4">{book.categories || "N/A"}</p>
                <p className="text-muted-foreground line-clamp-3">
                  {book.description || "No description available"}
                </p>
                <Drawer>
                  <DrawerTrigger>Read more</DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>{book.title}</DrawerTitle>
                      <DrawerDescription>
                        <img
                          src={book.thumbnail}
                          alt={`Thumbnail of ${book.title}`}
                          className="w-full h-48 object-scale-down rounded mb-4"
                        />
                        <p className="text-muted-foreground">
                          {book.description}
                        </p>
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose>
                        <Button className="rounded-full">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
              <div>
                <p className="text-muted-background mt-4">
                  Average Rating: {book.average_rating || "N/A"}
                </p>
                <Button variant="outline" className="mt-4">
                  Add to Library
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookSearch;
