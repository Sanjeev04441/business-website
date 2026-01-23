// src/app/admin/layout.tsx

import '../../styles/admin-colors.css';
import React from 'react';

export const metadata = {
  title: 'Admin Panel | SDB Label',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-root min-h-screen">
      {children}
    </div>
  );
}
