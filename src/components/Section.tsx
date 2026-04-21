import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
  variant,
  ariaLabel,
}: {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "bleed";
  ariaLabel?: string;
}) {
  const isBleed = variant === "bleed";

  return (
    <section id={id} className={`section ${isBleed ? "bleed" : ""}`} aria-label={ariaLabel ?? title}>
      <div className={isBleed ? "" : "container"}>
        {(title || subtitle) && (
          <div className="sectionHead">
            {title && <h2 className="sectionTitle">{title}</h2>}
            {subtitle && <p className="sectionSub">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

