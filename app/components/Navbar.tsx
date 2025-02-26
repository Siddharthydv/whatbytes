'use client';

import { useState } from 'react';
import { Home, LayoutDashboard, Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`h-screen bg-white shadow-md p-4 ${isCollapsed ? 'w-16' : 'w-64'} transition-all`}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="mb-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu size={24} /> : <X size={24} />}
      </Button>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <NavItem href="/" icon={<Home size={24} />} label="Home" isCollapsed={isCollapsed} />
        <NavItem href="/dashboard" icon={<LayoutDashboard size={24} />} label="Dashboard" isCollapsed={isCollapsed} />
        <NavItem href="/settings" icon={<Settings size={24} />} label="Settings" isCollapsed={isCollapsed} />
      </nav>
    </aside>
  );
}

function NavItem({ href, icon, label, isCollapsed }: { href: string; icon: JSX.Element; label: string; isCollapsed: boolean }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
    >
      {icon}
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
}
