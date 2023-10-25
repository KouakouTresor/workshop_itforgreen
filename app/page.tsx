"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TypeSelector } from "@/components/atoms";
import { ACard } from "@/components/molecules";
import { useSearch } from "@/store/search";
import types from "@/mocks/types";
import { IAssociation } from "@/interfaces/assiociation";
import { useAssociation } from "@/api-service";

const Home = () => {
  const { search } = useSearch();
  const [associations, setAssociations] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const renderItem = (a: IAssociation) => {
    let display: boolean = true;

    if (selectedType && !a.type.includes(selectedType)) {
      display = false;
    }

    if (
      search &&
      !a.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      display = false;
    }

    if (display) {
      return (
        <ACard
          key={`association-${a.title}`}
          id={"djzkisksjdk"}
          title={a.title}
          description={a.description}
          image={a.image}
          type={a.type}
        />
      );
    }
  };

  const initAssociations = async () => {
    try {
      const { data } = await useAssociation.getAssociations({});
      setAssociations(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    initAssociations();
  }, []);

  return (
    <main className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Associations</h1>
        <div className="flex">
          {selectedType && (
            <Button
              variant="ghost"
              className="mr-2"
              onClick={() => setSelectedType(undefined)}
            >
              Annuler
            </Button>
          )}
          <TypeSelector
            name="Trier par type"
            state={selectedType}
            setState={setSelectedType}
            values={types}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {associations.map((a) => (
          <>{renderItem(a)}</>
        ))}
      </div>
    </main>
  );
};

export default Home;
