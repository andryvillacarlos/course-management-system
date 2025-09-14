import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBox({ value, onChange }) {
  return (
    <div className="relative w-full sm:w-auto">
      {/* Input */}
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="pl-10" // space for icon
      />
      {/* Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
    </div>
  );
}
