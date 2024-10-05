import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
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
import { Button } from "@/components/ui/button";

const MyLibrary = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;
        try {
          const docRef = collection(db, "qoobiclibrary", userId, "books");
          const querySnapshot = await getDocs(docRef);
          const booksArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setLibrary(booksArray);
        } catch (err) {
          setError("Failed to fetch your library");
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/login");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleDeleteBook = async (bookId) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteDoc(doc(db, "qoobiclibrary", user.uid, "books", bookId));
        setLibrary((prevLibrary) =>
          prevLibrary.filter((book) => book.id !== bookId)
        );
      } catch (err) {
        console.error("Error deleting book:", err);
        setError("Failed to delete the book");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-4">My Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {library.length > 0 ? (
          library.map((book) => (
            <div
              key={book.id}
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
              <p className="text-muted-background mt-4">
                Average Rating: {book.average_rating || "N/A"}
              </p>
              <Button
                onClick={() => handleDeleteBook(book.id)}
                className="mt-2 bg-red-500 hover:bg-red-700 text-white"
              >
                Remove
              </Button>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">Your library is empty.</p>
        )}
      </div>
    </div>
  );
};

export default MyLibrary;
