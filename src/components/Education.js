import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              Master's in Digital Information Engineering
            </h3>
            <h4 className="text-sm text-muted-foreground">
              University of Toulouse II – Jean Jaurès
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              2023 - 2025
            </p>
          </div>

          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              Master's in Communication and IT Service Management
            </h3>
            <h4 className="text-sm text-muted-foreground">
              University Hassan II – Casablanca
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              2021 - 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
