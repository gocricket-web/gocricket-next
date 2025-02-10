"use client";
import { useState } from "react";
import faqs from "@/data/faq-items";
import Image from "next/image";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="text-white py-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-700 rounded-md p-4 cursor-pointer bg-[#232557]"
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base md:text-lg font-semibold my-1">
                {faq.question}
              </h3>
              {openId === faq.id ? (
                <Image
                  width={15}
                  height={15}
                  alt="Minus Icon"
                  src={"images/minus.svg"}
                />
              ) : (
                <Image
                  width={15}
                  height={15}
                  alt="Plus Icon"
                  src={"images/plus.svg"}
                />
              )}
            </div>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openId === faq.id
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
