'use client';

import { useState } from 'react';

export function useCallPhone(phone: string) {
  const [isCopied, setIsCopied] = useState(false);

  const handleDesktopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phone.replace(/[^0-9+]/g, ""));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return {
    isCopied,
    setIsCopied,
    handleDesktopClick,
  };
}