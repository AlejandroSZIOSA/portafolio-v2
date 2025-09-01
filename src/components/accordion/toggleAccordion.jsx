"use client";
import { useState } from "react";
import CVWebProject3 from "../card-views/CVWebProject3";

export default function Accordion({ webProjects }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework for building web applications.",
    },
    {
      title: "What is Tailwind CSS?",
      content: "Tailwind is a utility-first CSS framework.",
    },
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {webProjects.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-3 px-4 text-left"
          >
            <span className="font-medium">{item.title}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <CVWebProject3 project={item} />}
        </div>
      ))}
    </div>
  );
}
