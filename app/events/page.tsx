"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeSelector } from "@/components/atoms";
import { ECard, CalendarDateRangePicker } from "@/components/molecules";
import { IEvent } from "@/interfaces/events";
import events from "@/mocks/events";
import needs from "@/mocks/needs";
import { useSearch } from "@/store/search";
import { DateRange } from "react-day-picker";

export default function Dashboard() {
  const { search } = useSearch();
  const [date, setDate] = useState<DateRange>();
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const renderItem = (e: IEvent) => {
    let display: boolean = true;

    if (selectedType && !e.needs.includes(selectedType)) {
      display = false;
    }

    if (search) {
      let s: boolean = false;
      if (
        e.association.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ) {
        s = true;
      }
      if (
        e.event_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ) {
        s = true;
      }
      console.log(s);
      if (!s) {
        display = false;
      }
    }

    if (date) {
      let dateCheck: boolean = false;
      if (
        new Date(date.from ?? "") < new Date(e.date) &&
        new Date(date.to ?? "") > new Date(e.date)
      ) {
        dateCheck = true;
      }

      if (!dateCheck) {
        display = dateCheck;
      }
    }

    if (display) {
      return (
        <ECard
          key={`evenement-${e.event_name}`}
          title={e.event_name}
          association={e.association}
          description={e.description}
          image={e.image}
          needs={e.needs}
          date={e.date}
        />
      );
    }
  };

  return (
    <main className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Événements</h1>
        <div className="flex space-x-2">
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
          <CalendarDateRangePicker date={date} setDate={setDate} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {events.map((e) => (
          <>{renderItem(e)}</>
        ))}
      </div>
    </main>
  );
}
