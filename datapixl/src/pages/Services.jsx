import React, { useState } from "react";
import { ServiceData } from "../data/ServiceData";
import { Card } from "../components/ServiceCard";

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section
      id="services"
      className="min-h-screen  container px-14 lg:px-32 mx-auto "
    >
      <h1 className=" text-center text-[40px] font-semibold mt-12 mb-12">
        What We Do?
      </h1>
      <div className="grid lg:grid-cols-2 gap-16 ">
        {ServiceData?.map((item) => (
          <Card
            key={item.id}
            data={item}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
