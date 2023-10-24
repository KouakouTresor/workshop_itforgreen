"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeSelector } from "@/components/atoms";
import { ECard } from "@/components/molecules";
import events from "@/mocks/events";
import needs from "@/mocks/needs";

export default function Dashboard() {
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
            name="Trier par besoins"
            state={selectedType}
            setState={setSelectedType}
            values={needs}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {events.map((e) => (
          <>
            {selectedType && e.needs.includes(selectedType) ? (
              <ECard
                key={`evenement-${e.event_name}`}
                title={e.event_name}
                association={e.association}
                description={e.description}
                image={e.image}
                needs={e.needs}
                date={e.date}
              />
            ) : null}

            {!selectedType ? (
              <ECard
                key={`evenement-${e.event_name}`}
                title={e.event_name}
                association={e.association}
                description={e.description}
                image={e.image}
                needs={e.needs}
                date={e.date}
              />
            ) : null}
          </>
        ))}
      </div>
    </main>
  );
}
