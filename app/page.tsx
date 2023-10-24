"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeSelector } from "@/components/atoms";
import { ACard } from "@/components/molecules";
import associations from "@/mocks/associations";
import types from "@/mocks/types";

const Home = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  return (
    <main className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Les associations</h1>
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
          <>
            {selectedType && a.type.includes(selectedType) ? (
              <ACard
                key={`association-${a.title}`}
                title={a.title}
                description={a.description}
                image={a.image}
                type={a.type}
              />
            ) : null}

            {!selectedType ? (
              <ACard
                key={`association-${a.title}`}
                title={a.title}
                description={a.description}
                image={a.image}
                type={a.type}
              />
            ) : null}
          </>
        ))}
      </div>
    </main>
  );
};

export default Home;
