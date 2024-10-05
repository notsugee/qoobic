import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectButton = () => {
  return (
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
  );
};

export default SelectButton;
