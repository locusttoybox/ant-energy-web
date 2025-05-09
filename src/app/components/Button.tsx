'use client';
import '../globals.css';
import React from 'react';

interface VariantStyle {
  [key: string]: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineWhite' | 'outlineBlack';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-14 py-2 rounded-xl';

  const variantStyles: VariantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outlineWhite:
      'bg-transparent border-2 border-white text-white hover:bg-black-10 hover:border-accent',
    outlineBlack:
      'bg-secondary border-3 border-accent font-[500] text-background  hover:text-accent hover:bg-accent-10',
    // 'px-6 py-3 text-white bg-gray-2 border-2 border-white rounded-8 shadow-[2px_2px_4px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(227,255,252,0)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] active:translate-y-[2px] transition',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
