import { Link, Outlet } from "react-router";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import Navbar from "./nav-bar";
export default function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <>
      <motion.header
        className={cn(
          "bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors",
          isScrolled && "bg-background/80",
        )}
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <a
        href="#skip-nav"
        className="bg-background focus-visible:ring-ring rounded-xs shadow-xs focus-visible:ring-3 fixed left-4 top-4 -translate-y-20 border p-2 font-medium transition-transform focus-visible:translate-y-0 focus-visible:ring-offset-2"
      >
        <span>skip to main content</span>
      </a>
       <Link
        to="/"
        className="flex items-center justify-center gap-1"
        aria-label="home"
      >
        henry
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
      </div>
      </motion.header>
      <main className="mx-auto mb-16 w-full max-w-5xl flex-1 px-4 py-24 sm:px-8">
        <Outlet />
      </main>
    </>
  );
}
