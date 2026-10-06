'use client';

import { useState } from 'react';

export function useCallPhone(phone: string) {
  const [isCopied, setIsCopied] = useState(false);

  
  const handleDesktopClick = (e: React.MouseEvent) => {
    const isDesktop = window.matchMedia('(hover: hover)').matches;

    if (isDesktop) {

    e.preventDefault();
    const cleanPhone = phone.replace(/[^0-9+]/g, "");

    navigator.clipboard.writeText(cleanPhone).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch((err) => console.error("Не удалось скопировать номер:", err))
    }
  };

  return {
    isCopied,
    setIsCopied,
    handleDesktopClick,
  };
}