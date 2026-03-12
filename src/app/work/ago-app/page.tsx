import Image from "next/image";

import styles from "./styles.module.scss";

export default function AGOApp() {
  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className={styles["project-hero"]}>
        <div className={styles.container}>
          <div className={styles["project-hero__content"]}>
            <div className={styles["project-hero__left"]}>
              <h1 className={styles["project-hero__title"]}>AGO App</h1>
              <p className={styles["project-hero__subtitle"]}>
                Redesigning the Gallery experience
              </p>
              <div className={styles["project-hero__tags"]}>
                <span className={styles.tag}>User Research</span>
                <span className={styles.tag}>Wireframing</span>
                <span className={styles.tag}>Interaction Design</span>
                <span className={styles.tag}>Usability Testing</span>
              </div>
            </div>

            <div className={styles["project-hero__right"]}>
              <div className={styles.heroPreviewCard}>
                <Image
                  src="/work/ago-app/hero.svg"
                  alt="AGO App preview"
                  width={900}
                  height={560}
                  priority
                  sizes="(max-width: 900px) 100vw, 560px"
                  className={styles["project-hero__image"]}
                />
              </div>
            </div>
          </div>

          <div className={styles["project-description"]}>
            <p className={styles["project-description__text"]}>
              AGO: designing an app that enhances the experience of visiting and
              exploring the AGO.
            </p>
          </div>
        </div>
      </div>

      {/* ── PROJECT INFO ─────────────────────────────────── */}
      <div className={styles.container}>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__cards"]}>
            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>Project Overview</h3>
              <p className={styles["info-card__text"]}>
                A redesigned digital experience for the Art Gallery of Ontario,
                created to make visiting, exploring, and learning about art more
                accessible and engaging.
              </p>
              <p className={styles["info-card__detail"]}>Timeline - 8 weeks</p>
              <p className={styles["info-card__detail"]}>
                Tools - Figma, FigJam
              </p>
              <p className={styles["info-card__detail"]}>
                Team - Special Topics Team 6
              </p>
            </div>

            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>My Contributions</h3>
              <p className={styles["info-card__text"]}>
                Research - Market research, surveys, competitive analyses.
              </p>
              <p className={styles["info-card__text"]}>
                User Interface - Wireframing, high fidelity designs, interactive
                prototyping, iterations.
              </p>
              <p className={styles["info-card__text"]}>
                Usability Testing - Scenario based testing with 7 participants.
              </p>
            </div>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>
              Problem Statement
            </h3>
            <p className={styles["project-section__text"]}>
              Visitors often feel overwhelmed or disconnected when navigating
              large galleries, especially when information isn&apos;t accessible
              or available in multiple formats. Traditional audio guides can be
              confusing, and many visitors want modern features like VR tours,
              language support, and clearer wayfinding. The AGO app aims to
              create a more inclusive, informative, and interactive gallery
              experience for both in-person and remote visitors.
            </p>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>Project Goals</h3>
            <p className={styles["project-section__text"]}>
              The goal of the AGO app is to make exploring art easier, more
              accessible, and more engaging for all visitors. It aims to support
              different learning styles, offer multilingual features, and help
              users navigate the gallery confidently. Ultimately, the redesign
              enhances both in-person visits and remote art discovery.
            </p>
          </div>
        </div>

        {/* ── PHASE 1 – RESEARCH ───────────────────────────── */}
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 1 - Research
            </h2>
          </div>

          {/* ── Research Methods Overview ── */}
          <div className={styles.rmSection}>
            <p className={styles.rmEyebrow}>Research Methods</p>
            <div className={styles.rmGrid}>
              <div className={styles.rmItem}>
                <span className={`${styles.rmTag} ${styles.rmTagOrange}`}>
                  Market Research
                </span>
                <p className={styles.rmDuration}>1 week</p>
                <p className={styles.rmDesc}>
                  We went through top Google Reviews and Articles written for
                  the AGO. As well as their social media and website.
                </p>
              </div>
              <div className={styles.rmItem}>
                <span className={`${styles.rmTag} ${styles.rmTagGreen}`}>
                  Competitive Analysis
                </span>
                <p className={styles.rmDuration}>1 week</p>
                <p className={styles.rmDesc}>
                  An analysis was conducted to compare AGO, ROM and MoMA.
                  Also mini SWOT analyses.
                </p>
              </div>
              <div className={styles.rmItem}>
                <span className={`${styles.rmTag} ${styles.rmTagPurple}`}>
                  Surveys
                </span>
                <p className={styles.rmDuration}>2 weeks</p>
                <p className={styles.rmDesc}>
                  A survey was distributed to gather insights from art gallery
                  visitors to understand their needs and pain points better.
                </p>
              </div>
            </div>
          </div>

          {/* ── Market Research – Google Reviews ── */}
          <div className={styles.splitBlock}>
            <div className={`${styles.splitSide} ${styles.splitPink}`}>
              <p className={styles.splitEyebrow}>Market Research</p>
              <h4 className={styles.splitSubhead}>Google Reviews</h4>
              <ul className={styles.splitBullets}>
                <li>
                  Navigation issues with unclear signage for exits, elevators,
                  washrooms, and café making it confusing
                </li>
                <li>
                  High admission cost of $30 for a one-time visit feeling
                  expensive for some visitors
                </li>
                <li>
                  Overwhelming experience with too much to explore in limited
                  time making it difficult to fully enjoy
                </li>
                <li>Free annual pass option hard to find and time-consuming</li>
                <li>
                  Expected bilingual text and posters, but only English was
                  available &ndash; no French.
                </li>
              </ul>
            </div>
            <div className={`${styles.splitSide} ${styles.splitOrange}`}>
              <div className={styles.quoteBlock}>
                <span className={styles.quoteMarkDark}>&ldquo;</span>
                <p className={styles.quoteText}>
                  Inclusivity and Affordability are important to visitors.
                </p>
                <span
                  className={`${styles.quoteMarkDark} ${styles.quoteMarkClose}`}
                >
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* ── Market Research – Article Findings ── */}
          <div className={styles.splitBlock}>
            <div className={`${styles.splitSide} ${styles.splitPink}`}>
              <p className={styles.splitEyebrow}>Market Research</p>
              <h4 className={styles.splitSubhead}>Article Findings</h4>
              <ul className={styles.splitBullets}>
                <li>
                  VR allows museums to reach people who cannot visit physically,
                  including those with disabilities or those living in remote
                  areas.
                </li>
                <li>
                  This approach makes learning more interactive and memorable.
                </li>
                <li>
                  Younger audiences are more inclined to engage with museums
                  through VR experiences.
                </li>
                <li>
                  VR enhances museum marketing strategies by attracting
                  tech-savvy visitors who might not visit traditional
                  exhibitions.
                </li>
                <li>
                  Social media integration of VR content allows museums to
                  expand their reach.
                </li>
              </ul>
            </div>
            <div className={`${styles.splitSide} ${styles.splitOrange}`}>
              <div className={styles.quoteBlock}>
                <span className={styles.quoteMarkDark}>&ldquo;</span>
                <p className={styles.quoteText}>
                  VR Integration is the new era for visiting art galleries
                </p>
                <span
                  className={`${styles.quoteMarkDark} ${styles.quoteMarkClose}`}
                >
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* ── Competitive Analysis – SWOT ── */}
          <div className={styles.swotBlock}>
            <p className={styles.swotEyebrow}>Competitive Analysis</p>
            <p className={styles.swotSubhead}>SWOT Findings</p>
            <div className={styles.swotGrid}>
              <div className={`${styles.swotCell} ${styles.swotCellGreen}`}>
                <p className={styles.swotCellTitle}>Strengths</p>
                <p className={styles.swotCellText}>
                  Strong reputation, vast collection, inclusive access, and
                  community engagement.
                </p>
              </div>
              <div className={`${styles.swotCell} ${styles.swotCellBlue}`}>
                <p className={styles.swotCellTitle}>Weaknesses</p>
                <p className={styles.swotCellText}>
                  High fees, weak digital marketing, limited youth and ethnic
                  outreach.
                </p>
              </div>
              <div className={`${styles.swotCell} ${styles.swotCellYellow}`}>
                <p className={styles.swotCellTitle}>Opportunities</p>
                <p className={styles.swotCellText}>
                  Expand digital engagement, leverage social media, and increase
                  collaborations.
                </p>
              </div>
              <div className={`${styles.swotCell} ${styles.swotCellSalmon}`}>
                <p className={styles.swotCellTitle}>Threats</p>
                <p className={styles.swotCellText}>
                  Competition, economic instability, digital shifts, and
                  external risks.
                </p>
              </div>
            </div>
            <div className={styles.swotFooter}>
              <p className={styles.swotFooterText}>
                <strong>Main Focus</strong>: Enhance digital presence, diversify
                audiences, and strengthen partnerships.
              </p>
            </div>
          </div>

          {/* ── Survey ── */}
          <div className={styles.splitBlock}>
            <div className={`${styles.splitSide} ${styles.splitLavender}`}>
              <p className={styles.splitEyebrow}>Survey</p>
              <h4 className={styles.splitSubhead}>Key Highlights</h4>
              <ul className={styles.splitBullets}>
                <li>
                  <strong>90%</strong> respondents feel{" "}
                  <strong>ticket pricing</strong> is an important factor to
                  their decision of visiting, followed by{" "}
                  <strong>location and ease of access.</strong>
                </li>
                <li>
                  <strong>85%</strong> felt that guided tours with{" "}
                  <strong>accessibility accommodations</strong> are important
                  along with audio descriptions for exhibits.
                </li>
                <li>
                  <strong>Virtual Reality tours</strong> interested 65% of
                  respondents.
                </li>
                <li>
                  <strong>85%</strong> wanted a{" "}
                  <strong>360-degree interactive</strong> exhibit access
                  followed by audio guides and narration.
                </li>
                <li>
                  <strong>90%</strong> respondents would access an art gallery{" "}
                  <strong>virtually</strong> if that option existed.
                </li>
              </ul>
            </div>
            <div className={`${styles.splitSide} ${styles.splitPurple}`}>
              <span className={styles.surveyQuoteMark}>&ldquo;</span>
              <div className={styles.surveyCards}>
                <div className={styles.surveyCard}>
                  <p className={styles.surveyCardText}>
                    I would love audio recordings or transcripts of certain
                    pieces, and more contextual information so I can parse thru
                    the art better!
                  </p>
                  <p className={styles.surveyCardCount}>1 response</p>
                </div>
                <div className={styles.surveyCard}>
                  <p className={styles.surveyCardText}>
                    Make sure that all exhibits are accessible (for wheelchairs,
                    audio descriptions, visual representation (maybe through VR))
                  </p>
                  <p className={styles.surveyCardCount}>1 response</p>
                </div>
                <div className={styles.surveyCard}>
                  <p className={styles.surveyCardText}>
                    What I feel is a major issue with art exhibitions is that
                    people are left to themselves — there might or might not be a
                    description about it, but regardless of that I feel there
                    should be a person explaining the details/history/about the
                    artist etc. This probably is the only way to encourage a
                    wider audience to appreciate art instead of the enthusiasts
                    and the couples on dates.
                  </p>
                  <p className={styles.surveyCardCount}>1 response</p>
                </div>
              </div>
              <span
                className={`${styles.surveyQuoteMark} ${styles.surveyQuoteMarkClose}`}
              >
                &rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* ── PHASE 2 – IDEATION ──────────────────────────── */}
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 2 - Ideation
            </h2>
          </div>

          {/* ── User Persona ── */}
          <div className={styles.persona}>
            <p className={styles.splitEyebrow}>User Persona</p>

            <div className={styles.personaBentoGrid}>
              {/* Avatar */}
              <div className={`${styles.personaBentoCard} ${styles.personaBentoAvatar}`}>
                <img
                  src="/work/ago-app/persona.svg"
                  alt="Elona Gomez"
                  className={styles.personaAvatarImg}
                />
                <div className={styles.personaAvatarInfo}>
                  <p className={styles.personaName}>Elona Gomez</p>
                  <ul className={styles.personaCardList}>
                    <li><strong>Age:</strong> 23 years old</li>
                    <li><strong>Occupation:</strong> Art History Student</li>
                    <li><strong>Location:</strong> Oakville, ON</li>
                  </ul>
                </div>
              </div>

              {/* Background */}
              <div className={`${styles.personaBentoCard} ${styles.personaBentoBackground}`}>
                <p className={styles.personaBentoCardTitle}>🔍 Background</p>
                <ul className={styles.personaCardList}>
                  <li><span className={styles.personaCheck}>✓</span>Loves art and used to attend galleries and conventions regularly.</li>
                  <li><span className={styles.personaCheck}>✓</span>Researches artwork and art history online daily for school.</li>
                  <li><span className={styles.personaCheck}>✓</span>Active on social media &mdash; shares art discoveries with her followers.</li>
                </ul>
              </div>

              {/* Pain Points */}
              <div className={`${styles.personaBentoCard} ${styles.personaBentoPain}`}>
                <p className={styles.personaBentoCardTitle}><span>😕</span> Pain Points</p>
                <ul className={styles.personaCardList}>
                  <li><span className={styles.personaCheck}>✓</span>Unable to visit galleries or art events due to mobility limitations.</li>
                  <li><span className={styles.personaCheck}>✓</span>Commuting is challenging due to lack of accessibility.</li>
                  <li><span className={styles.personaCheck}>✓</span>Existing apps lack screen reader and audio description support.</li>
                  <li><span className={styles.personaCheck}>✓</span>Feels disconnected from live art experiences and the community.</li>
                </ul>
              </div>

              {/* Goals */}
              <div className={`${styles.personaBentoCard} ${styles.personaBentoGoals}`}>
                <p className={styles.personaBentoCardTitle}><span>🎯</span> Goals</p>
                <ul className={styles.personaCardList}>
                  <li><span className={styles.personaCheck}>✓</span>View art comfortably without settling for Google images or YouTube videos.</li>
                  <li><span className={styles.personaCheck}>✓</span>Access detailed exhibit information including artist history and context.</li>
                  <li><span className={styles.personaCheck}>✓</span>Explore galleries through immersive 360&deg; and VR experiences.</li>
                  <li><span className={styles.personaCheck}>✓</span>Find accessible venue maps and wayfinding guides before visiting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Journey Map ── */}
          <div className={styles.journeyBlock}>
            {/* Left: insight panel */}
            <div className={styles.journeyLeft}>
              <p className={styles.splitEyebrow}>Journey Mapping</p>
              <h3 className={styles.journeyInsightHeading}>Elona&rsquo;s Journey</h3>
              <ul className={styles.journeyInsightList}>
                <li><strong>Accessibility Info Hard to Find:</strong> Key details are buried in the website, making planning difficult.</li>
                <li><strong>Ticketing Confusion:</strong> Free annual pass for young visitors is not prominently displayed.</li>
                <li><strong>Transport Planning:</strong> User books accessible transport (Wheel-Trans) to ensure smooth travel.</li>
                <li><strong>Navigation Challenges:</strong> Finding the entrance is easy, but unclear signage makes exiting difficult.</li>
              </ul>
            </div>

            {/* Right: journey map */}
            <div className={styles.journeyRight}>
              {/* Journey map SVG frame */}
              <div className={styles.journeyMapFrame}>
                <img
                  src="/work/ago-app/journey-map.svg"
                  alt="Journey Map: Visit to the Art Gallery"
                  className={styles.journeyMapSvg}
                />
              </div>
            </div>
          </div>

          {/* ── Key Findings ── */}
          <div className={`${styles.splitBlock} ${styles.splitBlockCream}`}>
            <div className={`${styles.splitSide} ${styles.splitCreamLeft}`}>
              <p className={styles.splitEyebrow}>Key Findings</p>
              <h2 className={styles.splitBigTitle}>Key pain points</h2>
              <p className={styles.splitBodyText}>
                Using our Research, personas and journey map we have discovered 4 key pain points.
              </p>
            </div>
            <div className={`${styles.splitSide} ${styles.splitCreamRight}`}>
              <div className={styles.findingsList}>
                <div className={styles.findingItem}>
                  <p className={styles.findingLabel}>Finding 1</p>
                  <p className={styles.findingText}>Finding important information and content on the AGO website is difficult. Especially information on accessibility.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingLabel}>Finding 2</p>
                  <p className={styles.findingText}>Tour guide information is not present on the website. Users need to call AGO for tour info.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingLabel}>Finding 3</p>
                  <p className={styles.findingText}>Commuting to AGO is difficult for users who may be unfamiliar with the area or users with disabilities.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingLabel}>Finding 4</p>
                  <p className={styles.findingText}>Users find it difficult to navigate through the gallery due to ambiguous way finding signage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Solutions & Features ── */}
          <div className={`${styles.splitBlock} ${styles.splitBlockCream}`}>
            <div className={`${styles.splitSide} ${styles.splitCreamLeft}`}>
              <p className={styles.splitEyebrow}>Solutions &amp; Features</p>
              <h2 className={styles.splitBigTitle}>The Solution</h2>
              <p className={styles.splitBodyText}>
                Creating an app for AGO to help users with way finding and highlighting collections.
              </p>
            </div>
            <div className={`${styles.splitSide} ${styles.splitCreamRight}`}>
              <div className={styles.findingsList}>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>Way finding&nbsp;&ndash;</strong> GPS-like navigation within the building with step-by-step directions.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>360 virtual tour&nbsp;&ndash;</strong> Immersive, panoramic views of the AGO&rsquo;s galleries.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>Collections&nbsp;&ndash;</strong> A searchable database of artworks with images of art work and descriptions.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>Expert insight&nbsp;&ndash;</strong> Commentary from curators and art historians.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>Ticket and event calendar&nbsp;&ndash;</strong> Purchase and store tickets within the app and a real-time calendar of exhibitions, tours, and events.</p>
                </div>
                <div className={styles.findingItem}>
                  <p className={styles.findingText}><strong>Guest access&nbsp;&ndash;</strong> Users don&rsquo;t need to create a profile, and can get tickets emailed to them.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Paper Sketches ── */}
          <div className={styles.sketchBlock}>
            <div className={styles.sketchFrame}>
              <p className={styles.splitEyebrow}>Paper Sketches</p>
              <img
                src="/work/ago-app/paper-sketches.png"
                alt="Paper sketches"
                className={styles.sketchImg}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Phase 3 ── */}
      <div className={styles.container}>
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 3 - Visual Design
            </h2>
          </div>

          {/* ── Medium Fidelity Screens ── */}
          <div className={styles.medFiBlock}>
            <div className={styles.medFiFrame}>
              <p className={styles.splitEyebrow}>Medium Fidelity Screens</p>
              <div className={styles.medFiGrid}>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid1.svg" alt="Screen 1" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Getting Started</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid2.svg" alt="Screen 2" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Language Selection</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid3.svg" alt="Screen 3" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Home Page</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid4.svg" alt="Screen 4" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Wayfinding</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid5.svg" alt="Screen 5" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Hamburger Menu Open</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid6.svg" alt="Screen 6" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Expert Insight</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid7.svg" alt="Screen 7" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Mobile Tours</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid8.svg" alt="Screen 8" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Tour Art Detail</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.medFiImageWrap}>
                    <img src="/work/ago-app/mid9.svg" alt="Screen 9" className={styles.medFiImage} />
                  </div>
                  <p className={styles.medFiCaption}>Map View</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── High Fidelity Screens ── */}
          <div className={styles.hiFiBlock}>
            <div className={styles.hiFiFrame}>
              <p className={styles.hiFiEyebrow}>High Fidelity Screens</p>
              <div className={styles.medFiGrid}>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi1.svg" alt="Screen 1" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Getting Started</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi2.svg" alt="Screen 2" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Language Selection</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi3.svg" alt="Screen 3" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Login, Sign-up, Guest</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi4.svg" alt="Screen 4" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Home Page</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi5.svg" alt="Screen 5" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Exhibit Description</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi6.svg" alt="Screen 6" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Expert Insights</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi7.svg" alt="Screen 7" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Book Tickets</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi8.svg" alt="Screen 8" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Event Calender</p>
                </div>
                <div className={styles.medFiItem}>
                  <div className={styles.hiFiImageWrap}>
                    <img src="/work/ago-app/hi9.svg" alt="Screen 9" className={styles.medFiImage} />
                  </div>
                  <p className={styles.hiFiCaption}>Map</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Phase 4 ── */}
      <div className={styles.container}>
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 4 - Testing &amp; Iteration
            </h2>
          </div>

          {/* ── Usability Testing ── */}
          <div className={styles.testingBlock}>
            <div className={styles.testingFrame}>
              <p className={styles.splitEyebrow}>Usability Testing</p>
              <div className={styles.testingGrid}>
                <div className={styles.testingStatItem}>
                  <p className={styles.testingStatTitle}>7 Sessions</p>
                  <p className={styles.testingStatText}>We conducted 7 usability testing sessions to evaluate the AGO app experience.</p>
                </div>
                <div className={styles.testingStatItem}>
                  <p className={styles.testingStatTitle}>5 Tasks</p>
                  <p className={styles.testingStatText}>Participants did 5 key tasks that reflected key app features.</p>
                </div>
                <div className={styles.testingStatItem}>
                  <p className={styles.testingStatTitle}>Participants</p>
                  <p className={styles.testingStatText}>Our participants were primarily aged 18–28, including Humber College students and friends or family members familiar with art galleries.</p>
                </div>
                <div className={styles.testingStatItem}>
                  <p className={styles.testingStatTitle}>In-person + Remote</p>
                  <p className={styles.testingStatText}>To ensure flexibility, some sessions were conducted in-person for direct observation, while others were done remotely via screen sharing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Metrics & Results ── */}
          <div className={styles.testingBlock}>
            <div className={styles.testingFrame}>
              <p className={styles.splitEyebrow}>Metrics &amp; Results</p>
              <p className={styles.metricsNote}>
                Task success rate – percentage of users who successfully completed a given task<br />
                Time spent – average time taken by users to complete a task
              </p>
              <div className={styles.metricsTableWrap}>
                <table className={styles.metricsTable}>
                  <thead>
                    <tr>
                      <th className={styles.metricsHead}>Task</th>
                      <th className={styles.metricsHead}>Success Rate</th>
                      <th className={styles.metricsHead}>Avg. Time Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.metricsRow}>
                      <td className={styles.metricsCell}>1. Browse the information on &lsquo;What&rsquo;s On&rsquo;, then find expert insights for that collection.</td>
                      <td className={styles.metricsCell}>100%</td>
                      <td className={styles.metricsCell}>2:40 mins</td>
                    </tr>
                    <tr className={styles.metricsRow}>
                      <td className={styles.metricsCell}>2. Find your way to European art, take a virtual tour, and find the information on &lsquo;The Lady of Shalott&rsquo;.</td>
                      <td className={styles.metricsCell}>100%</td>
                      <td className={styles.metricsCell}>2:90 mins</td>
                    </tr>
                    <tr className={styles.metricsRow}>
                      <td className={styles.metricsCell}>3. Find the bistro (using the map).</td>
                      <td className={styles.metricsCell}>100%</td>
                      <td className={styles.metricsCell}>1:55 mins</td>
                    </tr>
                    <tr className={styles.metricsRow}>
                      <td className={styles.metricsCell}>4. Book a ticket for the Culture: Hip Hop and Contemporary Art in The 21st Century.</td>
                      <td className={styles.metricsCell}>100%</td>
                      <td className={styles.metricsCell}>2:85 mins</td>
                    </tr>
                    <tr className={styles.metricsRow}>
                      <td className={styles.metricsCell}>5. Find an Event using the calendar for April 14 2025.</td>
                      <td className={styles.metricsCell}>100%</td>
                      <td className={styles.metricsCell}>2:05 mins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── Key Findings & Implemented Feedback ── */}
          <div className={styles.kfBlock}>
            <div className={styles.kfFrame}>
              <p className={styles.splitEyebrow}>Key Findings &amp; Implemented Feedback</p>

              {/* 1 */}
              <div className={styles.kfItem}>
                <p className={styles.kfTitle}>1. Design &amp; Aesthetics</p>
                <div className={styles.kfQuote}>
                  &ldquo;I thought this virtual tour button was a filter.&rdquo;
                </div>
                <div className={styles.kfBeforeAfter}>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f1-before1.svg" alt="Before 1" className={styles.kfScreen} />
                    </div>
                    <p className={styles.kfLabel}>Before</p>
                  </div>
                  <div className={styles.kfArrow}>&#8594;</div>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f1-after1.svg" alt="After 1" className={styles.kfScreen} />
                    </div>
                    <p className={styles.kfLabel}>After</p>
                  </div>
                </div>
              </div>

              <div className={styles.kfDivider} />

              {/* 2 */}
              <div className={styles.kfItem}>
                <p className={styles.kfTitle}>2. Virtual Tour Experience</p>
                <div className={styles.kfQuote}>
                  &ldquo;How do I know which one is &lsquo;Lady Shallot&rsquo;? I can&rsquo;t see the picture properly and there is no labelling&rdquo;
                  <span className={styles.kfQuoteSub}>&ldquo;What am I supposed to do here?&rdquo;</span>
                </div>
                <div className={styles.kfBeforeAfter}>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f2-before1.svg" alt="Before 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f2-before2.svg" alt="Before 2" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>Before</p>
                  </div>
                  <div className={styles.kfArrow}>&#8594;</div>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f2-after1.svg" alt="After 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f2-after2.svg" alt="After 2" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f2-after3.svg" alt="After 3" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>After</p>
                  </div>
                </div>
              </div>

              <div className={styles.kfDivider} />

              {/* 3 */}
              <div className={styles.kfItem}>
                <p className={styles.kfTitle}>3. Ticket Booking</p>
                <div className={styles.kfQuote}>
                  &ldquo;I think the black ones are booked..?&rdquo;
                </div>
                <div className={styles.kfBeforeAfter}>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f3-before1.svg" alt="Before 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f3-before2.svg" alt="Before 2" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f3-before3.svg" alt="Before 3" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>Before</p>
                  </div>
                  <div className={styles.kfArrow}>&#8594;</div>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f3-after1.svg" alt="After 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f3-after2.svg" alt="After 2" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>After</p>
                  </div>
                </div>
              </div>

              <div className={styles.kfDivider} />

              {/* 4 */}
              <div className={styles.kfItem}>
                <p className={styles.kfTitle}>4. Map Functionality</p>
                <div className={styles.kfQuote}>
                  &ldquo;I&rsquo;m confused because the map page doesn&rsquo;t show a map&rdquo;
                </div>
                <div className={styles.kfBeforeAfter}>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f4-before1.svg" alt="Before 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f4-before2.svg" alt="Before 2" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>Before</p>
                  </div>
                  <div className={styles.kfArrow}>&#8594;</div>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f4-after1.svg" alt="After 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f4-after2.svg" alt="After 2" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f4-after3.svg" alt="After 3" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>After</p>
                  </div>
                </div>
              </div>

              <div className={styles.kfDivider} />

              {/* 5 */}
              <div className={styles.kfItem}>
                <p className={styles.kfTitle}>5. Event Calendar</p>
                <div className={styles.kfQuote}>
                  &ldquo;Why is everything selected already?&rdquo;
                </div>
                <div className={styles.kfBeforeAfter}>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f5-before1.svg" alt="Before 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f5-before2.svg" alt="Before 2" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>Before</p>
                  </div>
                  <div className={styles.kfArrow}>&#8594;</div>
                  <div className={styles.kfGroup}>
                    <div className={styles.kfScreens}>
                      <img src="/work/ago-app/f5-after1.svg" alt="After 1" className={styles.kfScreenSm} />
                      <img src="/work/ago-app/f5-after2.svg" alt="After 2" className={styles.kfScreenSm} />
                    </div>
                    <p className={styles.kfLabel}>After</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Phase 5 ── */}
      <div className={styles.container}>
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 5 - Final Product &amp; Impact
            </h2>
          </div>

          {/* ── Figma Prototype Embed ── */}
          <div className={styles.prototypeBlock}>
            <p className={styles.splitEyebrow}>Interactive Prototype</p>
            <div className={styles.prototypeFrame}>
              <iframe
                className={styles.prototypeEmbed}
                src="https://embed.figma.com/proto/AMlrcLAVrQ8IDUD9zutpnA/AGO-App-Prototype?page-id=564%3A1537&node-id=564-2210&viewport=486%2C-32%2C0.26&scaling=scale-down&content-scaling=fixed&starting-point-node-id=564%3A2210&show-proto-sidebar=1&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Takeaways & Future Scope ── */}
          <div className={styles.takeawaysBlock}>
            <div className={styles.takeawaysCard}>
              <p className={styles.takeawaysEyebrow}>My Takeaways</p>
              <p className={styles.takeawaysText}>
                This project helped me understand how thoughtful UX design can make cultural spaces more accessible and engaging for a wider audience. I learned to simplify complex information, design for diverse user needs, and balance physical and digital experiences within a museum setting.
              </p>
            </div>
            <div className={styles.takeawaysCard}>
              <p className={styles.takeawaysEyebrow}>Future Scope</p>
              <p className={styles.takeawaysText}>
                In the future, the app could expand its VR experiences and introduce personalized exhibit recommendations based on user interests. Additional user testing with diverse visitor groups would help refine accessibility features and improve the overall gallery navigation experience.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
