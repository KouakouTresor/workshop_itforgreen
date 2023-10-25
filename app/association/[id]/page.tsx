"use client";

import { Badge } from "@/components/ui/badge";
import { ECard } from "@/components/molecules";
import events from "@/mocks/events";

const association = {
  title: "LPO - Ligue Protéctrice des Oiseaux",
  description:
    "La Ligue Protectrice des Oiseaux, souvent abrégée en LPO, est une organisation dédiée à la conservation et à la protection des oiseaux en France. Fondée en 1912, elle est devenue l'une des principales forces de défense de la faune aviaire dans le pays.",
  image: "https://www.lpo.fr/assets/theme/img/logo.png",
  type: ["Animaux", "Environnement"],
};

const Home = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex flex-col p-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-medium">{association?.title}</h1>
          <div className="flex space-x-2 mt-4">
            {association?.type.map((t) => (
              <Badge key={`association-type-${t}`} className="bg-[#20580f]">
                {t}
              </Badge>
            ))}
          </div>
          <div className="my-4">
            <p className="text-sm text-muted-foreground">
              {association?.description}
            </p>
          </div>
        </div>
        <img src={association.image} className="w-1/4" />
      </div>
      <div>
        <h2 className="font-bold">Prochains événements</h2>
        <div className="flex overflow-scroll space-x-2 mt-4">
          {events.map((e) => (
            <div key={`evenement-${e.event_name}`} className="min-w-[300px]">
              <ECard
                title={e.event_name}
                association={e.association}
                description={e.description}
                image={e.image}
                needs={e.needs}
                date={e.date}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
