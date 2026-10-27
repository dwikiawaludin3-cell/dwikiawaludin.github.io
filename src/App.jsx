import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Smartphone,
  X,
  Zap
} from 'lucide-react';

const projects = [
  {
    number: '01', type: 'MOBILE APP', name: 'Mobile Attendance System',
    description: 'Aplikasi absensi karyawan berbasis mobile untuk mencatat kehadiran, perjalanan dinas, cuti, sakit, dan izin dalam satu alur kerja.',
    problem: 'Proses kehadiran dan pengajuan aktivitas karyawan perlu diakses dengan mudah, termasuk oleh tim di cabang berbeda.',
    solution: 'Merancang API dengan Go dan aplikasi React Native untuk absensi WFO, scan barcode untuk kantor pusat, pengajuan izin/cuti, perjalanan dinas, serta dashboard harian.',
    stack: ['React Native', 'TypeScript', 'Golang', 'MySQL', 'REST API'],
    image: null, icon: Smartphone, featured: true, visual: 'attendance',
    status: 'IN DEVELOPMENT'
  },
  {
    number: '02', type: 'WEB APPLICATION', name: 'Invoice Premi',
    description: 'Aplikasi pembuatan invoice dengan pengelolaan data polis, premi, informasi pembayaran, dan ekspor PDF.',
    problem: 'Pembuatan invoice membutuhkan format konsisten, detail premi yang terstruktur, serta dokumen yang siap dikirim ke klien.',
    solution: 'Membangun frontend React dan backend Laravel, formulir invoice dinamis, format mata uang, terbilang, informasi rekening, serta pembuatan PDF.',
    stack: ['React', 'Laravel', 'MySQL', 'PDF Generation'],
    image: null, icon: Layers3, featured: true, visual: 'invoice',
    status: 'BUILT'
  },
  {
    number: '03', type: 'BUSINESS SYSTEM', name: 'Nota Dinas Elektronik',
    description: 'Sistem pengelolaan dokumen internal dengan alur konsep, persetujuan, revisi, disposisi, dan penandatangan.',
    problem: 'Alur persuratan internal melibatkan banyak peran dan membutuhkan status dokumen yang jelas.',
    solution: 'Mengembangkan workflow persetujuan berbasis role, penentuan approver bertingkat, pengembalian revisi, dan pencatatan status dokumen.',
    stack: ['Laravel', 'PHP', 'MySQL', 'RBAC', 'Workflow'],
    image: `${import.meta.env.BASE_URL}assets/nde.png`, icon: Braces, visual: 'image'
  },
  {
    number: '04', type: 'ASSET MANAGEMENT', name: 'Asset Management',
    description: 'Sistem pengelolaan data aset perusahaan untuk membantu pencatatan dan pemantauan aset.',
    problem: 'Data aset membutuhkan struktur yang konsisten agar mudah dicari dan dikelola.',
    solution: 'Mengembangkan modul aset dan pengelolaan data berbasis web untuk mendukung operasional internal.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: `${import.meta.env.BASE_URL}assets/asset.png`, icon: Database, visual: 'image'
  },
  {
    number: '05', type: 'DOCUMENT TRACKING', name: 'Terima Surat',
    description: 'Aplikasi pencatatan surat masuk, penerima, penyerahan surat, dan riwayat serah terima.',
    problem: 'Status penyerahan surat perlu ditelusuri, termasuk siapa yang menerima dan kapan surat diserahkan.',
    solution: 'Membangun pencatatan surat beserta histori aksi, proses serah terima, dan rencana bukti foto penyerahan.',
    stack: ['Laravel', 'PHP', 'MySQL', 'File Upload'],
    image: `${import.meta.env.BASE_URL}assets/surat.png`, icon: Globe2, visual: 'image'
  },
];

