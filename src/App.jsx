import { useEffect, useState } from 'react'
import './App.css'
import profilePic from './assets/ProfilePicture.png'
import simpleParkImage from './assets/SimplePark.png'
import openRemoteImage from './assets/OpenRemote.png'
import citricLabsXPSVImage from './assets/CitricLabsXPSV.png'
import peakImage from './assets/PEAK.png'
import openRemoteWireframe1 from './assets/OpenRemote/Assets Page - Integrator.png'
import openRemoteWireframe2 from './assets/OpenRemote/Assets Page - Integrator-1.png'
import openRemoteDataAnalyst from './assets/OpenRemote/Assets Page - Data Analyst.png'
import openRemoteIntegratorA from './assets/OpenRemote/Assets Page - Integrator 1.png'
import openRemoteIntegratorB from './assets/OpenRemote/Assets Page - Integrator2.png'
import openRemoteIntegratorC from './assets/OpenRemote/Assets Page - Integrator3.png'
import openRemoteIntegratorD from './assets/OpenRemote/Assets Page - Integrator4.png'
import openRemoteIntegratorE from './assets/OpenRemote/Assets Page - Integrator5.png'
import openRemoteTechnician from './assets/OpenRemote/Assets Page - Technician.png'
import openRemoteViewer from './assets/OpenRemote/Assets Page - Viewer.png'
import simpleParkFilter from './assets/SimplePark/filters.png'
import simpleParkHome from './assets/SimplePark/home.png'
import simpleParkMapItemsClicked from './assets/SimplePark/map with items when clicked.png'
import simpleParkMapItems from './assets/SimplePark/map with items.png'
import simpleParkMap from './assets/SimplePark/map.png'
import simpleParkParkingSpotItem from './assets/SimplePark/parking spot item.png'
import simpleParkSearchActive from './assets/SimplePark/search location active.png'
import simpleParkSearch from './assets/SimplePark/search location.png'
import citricInsightsSpotlight from './assets/CitricLabsXPSV/Insights Spotlight.png'
import citricRegions from './assets/CitricLabsXPSV/Regions.png'
import citricRegionsAlt from './assets/CitricLabsXPSV/Regions-1.png'
import citricEmotionTimeline from './assets/CitricLabsXPSV/V2 Emotion Timeline.png'
import citricMatchEmotionTimeline from './assets/CitricLabsXPSV/V2 Match Emotion TimeLine.png'
import curriculumVitae from './assets/CurriculumVitae.pdf'
import peakFrameMain from './assets/PEAK/Frame.png'
import peakFrameAlt1 from './assets/PEAK/Frame-1.png'
import peakFrameAlt2 from './assets/PEAK/Frame-2.png'
import peakLogin from './assets/PEAK/Login.png'
import peakRegister from './assets/PEAK/Register.png'
import peakUserDetails from './assets/PEAK/User details.png'
import peakUserDetails1 from './assets/PEAK/User details-1.png'
import peakUserDetails2 from './assets/PEAK/User details-2.png'
import peakIntegrationOverview from './assets/PEAK/Group 444.png'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigateTo = (nextPath) => (event) => {
    event.preventDefault()
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
      setPath(nextPath)
    }
  }

  const openWireframe = (event) => {
    const image = event.target.closest('img')
    if (!image) return
    setLightboxImage({ src: image.src, alt: image.alt })
  }

  const closeLightbox = () => setLightboxImage(null)

  const isAbout = path === '/about'
  const isProjects = path === '/projects'
  const isSimpleparkCase = path === '/projects/simplepark'
  const isOpenRemoteCase = path === '/projects/openremote'
  const isCitricLabsCase = path === '/projects/citriclabsxpsv'
  const isPeakCase = path === '/projects/peak'

  useEffect(() => {
    const titles = {
      '/': 'Home - Sarvin',
      '/about': 'About - Sarvin',
      '/projects': 'Projects - Sarvin',
      '/projects/simplepark': 'Simplepark - Sarvin',
      '/projects/openremote': 'OpenRemote - Sarvin',
      '/projects/citriclabsxpsv': 'CitricLabsXPSV - Sarvin',
      '/projects/peak': 'PEAK - Sarvin',
    }

    document.title = titles[path] ?? 'Sarvin Portfolio'
  }, [path])

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setLightboxImage(null)
      }
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <main
      className={
        isAbout
          ? 'about-page'
          : isProjects
            ? 'projects-page'
            : isSimpleparkCase
              ? 'case-page'
              : isOpenRemoteCase
                ? 'case-page'
                : isCitricLabsCase
                  ? 'case-page'
                  : isPeakCase
                    ? 'case-page'
              : 'home-page'
      }
    >
      {!isAbout && (
        <div className="background-art" aria-hidden="true">
          <span className="blob blob-top"></span>
          <span
            className={`blob ${isProjects || isSimpleparkCase || isOpenRemoteCase || isCitricLabsCase || isPeakCase ? 'blob-projects' : 'blob-main'}`}
          ></span>
        </div>
      )}

      <header className="nav">
        <a className="brand brand-link" href="/" onClick={navigateTo('/')}>
          <div className="brand-mark">SS</div>
          <div className="brand-text">
            <p className="name">Sarvin Satchithanantam</p>
            <p className="role">UX/UI DESIGNER</p>
          </div>
        </a>

        <nav className="menu">
          <a href="/about" onClick={navigateTo('/about')}>
            About Me
          </a>
          <a href="/projects" onClick={navigateTo('/projects')}>
            Projects
          </a>
          <a href="mailto:sarvin_s@hotmail.com">Contact</a>
        </nav>

        <a className="linkedin" href="#" aria-label="LinkedIn profile">
          in
        </a>
      </header>

      {isAbout ? (
        <section className="about-content">
          <section className="about-hero" id="about">
            <div className="intro-copy">
              <h1>
                UX/UI designer with a background in Media Design. Based in
                Roermond, The Netherlands
              </h1>
            </div>
            <div className="profile-wrap">
              <img src={profilePic} alt="Profile portrait of Sarvin" />
            </div>
          </section>

          <section className="about-body">
            <div className="about-grid">
              <p className="label">BIO</p>
              <div className="bio-text">
                <p>
                  Starting out in ICT & Media Design, I always had a passion for
                  creating visually appealing work. But I wanted more than just
                  aesthetics, I wanted to understand how people interact with
                  what I create. That curiosity led me to UX design, where I
                  found the perfect blend of creativity and problem-solving.
                </p>
                <p>
                  Now, I design digital experiences that are not only beautiful
                  but also intuitive and user-centered. When I&apos;m not
                  designing, you&apos;ll find me exploring new places and traveling.
                </p>
              </div>
            </div>

            <div className="about-grid skills-grid">
              <p className="label">SKILLS</p>
              <div className="skills-columns">
                <div>
                  <p>Visual Design & Branding</p>
                  <p>User Interface Design</p>
                  <p>User Experience Design</p>
                  <p>Market & User Research</p>
                  <p>Wire-framing & Prototyping</p>
                  <p>Information Architecture</p>
                  <p>User Flows</p>
                </div>
                <div className="tools-column">
                  <p className="sub-label">DESIGN TOOLS</p>
                  <p>Figma</p>
                  <p>Illustrator</p>
                  <p>InDesign</p>
                  <p>Photoshop</p>
                </div>
              </div>
            </div>

            <div className="about-grid">
              <p className="label">EDUCATION</p>
              <div className="edu-list">
                <div className="edu-row">
                  <p>UX/UI Design</p>
                  <span>Fontys Hogescholen Eindhoven (Currently)</span>
                </div>
                <div className="edu-row">
                  <p>Software Engineering</p>
                  <span>Fontys Hogescholen Venlo (2018-2019)</span>
                </div>
                <div className="edu-row">
                  <p>HAVO</p>
                  <span>BC Broekhin te Roermond (2018)</span>
                </div>
               
              </div>
            </div>

            <a
              className="resume-btn"
              href={curriculumVitae}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Resume
            </a>
          </section>
        </section>
      ) : isProjects ? (
        <section className="projects-content" id="projects">
          <div className="projects-grid">
            <a
              className="project-card project-card-link"
              href="/projects/simplepark"
              onClick={navigateTo('/projects/simplepark')}
            >
              <img
                className="project-thumb project-thumb-image"
                src={simpleParkImage}
                alt="Simplepark app preview"
              />
              <p className="project-tag">UX TO UI CASE STUDY</p>
              <h3>Simplepark</h3>
              <p className="project-desc">
                A peer-to-peer parking app where private driveway owners can
                rent out available spots and drivers can book them instantly.
              </p>
              <span className="project-link">
                View Case Study &#8594;
              </span>
            </a>

            <a
              className="project-card project-card-link"
              href="/projects/openremote"
              onClick={navigateTo('/projects/openremote')}
            >
              <img
                className="project-thumb project-thumb-image"
                src={openRemoteImage}
                alt="OpenRemote app preview"
              />
              <p className="project-tag">PRODUCT FEATURE DESIGN</p>
              <h3>OpenRemote</h3>
              <p className="project-desc">
                A Manager UI redesign based on stakeholder insights, balancing
                the needs of Integrators and Manufacturers across complex
                technical workflows.
              </p>
              <span className="project-link">
                View Case Study &#8594;
              </span>
            </a>

            <a
              className="project-card project-card-link"
              href="/projects/citriclabsxpsv"
              onClick={navigateTo('/projects/citriclabsxpsv')}
            >
              <img
                className="project-thumb project-thumb-image"
                src={citricLabsXPSVImage}
                alt="CitricLabsXPSV project preview"
              />
              <p className="project-tag">WEB EXPERIENCE</p>
              <h3>CitricLabsXPSV</h3>
              <p className="project-desc">
                A web product concept focused on simplifying user journeys,
                improving information hierarchy, and increasing task completion.
              </p>
              <span className="project-link">
                View Case Study &#8594;
              </span>
            </a>

            <a
              className="project-card project-card-link"
              href="/projects/peak"
              onClick={navigateTo('/projects/peak')}
            >
              <img
                className="project-thumb project-thumb-image"
                src={peakImage}
                alt="PEAK project preview"
              />
              <p className="project-tag">PERSONAL PROJECT</p>
              <h3>PEAK</h3>
              <p className="project-desc">
                A personal fitness concept that combines AI coaching with health
                data, including smartwatch integration for real-time workout
                support and progress tracking.
              </p>
              <span className="project-link">
                View Case Study &#8594;
              </span>
            </a>
          </div>
        </section>
      ) : isSimpleparkCase ? (
        <section className="case-content">
          <p className="case-kicker">CASE STUDY</p>
          <h1 className="case-title">Simplepark</h1>
          <img className="case-hero-image" src={simpleParkImage} alt="Simplepark case visual" />

          <section className="case-section">
            <h2>Project Overview</h2>
            <p>
              Simplepark is a peer-to-peer parking concept, similar to EasyPark
              combined with an Airbnb model. The app allows people with private
              parking spaces to rent them out, while drivers can discover,
              compare, and reserve spots near their destination.
            </p>
          </section>

          <section className="case-meta">
            <div>
              <h3>Timeline</h3>
              <p>3 Weeks</p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>UX Research, UI Design</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Figma, Illustrator</p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">THE CHALLENGE</p>
              <h3>City drivers need parking, while private spots stay unused</h3>
            </div>
            <div className="case-text-col">
              <p>
                In dense urban areas, public parking is often expensive,
                crowded, or hard to find. At the same time, many private
                driveways and parking spots remain empty for large parts of the
                day.
              </p>
              <p>
                The core challenge was to create a trusted two-sided platform:
                hosts should be able to list and manage availability with ease,
                and drivers should quickly book reliable nearby spots.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">OBJECTIVE/GOAL</p>
            </div>
            <div className="case-text-col">
              <p>
                This UX project aims to design a parking marketplace where users
                can either rent out their private parking spaces or book
                available spots on demand. The app includes search, map
                discovery, spot details, and booking confirmation flows.
              </p>
              <p>
                The goal is to reduce time spent searching for parking, improve
                parking availability, and create extra value for spot owners
                through a simple and trustworthy rental experience.
              </p>
            </div>
          </section>

          <section className="case-process">
            <h2>My Design Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <span>1</span>
                <p>Research</p>
              </div>
              <div className="process-step">
                <span>2</span>
                <p>Define</p>
              </div>
              <div className="process-step">
                <span>3</span>
                <p>Ideate</p>
              </div>
              <div className="process-step">
                <span>4</span>
                <p>Prototype</p>
              </div>
              <div className="process-step">
                <span>5</span>
                <p>Test</p>
              </div>
            </div>
          </section>

          <section className="wireframes-section">
            <div className="wireframes-header">
              <h2>High Fidelity Wireframes</h2>
              <span className="wireframes-chip">Mobile Prototype</span>
            </div>
            <p className="wireframes-copy">
              After producing low-fidelity and medium-fidelity concepts, these
              high-fidelity wireframes were tested and refined through multiple
              iterations.
            </p>
            <div className="simplepark-wireframe-grid" onClick={openWireframe}>
              <img src={simpleParkHome} alt="Simplepark wireframe home screen" />
              <img src={simpleParkMap} alt="Simplepark wireframe map screen" />
              <img src={simpleParkMapItems} alt="Simplepark wireframe map items screen" />
              <img
                src={simpleParkMapItemsClicked}
                alt="Simplepark wireframe map item details screen"
              />
              <img src={simpleParkParkingSpotItem} alt="Simplepark wireframe parking spot details" />
              <img src={simpleParkSearch} alt="Simplepark wireframe search location screen" />
              <img src={simpleParkSearchActive} alt="Simplepark wireframe active location search" />
              <img src={simpleParkFilter} alt="Simplepark wireframe filters screen" />
            </div>
          </section>

          <section className="case-two-col usability-section">
            <div className="case-label-col">
              <h2>Usability testing</h2>
            </div>
            <div className="case-text-col">
              <p>
                I conducted moderated usability testing sessions to identify
                friction points and measure completion rates. Participants were
                observed while attempting core flows in the prototype.
              </p>
              <p>
                <strong>Scenario 1:</strong> Search for parking near a destination
                and select an available spot from the map.
                <br />
                <strong>Scenario 2:</strong> Review spot details (price, distance,
                and availability) and complete a booking.
                <br />
                <strong>Scenario 3:</strong> Apply filters to compare options and
                find the best match for the user&apos;s needs.
              </p>
            </div>
          </section>

          <section className="results-section">
            <h2>Results</h2>
            <div className="results-row">
              <p className="results-note">
                Usability sessions showed that participants could complete the
                core journey faster after the revised map, filters, and spot
                detail flow were introduced.
              </p>
              <p className="results-note">
                Most issues were related to information clarity rather than
                navigation itself, which confirmed that improving hierarchy and
                decision support had the biggest impact.
              </p>
            </div>
          </section>

          <section className="feedback-section">
            <h2>User Feedback:</h2>
            <div className="feedback-grid">
              <blockquote>
                <span>&ldquo;</span>
                It was a unique visual process and made navigation feel clear.
              </blockquote>
              <blockquote>
                <span>&ldquo;</span>
                Everything felt personal and helped me know exactly what to do
                next.
              </blockquote>
              <blockquote>
                <span>&ldquo;</span>
                The app made me want to keep using it because it feels simple
                and supportive.
              </blockquote>
            </div>
          </section>
        </section>
      ) : isOpenRemoteCase ? (
        <section className="case-content">
          <p className="case-kicker">CASE STUDY</p>
          <h1 className="case-title">OpenRemote</h1>
          <img className="case-hero-image" src={openRemoteImage} alt="OpenRemote case visual" />

          <section className="case-section">
            <h2>Project Overview</h2>
            <p>
              This case study focuses on redesigning OpenRemote&apos;s Manager UI
              by grounding decisions in user archetype research. OpenRemote is a
              flexible open-source IoT platform with a broad audience, and the
              current interface does not consistently support each user group.
            </p>
          </section>

          <section className="case-meta">
            <div>
              <h3>Timeline</h3>
              <p>2 Weeks</p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>UX/UI Design</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Figma, Photoshop</p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">THE CHALLENGE</p>
              <h3>Designing one UI for highly diverse OpenRemote users</h3>
            </div>
            <div className="case-text-col">
              <p>
                Stakeholder interviews and analysis showed that OpenRemote users
                are mainly split into two major groups: <strong>Integrators</strong>{' '}
                and <strong>Manufacturers</strong>, each with very different
                goals, skills, and frustrations.
              </p>
              <p>
                The redesign challenge is to make the Manager UI usable,
                intuitive, and efficient for both technical and non-technical
                users while keeping flexibility for complex workflows.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">USER ARCHETYPES</p>
              <h3>Integrator and Manufacturer user groups</h3>
            </div>
            <div className="case-text-col">
              <p>
                <strong>Integrator:</strong> technical users focused on
                connecting systems, setting up agents, APIs, and automation.
              </p>
              <p>
                Subgroups include <strong>Technician</strong> (setup and
                troubleshooting), <strong>Data Analyst</strong> (rules,
                dashboards, monitoring), and <strong>Conceptual Designer</strong>{' '}
                (low-code experimentation and rapid concept testing).
              </p>
              <p>
                <strong>Manufacturer:</strong> hardware providers/OEM teams that
                use OpenRemote to manage connected devices and integrations.
                Includes the <strong>OEM Developer</strong> and the{' '}
                <strong>Viewer</strong>, a non-technical user focused on reading
                dashboards and alerts.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">INSIGHTS</p>
              <h3>Key research outcomes for redesign direction</h3>
            </div>
            <div className="case-text-col">
              <p>
                The current Manager UI does not adequately support all
                archetypes: some users are overwhelmed by complexity, while
                others need more flexibility and visibility for advanced tasks.
              </p>
              <p>
                By defining archetypes clearly, future decisions can be
                intentional: targeted navigation, role-based prioritization, and
                better customization options.
              </p>
              <p>
                Recommendation from this phase: evaluate and prototype different
                frameworks for the redesign, then apply UI improvements based on
                archetype needs.
              </p>
            </div>
          </section>

          <section className="wireframes-section openremote-wireframes">
            <div className="wireframes-header">
              <h2>Wireframes & Iterations</h2>
              <span className="wireframes-chip">Integrator Flow</span>
            </div>
            <p className="wireframes-copy">
              These wireframes show iteration steps for the integrator-focused
              assets page, aimed at improving clarity, hierarchy, and faster
              decision making.
            </p>
            <div className="openremote-wireframe-grid" onClick={openWireframe}>
              <img src={openRemoteWireframe1} alt="OpenRemote integrator assets page wireframe" />
              <img src={openRemoteWireframe2} alt="OpenRemote integrator assets page wireframe iteration" />
              <img src={openRemoteDataAnalyst} alt="OpenRemote data analyst assets page wireframe" />
              <img src={openRemoteIntegratorA} alt="OpenRemote integrator wireframe variation 1" />
              <img src={openRemoteIntegratorB} alt="OpenRemote integrator wireframe variation 2" />
              <img src={openRemoteIntegratorC} alt="OpenRemote integrator wireframe variation 3" />
              <img src={openRemoteIntegratorD} alt="OpenRemote integrator wireframe variation 4" />
              <img src={openRemoteIntegratorE} alt="OpenRemote integrator wireframe variation 5" />
              <img src={openRemoteTechnician} alt="OpenRemote technician assets page wireframe" />
              <img src={openRemoteViewer} alt="OpenRemote viewer assets page wireframe" />
            </div>
          </section>
        </section>
      ) : isCitricLabsCase ? (
        <section className="case-content">
          <p className="case-kicker">CASE STUDY</p>
          <h1 className="case-title">CitricLabsXPSV</h1>
          <img
            className="case-hero-image"
            src={citricLabsXPSVImage}
            alt="CitricLabsXPSV case visual"
          />

          <section className="case-section">
            <h2>Project Overview</h2>
            <p>
              This dashboard case study was developed in collaboration with
              Citriclabs for the PSV marketing team. The core objective was to
              transform high-volume scraped media data into clear and actionable
              insights that can be used in day-to-day campaign decisions.
            </p>
          </section>

          <section className="case-meta">
            <div>
              <h3>Timeline</h3>
              <p>Multiple Iterations</p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>UX Research, Data Visualization, UI Design</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Figma, FigJam, Heuristic Evaluation</p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">THE CHALLENGE</p>
              <h3>Bulk media data was difficult to interpret and apply quickly</h3>
            </div>
            <div className="case-text-col">
              <p>
                Citriclabs collects PSV mentions from social media, news
                platforms, blogs, and articles. The PSV marketing team receives
                large raw exports, but these datasets lacked contextual structure
                for quick decision-making.
              </p>
              <p>
                The design challenge was to build a professional dashboard that
                prioritizes clarity, comparability, and speed so marketers can
                identify trends and act immediately.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">APPROACH</p>
              <h3>Client criteria + UX heuristics + data-vis principles</h3>
            </div>
            <div className="case-text-col">
              <p>
                The process combined client-driven criteria (clarity, usability,
                professional consistency) with Nielsen Norman heuristics
                (visibility of system status, user control and freedom,
                consistency and standards, aesthetic/minimalist design).
              </p>
              <p>
                Material Design data visualization guidelines were used for chart
                selection, visual hierarchy, functional color use, and coherent
                dashboard behavior.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">ITERATIONS</p>
              <h3>From exploration to focused final dashboard concepts</h3>
            </div>
            <div className="case-text-col">
              <p>
                Three major visualization tracks were explored: Match Emotion
                Timeline, Regions, and Rival Club Mentions Trend. Match Emotion
                Timeline evolved from a basic trend chart into a vertical
                timeline with filters, engagement context, and event tooltips.
              </p>
              <p>
                The Regions concept started with sentiment mapping per province,
                but due to missing location-source data in the dataset, the final
                direction shifted toward Rival Club Mentions. Multiple chart
                types were tested, and a vertical bar chart was selected as final
                due to readability and scalability.
              </p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">OUTCOME</p>
              <h3>Actionable insights for a time-constrained marketing team</h3>
            </div>
            <div className="case-text-col">
              <p>
                The final concepts make emotional shifts, competitor visibility,
                and trend moments understandable at a glance. This supports faster
                content timing decisions and stronger campaign planning.
              </p>
              <p>
                The project demonstrates how raw scraped media data can be turned
                into a practical visual product that improves confidence and speed
                in marketing decision-making.
              </p>
            </div>
          </section>

          <section className="wireframes-section citric-wireframes">
            <div className="wireframes-header">
              <h2>Wireframes & Iterations</h2>
              <span className="wireframes-chip">PSV CitricLabs</span>
            </div>
            <p className="wireframes-copy">
              These screens capture the dashboard and insights iterations used to
              refine information hierarchy, regional breakdowns, and emotion
              timeline readability.
            </p>
            <div className="citric-wireframe-grid" onClick={openWireframe}>
              <img src={citricInsightsSpotlight} alt="CitricLabs insights spotlight wireframe" />
              <img src={citricRegions} alt="CitricLabs regions wireframe" />
              <img src={citricRegionsAlt} alt="CitricLabs regions alternative wireframe" />
              <img src={citricEmotionTimeline} alt="CitricLabs emotion timeline wireframe" />
              <img
                src={citricMatchEmotionTimeline}
                alt="CitricLabs match emotion timeline wireframe"
              />
            </div>
          </section>
        </section>
      ) : isPeakCase ? (
        <section className="case-content">
          <p className="case-kicker">CASE STUDY</p>
          <h1 className="case-title">PEAK</h1>
          <img className="case-hero-image" src={peakImage} alt="PEAK case visual" />

          <section className="case-section">
            <h2>Project Overview</h2>
            <p>
              PEAK is a personal fitness project where I designed an AI-assisted
              app to help users reach goals through coaching, progress insights,
              and personal guidance. The concept includes both mobile and
              smartwatch experiences to support users during workouts.
            </p>
          </section>

          <section className="case-meta">
            <div>
              <h3>Timeline</h3>
              <p>3 Weeks</p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>UX/UI Design, Product Concept, AI Integration</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Figma, Google Gemini, WearOS, Flutter, Health Connect</p>
            </div>
          </section>

          <section className="case-two-col">
            <div className="case-label-col">
              <p className="case-label">THE CHALLENGE</p>
              <h3>Turning health data into actionable daily coaching</h3>
            </div>
            <div className="case-text-col">
              <p>
                The challenge was to combine activity and progress data with AI
                assistance in a way that feels clear, motivating, and practical
                in everyday use.
              </p>
              <p>
                After designing the mobile app experience, I also worked on
                smartwatch integration to support quick check-ins, progress
                visibility, and on-the-go coaching moments.
              </p>
            </div>
          </section>

          <section className="wireframes-section">
            <div className="wireframes-header">
              <h2>Wireframes & Integration Screens</h2>
              <span className="wireframes-chip">PEAK App + Watch Flow</span>
            </div>
            <p className="wireframes-copy">
              These screens show key parts of the PEAK experience, from onboarding
              and profile setup to app and smartwatch integration concepts.
            </p>
            <div className="openremote-wireframe-grid" onClick={openWireframe}>
              <img src={peakLogin} alt="PEAK login screen" />
              <img src={peakRegister} alt="PEAK register screen" />
              <img src={peakFrameMain} alt="PEAK main app flow screen" />
              <img src={peakFrameAlt1} alt="PEAK app flow variation 1" />
              <img src={peakFrameAlt2} alt="PEAK app flow variation 2" />
              <img src={peakUserDetails} alt="PEAK user details screen" />
              <img src={peakUserDetails1} alt="PEAK user details variation 1" />
              <img src={peakUserDetails2} alt="PEAK user details variation 2" />
              <img src={peakIntegrationOverview} alt="PEAK smartwatch integration overview" />
            </div>
          </section>

          <section className="results-section">
            <h2>Results</h2>
            <div className="results-row">
              <p className="results-note">
                The project resulted in a working prototype where smartwatch
                data can be used to support real-time coaching moments during
                workouts.
              </p>
              <p className="results-note">
                A key outcome was selecting the right technical direction for the
                product: prioritizing reliable real-time communication over a
                more popular but less suitable integration path.
              </p>
            </div>
          </section>
        </section>
      ) : (
        <>
          <section className="hero" id="home">
            <h1>ux/ui designer</h1>
            <p>
              focused on simplifying complex ideas into clear, intuitive digital
              experiences
            </p>
            <a className="projects-btn" href="/projects" onClick={navigateTo('/projects')}>
              <span aria-hidden="true">&#8594;</span>
              VIEW PROJECTS
            </a>
          </section>

          <section className="home-projects">
            <article className="home-project-row">
              <img src={simpleParkImage} alt="Simplepark preview" />
              <div>
                <p className="project-tag">END-TO-END APPLICATION</p>
                <h3>Simplepark: Private Parking Rental Marketplace</h3>
                <p className="project-desc">
                  A platform where private parking owners can rent out unused
                  spots and drivers can quickly find and book them.
                </p>
                <a
                  href="/projects/simplepark"
                  onClick={navigateTo('/projects/simplepark')}
                  className="project-link"
                >
                  View Case Study &#8594;
                </a>
              </div>
            </article>

            <article className="home-project-row reverse">
              <img src={openRemoteImage} alt="OpenRemote preview" />
              <div>
                <p className="project-tag">PRODUCT FEATURE DESIGN</p>
                <h3>OpenRemote</h3>
                <p className="project-desc">
                  A Manager UI redesign based on stakeholder insights, balancing
                  the needs of Integrators and Manufacturers across complex
                  technical workflows.
                </p>
                <a
                  href="/projects/openremote"
                  onClick={navigateTo('/projects/openremote')}
                  className="project-link"
                >
                  View Case Study &#8594;
                </a>
              </div>
            </article>

            <article className="home-project-row">
              <img src={citricLabsXPSVImage} alt="CitricLabsXPSV preview" />
              <div>
                <p className="project-tag">WEB EXPERIENCE</p>
                <h3>CitricLabsXPSV</h3>
                <p className="project-desc">
                  A web design case focused on improved hierarchy, readability,
                  and conversion-oriented user flows.
                </p>
                <a
                  href="/projects/citriclabsxpsv"
                  onClick={navigateTo('/projects/citriclabsxpsv')}
                  className="project-link"
                >
                  View Case Study &#8594;
                </a>
              </div>
            </article>

            <article className="home-project-row reverse">
              <img src={peakImage} alt="PEAK preview" />
              <div>
                <p className="project-tag">PERSONAL PROJECT</p>
                <h3>PEAK</h3>
                <p className="project-desc">
                  A personal fitness concept that combines AI coaching with health
                  data, including smartwatch integration for real-time workout
                  support and progress tracking.
                </p>
                <a
                  href="/projects/peak"
                  onClick={navigateTo('/projects/peak')}
                  className="project-link"
                >
                  View Case Study &#8594;
                </a>
              </div>
            </article>
          </section>
        </>
      )}

      <footer className="site-footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <p>
            © 2026 Sarvin Satchithanantam | Get In Touch{' '}
            <a href="mailto:sarvin_s@hotmail.com">sarvin_s@hotmail.com</a>
          </p>
          <a className="footer-linkedin" href="#" aria-label="LinkedIn profile">
            in
          </a>
        </div>
      </footer>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>
          <img
            className="lightbox-image"
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}

export default App
