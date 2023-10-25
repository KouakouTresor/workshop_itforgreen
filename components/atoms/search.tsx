import { Input } from "@/components/ui/input";
import { useSearch } from "@/store/search";

const Search = () => {
  const { search, setSearch } = useSearch();
  return (
    <div>
      <Input
        type="search"
        placeholder="Chercher..."
        className="hidden md:block md:w-[150px] lg:w-[250px]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
