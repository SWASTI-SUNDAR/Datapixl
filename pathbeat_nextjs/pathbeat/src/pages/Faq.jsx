"use client";
import React, { useState } from "react";
import { FaqData } from "../data/FaqData"; // Ensure this path is correct

const Faq = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-[#F7F7FB] px-5 lg:px-28">
      <section id="faq">
        <h1 className="text-center heading text-4xl font-semibold mt-16">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col justify-between gap-8 mt-16 pb-8">
          {FaqData.map((item) => {
            const isOpen = selectedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="border-b-2 bg-white cursor-pointer rounded-xl shadow-lg border-[#E3ECED]"
              >
                <div className="flex justify-between items-center p-8">
                  <h1 className="lg:text-xl heading font-bold text-[#042D3B]">
                    {item.question}
                  </h1>
                  <div className="lg:text-primary shadow lg:text-4xl text-2xl border rounded-full">
                    {isOpen ? <div>-</div> : <div>+</div>}
                  </div>
                </div>
                {isOpen && (
                  <p className="px-8 pb-5 lg:text-[22px]">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Faq;
