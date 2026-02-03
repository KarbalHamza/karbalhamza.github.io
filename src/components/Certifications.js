import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { certifications } from '../data/certifications';

const Certifications = () => {
  // créer un state dynamique selon le nombre de certifications
  const [isFlipped, setIsFlipped] = useState(
    certifications.reduce((acc, cert) => {
      acc[cert.name] = false;
      return acc;
    }, {})
  );

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2 justify-center">
          {certifications.map((cert) => {
            const Icon = cert.icon === 'github' ? FaGithub
                       : cert.icon === 'sql' ? SiMysql
                       : FaGithub;

            return (
              <ReactCardFlip key={cert.name} isFlipped={isFlipped[cert.name]} flipDirection="horizontal">
                {/* Front Side */}
                <div
                  className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer"
                  onClick={() => handleFlip(cert.name)}
                >
                  <Icon size={40} className={`mx-auto mb-3 ${cert.icon === 'aws' ? 'text-[#FF9900]' : 'text-foreground'}`} />
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">Issued By: {cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.period}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary font-medium"
                  >
                    View Certificate
                  </a>
                </div>

                {/* Back Side */}
                <div
                  className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer"
                  onClick={() => handleFlip(cert.name)}
                >
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-auto rounded-md"
                      loading="lazy"
                    />
                  )}
                </div>
              </ReactCardFlip>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;