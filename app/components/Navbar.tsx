'use client';

import { JSX, useState } from 'react';
import { Home, LayoutDashboard, Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button (Only visible on mobile) */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </Button>

      {/* Sidebar (Always visible on larger screens) */}
      <aside
        className={`bg-white shadow-md p-4 h-screen transition-all md:w-64 ${
          isOpen ? 'w-64 fixed top-0 left-0 z-50' : 'w-0 hidden'
        } md:flex md:relative flex-col`}
      >
        {/* Close Button (Only for mobile) */}
        <Button
          variant="ghost"
          size="icon"
          className="mb-4 md:hidden self-end"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </Button>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavItem href="/" icon={<Home size={24} />} label="Home" />
          <NavItem href="/dashboard" icon={<LayoutDashboard size={24} />} label="Dashboard" />
          <NavItem href="/settings" icon={<Settings size={24} />} label="Settings" />
        </nav>
      </aside>

      {/* Clickable Overlay (Closes sidebar on mobile) */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

function NavItem({ href, icon, label }: { href: string; icon:JSX.Element; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
