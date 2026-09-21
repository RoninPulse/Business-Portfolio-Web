import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-rp-surface border-rp-border text-rp-grey-300',
    red: 'bg-rp-red/10 border-rp-red/30 text-rp-red-bright',
    outline: 'bg-transparent border-rp-border text-rp-grey-500',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
