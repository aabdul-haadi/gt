import { clientGroups } from "@/data/clients";
import { useState } from "react";

// Re-organize clients for a better visual flow
const clientsTop = clientGroups.find(g => g.name === "EPC Contractors")?.clients ?? [];
const clientsBottom = clientGroups.filter(g => g.name !== "EPC Contractors").flatMap(g => g.clients);
const allClients = [...clientsTop, ...clientsBottom];

const ClientLogo = ({ client }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="mx-6 flex h-28 w-44 items-center justify-center">
      <img 
        src={`/src/assets/brand-icons/brand-${client.id}.png`} 
        alt={client.name} 
        className="max-h-24" 
        style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};

export const ClientLogoWall = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-page text-center">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
          Our Clients
        </h2>
        <p className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
          Trusted by UAE’s Leading Organizations
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          From global hospitality groups to top-tier EPC contractors, our partners
          rely on Techcare for quality and consistency.
        </p>

        {/* Animated Logo Ticker */}
        <div className="relative mt-12">
          <div className="overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
            <div className="flex w-max animate-marquee [--duration:90s]">
              {[...allClients, ...allClients].map((client, i) => (
                <ClientLogo key={i} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
