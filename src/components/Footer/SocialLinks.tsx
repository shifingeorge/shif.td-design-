import React from 'react';
import { FaMedium, FaWhatsapp, FaFigma } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { socials } from '../../data/socials';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6 mb-6">
      <a href={socials.email} aria-label="Email" className="text-[#ae3321] hover:opacity-80">
        <SiGmail className="w-6 h-6" />
      </a>

      <a href={socials.whatsapp} aria-label="WhatsApp" className="text-[#ae3321] hover:opacity-80" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <a href={socials.figma} aria-label="Figma" className="text-[#ae3321] hover:opacity-80" target="_blank" rel="noopener noreferrer">
        <FaFigma className="w-6 h-6" />
      </a>

      <a href={socials.medium} aria-label="Medium" className="text-[#ae3321] hover:opacity-80" target="_blank" rel="noopener noreferrer">
        <FaMedium className="w-6 h-6" />
      </a>
    </div>
  );
}
