import { site } from "@content/site";

// Single source of truth for the resume download CTA (used in a few places).
export function ResumeButton({
  label = "Download resume",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={site.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg " +
        className
      }
    >
      {label} ↓
    </a>
  );
}
