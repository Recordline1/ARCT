"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { value: 750, label: "PROJECTS DONE" },
  { value: 315, label: "REGULAR CLIENTS" },
  { value: 19, label: "YEARS EXPERIENCE" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-7 md:py-9  bg-background grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-[30px] md:text-[120px] font-secondary leading-none">
            {isInView && (
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />
            )}
          </div>
          <p className="text-sm tracking-[0.2em] text-gray-500 mt-4">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}