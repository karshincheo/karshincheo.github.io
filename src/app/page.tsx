import { site } from "@content/site";
import { projects } from "@content/projects";
import { experience, education } from "@content/experience";
import { ResumeButton } from "@/components/ResumeButton";
import { renderBold } from "@/lib/format";

export default function Home() {
  // Grid when everything fits; horizontal rail once there are 5+ projects.
  const useProjectRail = projects.length > 4;

  return (
    <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16">
      {/* ---------------------------------------------------------------- HERO */}
      <section className="animate-fade-up pb-20 pt-20 sm:pt-28">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            {site.headline}
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.photoPath}
            alt={site.name}
            width={176}
            height={176}
            className="h-28 w-28 shrink-0 rounded-full border border-line object-cover sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          />
        </div>
        <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          {site.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Proof chips — the 20-second skim */}
        {site.proofPoints?.length > 0 && (
          <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
            {site.proofPoints.map((p) => (
              <li
                key={p}
                className="rounded-full border border-line px-3 py-1 text-[13px] font-medium text-fg"
              >
                {p}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={site.links.email}
            className="rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Email me
          </a>
          <a
            href={site.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            WhatsApp
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            GitHub
          </a>
          <ResumeButton />
        </div>
      </section>

      {/* ------------------------------------------------------------- PROJECTS */}
      <Section id="work" eyebrow="Selected work" title="Things I've built">
        {/* Up to 4 projects: a grid that fits the page width (no scrolling).
            5+ projects: switches to a horizontal scroll rail automatically. */}
        <ul
          aria-label={
            useProjectRail ? "Projects — scroll horizontally" : "Projects"
          }
          className={
            useProjectRail
              ? "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
              : "grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          }
        >
          {projects.map((project) => {
            const links = project.links.filter((l) => l.href);
            return (
              <li
                key={project.name}
                className={
                  "flex flex-col rounded-xl border border-line bg-bg p-6 " +
                  (useProjectRail
                    ? "w-[19rem] shrink-0 snap-start sm:w-[21rem] sm:min-h-[21rem]"
                    : "")
                }
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  {project.meta && <span className="meta">{project.meta}</span>}
                </div>
                <p className="mt-3 text-[15px] font-medium leading-snug text-accent">
                  {project.outcome}
                </p>
                <ul className="mt-3 space-y-2">
                  {project.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-sm leading-relaxed text-muted"
                    >
                      <span className="absolute left-0 top-[0.65em] h-px w-2 bg-faint" />
                      {renderBold(b)}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  {links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                      {links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        {useProjectRail && (
          <p className="meta mt-1" aria-hidden="true">
            Scroll →
          </p>
        )}
      </Section>

      {/* ----------------------------------------------------------- EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Where I've worked">
        <div className="space-y-16">
          {experience.map((role) => (
            <div key={role.company}>
              {/* Role header */}
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.company}
                </h3>
                <span className="meta shrink-0">{role.period}</span>
              </div>
              <p className="mt-0.5 text-[15px] text-muted">
                {role.title} · {role.location}
              </p>
              {role.note && (
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-faint">
                  {role.note}
                </p>
              )}

              {/* Each functional area is a card, like the project cards */}
              {role.groups && (
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {role.groups.map((group) => (
                    <li
                      key={group.label}
                      className="flex flex-col rounded-xl border border-line bg-bg p-6"
                    >
                      <h4 className="text-base font-semibold tracking-tight">{group.label}</h4>
                      <ul className="mt-3.5 space-y-2.5">
                        {group.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="relative pl-4 text-sm leading-relaxed text-muted"
                          >
                            <span className="absolute left-0 top-[0.65em] h-px w-2 bg-faint" />
                            {renderBold(b)}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}

              {/* Flat bullets fallback (roles without functional groups) */}
              {role.bullets && (
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-5 leading-relaxed text-muted"
                    >
                      <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-faint" />
                      {renderBold(b)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-14 border-t border-line pt-8">
          <p className="eyebrow mb-5">Education</p>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {education.map((ed) => (
              <div key={ed.school}>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold tracking-tight">{ed.school}</h3>
                  <span className="meta">{ed.period}</span>
                </div>
                <p className="mt-1 text-[15px] text-muted">
                  {ed.credential} · {ed.location}
                </p>
                {ed.detail && (
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-faint">
                    {ed.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ResumeButton label="Download full resume (PDF)" />
        </div>
      </Section>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Small section wrapper — eyebrow label + heading + content.
   Region is labelled by its heading for screen-reader navigation.
-------------------------------------------------------------------------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-line py-20"
    >
      <div className="mb-9">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 id={headingId} className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
