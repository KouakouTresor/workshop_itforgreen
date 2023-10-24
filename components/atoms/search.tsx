import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Chercher..."
        className="hidden md:block md:w-[150px] lg:w-[250px]"
      />
    </div>
  );
};

export default Search;
