import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Recommendation() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold mb-2">Book Recommendations</h1>
        <p className="text-muted-foreground">
          Discover your next great read from our curated selection.
        </p>
        <div className=" flex mt-4 justify-center space-x-2">
          <Input
            placeholder="What would you like to read about?"
            className="w-full md:w-[400px] rounded-full"
          />
          <Select>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="book" selected="selected">
                Book
              </SelectItem>
              <SelectItem value="phrase">Phrase</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="rounded-full">
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Great Gatsby</h3>
          <p className="text-muted-foreground mb-2">F. Scott Fitzgerald</p>
          <p className="text-sm mb-4">Fiction, Classics</p>
          <p className="text-muted-foreground line-clamp-3">
            The Great Gatsby is a 1925 novel by American writer F. Scott
            Fitzgerald. Set in the Jazz Age on Long Island, near New York City,
            the novel depicts narrator Nick Carraway's interactions with
            mysterious millionaire Jay Gatsby and Gatsby's obsession with his
            former love, Daisy Buchanan.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">To Kill a Mockingbird</h3>
          <p className="text-muted-foreground mb-2">Harper Lee</p>
          <p className="text-sm mb-4">Fiction, Classics</p>
          <p className="text-muted-foreground line-clamp-3">
            To Kill a Mockingbird is a novel by the American author Harper Lee.
            It was published in 1960 and was instantly successful. In the town
            of Maycomb, Alabama, during the Great Depression, the story is told
            by the young girl Scout Finch, whose father, Atticus, a middle-aged
            lawyer, defends a black man named Tom Robinson, who is accused of a
            crime he did not commit.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">1984</h3>
          <p className="text-muted-foreground mb-2">George Orwell</p>
          <p className="text-sm mb-4">Fiction, Dystopian</p>
          <p className="text-muted-foreground line-clamp-3">
            Nineteen Eighty-Four, often published as 1984, is a dystopian social
            science fiction novel by English novelist George Orwell. It was
            published on 8 June 1949 by Secker & Warburg as Orwell's ninth and
            final book completed in his lifetime.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Kite Runner</h3>
          <p className="text-muted-foreground mb-2">Khaled Hosseini</p>
          <p className="text-sm mb-4">Fiction, Drama</p>
          <p className="text-muted-foreground line-clamp-3">
            The Kite Runner is the first novel by Afghan-American author Khaled
            Hosseini. Published in 2003, it tells the story of Amir, a young boy
            from the Wazir Akbar Khan district of Kabul, whose closest friend is
            Hassan, the son of his father's Hazara servant.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Alchemist</h3>
          <p className="text-muted-foreground mb-2">Paulo Coelho</p>
          <p className="text-sm mb-4">Fiction, Inspirational</p>
          <p className="text-muted-foreground line-clamp-3">
            The Alchemist is a novel by Brazilian author Paulo Coelho that was
            first published in 1988. The story follows a young Spanish shepherd
            named Santiago on his journey to the pyramids of Egypt, after having
            a recurring dream of finding a treasure there.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Hunger Games</h3>
          <p className="text-muted-foreground mb-2">Suzanne Collins</p>
          <p className="text-sm mb-4">Fiction, Young Adult</p>
          <p className="text-muted-foreground line-clamp-3">
            The Hunger Games is a 2008 dystopian novel by the American writer
            Suzanne Collins. It is written in the voice of 16-year-old Katniss
            Everdeen, who lives in the post-apocalyptic nation of Panem, where
            the countries of North America once existed.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Book Thief</h3>
          <p className="text-muted-foreground mb-2">Markus Zusak</p>
          <p className="text-sm mb-4">Fiction, Historical</p>
          <p className="text-muted-foreground line-clamp-3">
            The Book Thief is a 2005 historical novel by Australian author
            Markus Zusak. Set in Nazi Germany, the story is narrated by Death
            and follows its protagonist, Liesel Meminger, from the time she is
            nine to the age of 14.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
        <div className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">The Fault in Our Stars</h3>
          <p className="text-muted-foreground mb-2">John Green</p>
          <p className="text-sm mb-4">Fiction, Young Adult</p>
          <p className="text-muted-foreground line-clamp-3">
            The Fault in Our Stars is a novel by John Green. It is a young adult
            fiction novel that was published in January 2012. The story is
            narrated by Hazel Grace Lancaster, a teenage girl with thyroid
            cancer that has spread to her lungs.
          </p>
          <Button variant="outline" className="mt-4">
            Add to Library
          </Button>
        </div>
      </div>
    </div>
  );
}