const skills = [
  { category: 'FRONTEND', items: ['React.js', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Bootstrap'] },
  { category: 'MOBILE', items: ['React Native', 'Expo / React Native tooling', 'Mobile UI', 'REST API Integration'] },
  { category: 'BACKEND', items: ['Golang', 'Laravel', 'PHP', 'REST API', 'Authentication & Authorization'] },
  { category: 'DATA & TOOLS', items: ['MySQL', 'Git & GitHub', 'Vite', 'Postman', 'Linux / Hosting'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>dwiki<span>.</span><small>DEV PORTFOLIO</small></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['work','Projects'],['skills','Skills'],['about','About']].map(([id,label]) =>
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>
          )}
          <a className="mobile-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight size={14}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid"></div>
          <div className="hero-topline mono reveal-item"><span><i className="status-dot"></i> AVAILABLE FOR SELECT PROJECTS</span><span>JAKARTA, INDONESIA · UTC+7</span></div>
          <div className="hero-content">
            <p className="eyebrow reveal-item">FULL-STACK DEVELOPER <span>✳</span> WEB & MOBILE</p>
            <h1 className="reveal-item delay-1">Building digital<br/>tools for <em>real life.</em></h1>
            <p className="hero-desc reveal-item delay-2">Gua Dwiki — developer yang membangun aplikasi web, mobile, dan sistem bisnis untuk bikin pekerjaan sehari-hari jadi lebih sederhana.</p>
            <div className="hero-actions reveal-item delay-3">
              <a className="btn btn-light" href="#work">Explore projects <ArrowDownRight size={16}/></a>
              <a className="btn btn-outline" href="mailto:dwiki@sju.co.id">Contact me <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="hero-bottom mono reveal-item delay-3">
            <span>FOCUS AREAS</span>
            <div><span>WEB APPS</span><b>·</b><span>MOBILE</span><b>·</b><span>BUSINESS SYSTEMS</span></div>
            <a href="#work" aria-label="Scroll to projects"><ArrowDownRight size={18}/></a>
          </div>
          <div className="hero-index mono">01 / 05</div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">SELECTED WORK <span>— 2024 / 2026</span></p><h2>Projects that <em>matter.</em></h2></div>
            <p className="section-note">Beberapa project yang gua kerjakan untuk menyelesaikan kebutuhan operasional nyata.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number} data-reveal>
                  <div className={`project-preview ${project.visual}`}>
                    {project.image ? <img src={project.image} alt={`${project.name} project preview`} loading="lazy"/> : (
                      project.visual === 'attendance' ? <div className="app-mock">
                        <div className="mock-top"><span>09:41</span><span>•••</span></div>
                        <div className="mock-greeting">Good morning, Dwiki <span>✳</span></div>
                        <div className="mock-date">TUESDAY, 27 OCTOBER</div>
                        <div className="mock-check"><small>YOUR ATTENDANCE</small><strong>08:02 <i>●</i></strong><span>Checked in successfully</span></div>
                        <div className="mock-actions"><span>◷<small>Absensi</small></span><span>▤<small>Perdin</small></span><span>＋<small>Pengajuan</small></span></div>
                        <div className="mock-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                      </div> :
                      <div className="invoice-mock">
                        <div className="invoice-top"><span>INVOICE</span><b>PREMI / 2026</b></div>
                        <div className="invoice-line long"></div><div className="invoice-line medium"></div>
                        <div className="invoice-table"><span>POLICY NUMBER</span><span>PREMI (IDR)</span><i></i><i></i><i></i><i></i></div>
                        <div className="invoice-total"><span>TOTAL PREMIUM</span><strong>Rp 24.500.000</strong></div>
                        <div className="invoice-sign">PT SARANA JANESIA UTAMA</div>
                      </div>
                    )}
                    <div className="preview-label mono"><Icon size={13}/>{project.type}</div>
                    {project.status && <span className="project-status mono">{project.status}</span>}
                  </div>
                  <div className="project-info">
                    <div className="project-meta mono"><span>{project.number}</span><span className="meta-line"></span><span>{project.type}</span><ArrowUpRight size={15}/></div>
                    <h3>{project.name}</h3>
                    <p className="project-desc">{project.description}</p>
                    <details className="case-details">
                      <summary>View case study <ArrowRight size={14}/></summary>
                      <div><h4>THE CHALLENGE</h4><p>{project.problem}</p><h4>WHAT I BUILT</h4><p>{project.solution}</p></div>
                    </details>
                    <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="manifesto" data-reveal>
          <span className="manifesto-mark">“</span>
          <p>Good software isn't just about code.<br/><em>It's about making work work better.</em></p>
          <span className="mono manifesto-caption">MY APPROACH / 001</span>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>My tech <em>stack.</em></h2></div>
            <p className="section-note">Teknologi yang gua gunakan untuk membangun produk dari interface sampai API.</p>
          </div>
          <div className="skills-grid" data-reveal>
            {skills.map((group, index) => <div className="skill-group" key={group.category}>
              <div className="skill-heading"><span className="mono">0{index + 1}</span><h3>{group.category}</h3></div>
              <div className="skill-list">{group.items.map((skill) => <span key={skill}>{skill}<ArrowUpRight size={12}/></span>)}</div>
            </div>)}
          </div>
          <div className="stack-callout" data-reveal><Zap size={17}/><p><strong>From interface to infrastructure.</strong> Fokus gua adalah bikin sistem yang mudah dipakai, terintegrasi, dan relevan dengan proses bisnis.</p></div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-label" data-reveal><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-stamp"><Code2 size={28}/><span>BUILD<br/>WITH PURPOSE</span></span></div>
          <div className="about-copy" data-reveal>
            <h2>Curious by nature.<br/><em>Builder by choice.</em></h2>
            <p>Gua tertarik membangun software yang benar-benar dipakai orang — mulai dari sistem internal perusahaan, workflow persetujuan dokumen, sampai aplikasi mobile untuk kebutuhan operasional.</p>
            <p>Gua nyaman bekerja di sisi frontend dan backend, mempelajari teknologi baru, dan mengubah kebutuhan yang rumit jadi alur kerja yang lebih jelas.</p>
            <div className="about-facts"><div><span className="mono">01 / APPROACH</span><strong>Practical problem solving</strong></div><div><span className="mono">02 / INTEREST</span><strong>Web, mobile & business tools</strong></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb"></div>
          <div className="contact-content" data-reveal>
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build<br/><em>something useful.</em></h2>
            <p>Butuh website, aplikasi mobile, atau sistem custom untuk bisnis? Yuk, ngobrolin ide lu.</p>
            <a className="btn btn-light contact-button" href="mailto:dwiki@sju.co.id">Start a conversation <ArrowUpRight size={16}/></a>
          </div>
        </section>
      </main>

      <footer className="footer mono">
        <a className="footer-brand" href="#home">dwiki<span>.</span></a>
        <span>DESIGNED & BUILT WITH PURPOSE</span>
        <div><a href="mailto:dwiki@sju.co.id"><Mail size={14}/> EMAIL</a><a href="https://github.com/dwikiawaludin" target="_blank" rel="noreferrer"><Code2 size={14}/> GITHUB</a><span>© 2026</span></div>
      </footer>
    </>
  );
}

export default App;
