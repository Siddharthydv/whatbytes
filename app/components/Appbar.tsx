'use client';

import { Button } from '@/components/ui/button';
import { Bell, UserCircle } from 'lucide-react';

export default function AppBar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center rounded-lg">
      {/* Left - Logo & Title */}
      <div className="flex items-center gap-3">
        {/* <Menu size={28} className="text-gray-700 cursor-pointer md:hidden" /> */}
        <h1 className="text-2xl font-bold text-gray-900">WhatBytes</h1>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-5">
        <Button variant="ghost" size="icon">
          <Bell className="text-gray-700" size={24} />
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle className="text-gray-700" size={28} />
        </Button>
      </div>
    </header>
  );
}
