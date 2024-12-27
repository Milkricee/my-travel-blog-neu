import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      {/* Header mit Titel */}
      <button
        onClick={toggleAccordion}
        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
      >
        {title}
      </button>

      {/* Inhalt */}
      {isOpen && (
        <div className="p-4 text-gray-700 bg-white border-t border-gray-300">
          {children}
        </div>
      )}
    </div>
  );
}
