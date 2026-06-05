'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/explore', label: 'Search' },
    { href: '/agents', label: 'Agents' },
    { href: '/join', label: 'Join', dropdown: true },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-black/10 bg-[#f1f1f1]/95 backdrop-blur'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-[8rem] max-w-[192rem] items-center justify-between px-[2.5rem] md:px-[10rem]">
        <Link href="/" className="text-[2.4rem] font-semibold tracking-[0.24em] text-[#151717]">
          PLOTFLOW
        </Link>

        <div className="hidden items-center gap-[3rem] text-[1.8rem] font-medium text-[#151717] md:flex">
          {links.map((link) => (
            <HeaderLink key={link.href} href={link.href} dropdown={link.dropdown}>
              {link.label}
            </HeaderLink>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-[#151717] px-[2.8rem] py-[1.2rem] text-[1.4rem] font-medium text-white transition hover:bg-black/80"
          >
            Sign In
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-full border border-black/10 bg-white/80 p-3 text-[#151717] md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-black/10 bg-[#f1f1f1] px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5 text-[2rem] text-[#151717]">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:translate-x-1 transition-transform"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-block rounded-full bg-[#151717] px-6 py-4 text-center text-white"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeaderLink({
  href,
  children,
  dropdown,
}: {
  href: string;
  children: React.ReactNode;
  dropdown?: boolean;
}) {
  return (
    <Link href={href} className="group relative flex items-center gap-1 overflow-hidden transition-colors hover:text-black/60">
      <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
      {dropdown && <ChevronDown size={14} className="ml-1 opacity-50" />}
    </Link>
  );
}
