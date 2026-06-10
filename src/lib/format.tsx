import type { ReactNode } from "react";

// Renders **bold** spans inside content strings (projects/experience bullets).
// Bolded phrases also get full foreground color so they pop against muted text.
export function renderBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-fg">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
