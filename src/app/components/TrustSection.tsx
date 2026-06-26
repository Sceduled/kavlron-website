const clients = [
  { name: "IIL", logo: "/logos/clients/IIL.jpeg", url: "https://www.linkedin.com/company/iilstudyabroad/" }
];

const partners = [
  { name: "Mediagarh", logo: "/logos/partners/mediagarh.webp", url: "https://mediagarh.com/" },
  { name: "Drootle", logo: "/logos/partners/drootle.png", url: "https://www.drootle.com/" }
];

export default function TrustSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* End Clients */}
        <div className="mb-20">
          <h2 className="mb-10 text-center text-sm font-bold tracking-widest text-text-muted uppercase">
            Businesses Scaling With Us
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <a 
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-32 w-48 sm:w-56 items-center justify-center border border-border/50 bg-surface-card/30 transition-colors hover:bg-surface-card hover:border-accent-blue/50"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="max-h-16 max-w-[120px] sm:max-w-[140px] object-contain opacity-60 transition-all duration-300 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h2 className="mb-10 text-center text-sm font-bold tracking-widest text-text-muted uppercase">
            Our Agency Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-32 w-48 sm:w-56 items-center justify-center border border-border/50 bg-surface-card/30 transition-colors hover:bg-surface-card hover:border-accent-amber/50"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="max-h-16 max-w-[120px] sm:max-w-[140px] object-contain opacity-60 transition-all duration-300 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
