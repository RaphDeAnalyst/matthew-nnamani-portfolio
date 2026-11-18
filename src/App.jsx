import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  ClipboardList,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "./siteConfig.js";

const projectUrl = "https://raphdeanalyst.github.io/weekly-ops-brief/";

const capabilities = [
  "Data analysis & reporting",
  "Research & information synthesis",
  "Process improvement",
  "Technical problem-solving",
  "Business communication",
  "Documentation & organisation",
];

const tools = [
  "Python",
  "SQL",
  "Microsoft Excel",
  "Power BI",
  "React",
  "JavaScript",
  "HTML / CSS",
  "Git & GitHub",
  "Workflow automation",
  "Data visualisation",
];

function SocialLink({ href, label, icon: Icon }) {
  if (!href) {
    return (
      <span className="social-link social-link--placeholder" aria-label={`${label} link to be added`}>
        <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
        <span>{label}</span>
        <span className="social-link__note">add URL</span>
      </span>
    );
  }

  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Matthew Nnamani, home">
        <span className="wordmark__initials">MN</span>
        <span className="wordmark__name">Matthew Nnamani</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#approach">Approach</a>
        <a href="#work">Selected work</a>
        <a href="#capabilities">Capabilities</a>
      </nav>
      <a className="header-contact" href="#contact">
        Get in touch <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" /> AI-enabled professional <span className="eyebrow__divider">/</span> Data analyst <span className="eyebrow__divider">/</span> Web developer</p>
        <h1>I turn complex problems into <em>practical solutions.</em></h1>
        <p className="hero__intro">
          I’m Matthew Nnamani, an AI-enabled professional with a background in data
          analysis and technology. I use AI tools and analytical thinking to improve
          workflows, simplify complex information and build practical solutions.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            View my work <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="button button--text" href="#contact">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero__socials" aria-label="Professional profiles">
          <SocialLink href={siteConfig.githubUrl} label="GitHub" icon={Github} />
          <span className="social-divider" aria-hidden="true" />
          <SocialLink href={siteConfig.linkedinUrl} label="LinkedIn" icon={Linkedin} />
        </div>
      </div>

      <aside className="hero-note" aria-label="A practical approach to problem-solving">
        <div className="hero-note__top">
          <span className="hero-note__icon"><Sparkles size={16} aria-hidden="true" /></span>
          <span className="hero-note__caption">A practical way of working</span>
          <span className="hero-note__index">01 — 04</span>
        </div>
        <div className="hero-note__steps">
          {[
            ["01", "Understand the problem"],
            ["02", "Find the useful signal"],
            ["03", "Build and test"],
            ["04", "Improve what matters"],
          ].map(([number, text], index) => (
            <div className={`hero-step ${index === 3 ? "hero-step--last" : ""}`} key={number}>
              <span className="hero-step__number">{number}</span>
              <span className="hero-step__text">{text}</span>
              {index < 3 && <ChevronRight className="hero-step__arrow" size={14} aria-hidden="true" />}
              {index === 3 && <Check className="hero-step__check" size={15} aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className="hero-note__foot">
          <span>Curiosity, made useful.</span>
          <span className="hero-note__line" />
        </div>
      </aside>

      <a className="hero-scroll" href="#approach" aria-label="Scroll to how I work">
        <ArrowDown size={14} aria-hidden="true" /> Scroll to explore
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="approach section-wrap section-block" id="approach">
      <SectionLabel number="01">How I work</SectionLabel>
      <div className="approach__body">
        <h2>Thoughtful analysis.<br /><em>Useful action.</em></h2>
        <div className="approach__text">
          <p>
            I combine analytical thinking, curiosity and practical technology to
            solve problems. I use AI as a productivity and problem-solving partner,
            not simply as a chatbot.
          </p>
          <p>
            My approach is to understand the problem, research possible solutions,
            build, test and improve until the result is genuinely useful.
          </p>
          <p>
            My experience spans research, reporting and statistical analysis, as
            well as teaching, sales operations and business support—work that
            depends on clear communication and careful organisation.
          </p>
          <div className="education-note">
            <span className="education-note__mark">BSc</span>
            <p><strong>Chemistry</strong><span>University of Uyo</span></p>
            <span className="education-note__detail">A foundation in research, evidence and analytical thinking.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ url, title, displayUrl, ariaLabel }) {
  return (
    <div className="project-preview">
      <div className="project-preview__bar">
        <div className="browser-dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="project-preview__url">{displayUrl}</span>
        <a href={url} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <iframe
        className="project-preview__frame"
        src={url}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="project-preview__caption">
        <span><span className="live-dot" /> Live application preview</span>
        <span>Opens in a new window <ArrowUpRight size={12} aria-hidden="true" /></span>
      </div>
    </div>
  );
}

function Project() {
  const projectFeatures = [
    "CSV upload and processing",
    "Data validation and error handling",
    "Overdue and blocked task tracking",
    "Waiting-task identification",
    "Prioritisation and suggested next actions",
    "Executive-ready report, copy and print",
  ];

  return (
    <section className="project section-block" id="work">
      <div className="section-wrap">
        <SectionLabel number="02">Featured project</SectionLabel>
        <div className="project-heading">
          <div>
            <p className="project-heading__type">Independent project <span>·</span> Operations &amp; reporting</p>
            <h2>Weekly Ops <em>Brief</em></h2>
          </div>
          <a className="project-live-link" href={projectUrl} target="_blank" rel="noreferrer">
            Open live application <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="project-layout">
          <div className="project-layout__main">
            <ProjectPreview
              url={projectUrl}
              title="Live preview of the Weekly Ops Brief application"
              displayUrl="raphdeanalyst.github.io / weekly-ops-brief"
              ariaLabel="Open Weekly Ops Brief in a new tab"
            />
            <div className="project-description">
              <span className="project-description__label">The project</span>
              <p>
                An operational reporting tool I independently conceived and
                developed to turn raw task data into a structured weekly executive
                brief.
              </p>
            </div>
          </div>
          <aside className="project-aside">
            <div className="project-aside__block">
              <span className="project-aside__label">The challenge</span>
              <p>
                Managers can spend valuable time reviewing operational updates,
                overdue assignments, blocked tasks and pending decisions just to
                work out what needs attention.
              </p>
            </div>
            <div className="project-aside__rule" />
            <div className="project-aside__block">
              <span className="project-aside__label">The response</span>
              <p>
                A lightweight application that validates operational CSVs,
                surfaces important task statuses, prioritises issues and produces
                a clear weekly brief.
              </p>
            </div>
            <div className="project-aside__rule" />
            <div className="project-aside__block">
              <span className="project-aside__label">My approach</span>
              <p>
                I identified the problem, designed the workflow, used AI-assisted
                development to build it, then tested with realistic datasets and
                iterated on the result.
              </p>
            </div>
          </aside>
        </div>

        <div className="project-details">
          <div className="project-features">
            <span className="project-aside__label">What it does</span>
            <ul>
              {projectFeatures.map((feature) => (
                <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>
              ))}
            </ul>
          </div>
          <div className="project-outcome">
            <span className="project-aside__label">What this demonstrates</span>
            <p>
              Independent problem-solving, initiative, AI-assisted development,
              operational thinking, data processing, workflow design and
              continuous improvement.
            </p>
            {siteConfig.weeklyOpsBriefRepositoryUrl ? (
              <a className="repository-link" href={siteConfig.weeklyOpsBriefRepositoryUrl} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" /> View source on GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <span className="repository-link repository-link--placeholder">
                <Github size={15} aria-hidden="true" /> Repository link to be added
              </span>
            )}
          </div>
        </div>

        <div className="secondary-project">
          <div className="secondary-project__heading">
            <div>
              <p className="project-heading__type">Independent project <span>·</span> Executive workflow intelligence</p>
              <h3>Executive Meeting <em>Intelligence</em></h3>
            </div>
            <a className="project-live-link" href={siteConfig.executiveMeetingIntelligenceUrl} target="_blank" rel="noreferrer">
              Open live application <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="secondary-project__layout">
            <ProjectPreview
              url={siteConfig.executiveMeetingIntelligenceUrl}
              title="Live preview of Executive Meeting Intelligence"
              displayUrl="raphdeanalyst.github.io / executive-meeting-intelligence"
              ariaLabel="Open Executive Meeting Intelligence in a new tab"
            />
            <div className="secondary-project__copy">
              <div>
                <span className="project-aside__label">The project</span>
                <p>
                  A meeting intelligence workspace that brings executive updates,
                  action items, overdue work and pending decisions into one clear
                  operational view.
                </p>
              </div>
              <div>
                <span className="project-aside__label">What it demonstrates</span>
                <p>
                  Independent initiative, executive workflow design, information
                  synthesis, interface implementation and practical operational thinking.
                </p>
              </div>
              <a className="repository-link" href={siteConfig.executiveMeetingIntelligenceRepositoryUrl} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" /> View source on GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="secondary-project">
          <div className="secondary-project__heading">
            <div>
              <p className="project-heading__type">Independent project <span>·</span> Executive communications</p>
              <h3>Executive Inbox <em>&amp; Follow-up Manager</em></h3>
            </div>
            <a className="project-live-link" href={siteConfig.executiveInboxManagerUrl} target="_blank" rel="noreferrer">
              Open live application <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="secondary-project__layout">
            <ProjectPreview
              url={siteConfig.executiveInboxManagerUrl}
              title="Live preview of Executive Inbox & Follow-up Manager"
              displayUrl="raphdeanalyst.github.io / executive-inbox-manager"
              ariaLabel="Open Executive Inbox & Follow-up Manager in a new tab"
            />
            <div className="secondary-project__copy">
              <div>
                <span className="project-aside__label">The project</span>
                <p>
                  A local-first executive inbox workspace that organises messages,
                  highlights items requiring attention and tracks overdue and
                  upcoming follow-ups.
                </p>
              </div>
              <div>
                <span className="project-aside__label">What it demonstrates</span>
                <p>
                  Inbox prioritisation, follow-up tracking, operational organisation,
                  AI-assisted interface development and practical executive support.
                </p>
              </div>
              <a className="repository-link" href={siteConfig.executiveInboxManagerRepositoryUrl} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" /> View source on GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiTools() {
  const aiTools = [
    {
      number: "01",
      title: "Claude AI",
      text: "I use Claude to break down complex problems, research and structure information, evaluate approaches, analyse requirements and develop practical plans.",
      tag: "Thinking & synthesis",
    },
    {
      number: "02",
      title: "Claude Code",
      text: "I use Claude Code to move from ideas to implementation: developing applications, debugging issues, improving existing systems and testing solutions.",
      tag: "Building & iteration",
    },
    {
      number: "03",
      title: "GitHub Copilot",
      text: "I use GitHub Copilot as an additional AI-assisted development tool to support my coding workflow and help me implement ideas efficiently.",
      tag: "Development support",
    },
  ];

  return (
    <section className="ai section-wrap section-block" id="ai">
      <SectionLabel number="03">Working with AI</SectionLabel>
      <div className="ai__heading">
        <h2>AI as a practical<br /><em>working tool.</em></h2>
        <p>
          I choose tools to match the task—and stay accountable for the result.
          AI can accelerate the work; judgement, review and validation remain mine.
        </p>
      </div>
      <div className="ai-grid">
        {aiTools.map((tool) => (
          <article className="ai-card" key={tool.number}>
            <div className="ai-card__top">
              <span className="ai-card__number">{tool.number}</span>
              <span className="ai-card__tag"><CircleDot size={11} aria-hidden="true" />{tool.tag}</span>
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.text}</p>
            <span className="ai-card__bottom"><span /> Reviewed by me</span>
          </article>
        ))}
      </div>
      <div className="ai-note">
        <span className="ai-note__icon"><ClipboardList size={17} aria-hidden="true" /></span>
        <p><strong>Human judgement stays in the loop.</strong> I review, test and validate AI-assisted outputs before relying on them.</p>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="capabilities section-wrap section-block" id="capabilities">
      <SectionLabel number="04">Other capabilities</SectionLabel>
      <div className="capabilities__layout">
        <div>
          <h2>Good work takes<br /><em>more than tools.</em></h2>
          <p className="capabilities__intro">
            I bring clear communication and thoughtful organisation to the
            analysis, research and problem-solving behind each task.
          </p>
        </div>
        <div className="capabilities__list">
          {capabilities.map((capability, index) => (
            <div className="capability-row" key={capability}>
              <span>0{index + 1}</span>
              <p>{capability}</p>
              <ArrowUpRight size={14} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <div className="toolkit">
        <span className="toolkit__label">Tools &amp; technologies</span>
        <div className="toolkit__items">
          {tools.map((tool) => <span className="tool-chip" key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

function ContactLink({ label, value, href, icon: Icon }) {
  if (!href) {
    return (
      <div className="contact-item contact-item--placeholder">
        <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    );
  }

  return (
    <a className="contact-item" href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
      <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
      <ArrowUpRight className="contact-item__arrow" size={14} aria-hidden="true" />
    </a>
  );
}

function Contact() {
  const emailHref = siteConfig.email ? `mailto:${siteConfig.email}` : "";
  const linkedInLabel = siteConfig.linkedinUrl ? "View LinkedIn profile" : "Add LinkedIn URL";
  const githubLabel = siteConfig.githubUrl ? "View GitHub profile" : "Add GitHub URL";

  return (
    <section className="contact">
      <div className="section-wrap contact__inner" id="contact">
        <SectionLabel number="05">Contact</SectionLabel>
        <div className="contact__content">
          <div>
            <p className="contact__eyebrow">Have a problem worth solving?</p>
            <h2>Let’s build better<br /><em>ways of working.</em></h2>
          </div>
          <div className="contact__details">
            <p>I’m interested in thoughtful teams and work where clear thinking, initiative and practical technology make a difference.</p>
            <div className="contact__links">
              <ContactLink label="Email" value={siteConfig.email || "Add email address"} href={emailHref} icon={Mail} />
              <ContactLink label="LinkedIn" value={linkedInLabel} href={siteConfig.linkedinUrl} icon={Linkedin} />
              <ContactLink label="GitHub" value={githubLabel} href={siteConfig.githubUrl} icon={Github} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="footer__name" href="#home">Matthew Nnamani<span>.</span></a>
      <span className="footer__descriptor">AI-enabled professional · Data · Technology</span>
      <a className="footer__top" href="#home">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
      <span className="footer__copyright">© {new Date().getFullYear()} Matthew Nnamani</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link sr-only" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Project />
        <AiTools />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
