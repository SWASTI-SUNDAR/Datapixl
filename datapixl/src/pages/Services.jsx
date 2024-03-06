import React, { useState } from "react";
import { ServiceData } from "../data/ServiceData";
import { Card } from "../components/ServiceCard";
import Container from "../components/Container";

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <Container>
      <section id="services" className="min-h-screen  container   mx-auto ">
        <h1 className=" text-center text-primary text-[40px] font-semibold mt-12 mb-12">
          What we do?
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
    </Container>
  );
}

export default Services;
