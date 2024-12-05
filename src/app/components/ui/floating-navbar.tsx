"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/components/utils/cn";
import Link from "next/link";

// Main FloatingNav component
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);  // Track previous scroll position
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Monitor scroll position to show/hide the FloatingNav
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - prevScrollY;  // Calculate direction based on previous scrollY

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);  // If direction is negative, scrolling up; if positive, scrolling down
      }

      setPrevScrollY(current);  // Update previous scroll position
    }
  });

  return (
    <>
      {/* Sidebar with fixed items */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            ref={sidebarRef} // Attach ref to sidebar
            className={`sidebar fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transition-transform duration-300 ${
              isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            style={{ zIndex: 9999 }} // Ensure sidebar is on top of all other elements
          >
            <ul className="p-4">
              <li>
                <Link href="/" className="block py-2">Home</Link>
              </li>
              <li>
                <Link href="/student" className="block py-2">Student</Link>
              </li>
              <li>
                <Link href="/gallery" className="block py-2">Gallery</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FloatingNav component */}
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button
          ref={buttonRef} // Attach ref to button
          onClick={(e) => {
            e.stopPropagation(); // Prevent event from propagating to document
            toggleSidebar();
          }}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>||||</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </>
  );
};
