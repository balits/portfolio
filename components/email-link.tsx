import React from "react";

export default function EmailLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={`mailto:balits.peter@gmail.com?subject=${encodeURIComponent(
        "Business email"
      )}&body=${encodeURIComponent("What can I do for you?")}`}
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  );
}
