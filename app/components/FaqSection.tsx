"use client";
import { motion, AnimatePresence } from "framer-motion";
import PlusIcon from "../../public/icons/plus.svg";
import MinusIcon from "../../public/icons/minus.svg";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region."
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions."
  },
  {
    question: "Can I use the service on mobile devices?",
    answer:
      "Yes, our platform is fully responsive and works seamlessly on all major mobile devices and tablets."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via the 'Contact Us' page or by emailing support@example.com. We respond within 24 hours."
  },

  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="py-7  border-b border-white/30 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between ">
          <span className=" text-lg font-bold">{question}</span>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default function Faq() {
  return (
    <>
      <div className="bg-black py-[70px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
        <div className="container">
          <h2 className="text-center tracking-tighter text-5xl sm:text-6xl  sm:w-[648px] mx-auto text-white">Frequently Asked Question</h2>

          <div className="mt-12  max-w-[648px] mx-auto">
            {items.map((data, index) => (
              <AccordionItem
                question={data.question}
                answer={data.answer}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
