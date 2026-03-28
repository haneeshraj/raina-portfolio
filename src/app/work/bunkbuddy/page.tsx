"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import styles from "./styles.module.scss";

const cardSortImages = [
  {
    src: "/work/bunkbuddy/cardsort-b.svg",
    title: "Before",
    description: "Initial shuffled card sorting given to participants",
  },
  {
    src: "/work/bunkbuddy/cardsort-a.svg",
    title: "After",
    description: "Organized categories from participants of co-creation workshop",
  },
];

export default function BunkBuddy() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === cardSortImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? cardSortImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === cardSortImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <div className={styles["project-hero"]}>
        <div className={styles["project-hero__content"]}>
          <div className={styles["project-hero__right"]}>
            <div className={styles.heroPreviewCard}>
              <Image
                src="/work/bunkbuddy/bunkbuddy.svg"
                alt="BunkBuddy Preview"
                width={900}
                height={560}
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                className={styles["project-hero__image"]}
              />
            </div>
          </div>

          <div className={styles["project-hero__left"]}>
            <h1 className={styles["project-hero__title"]}>BunkBuddy</h1>
            <p className={styles["project-hero__subtitle"]}>
              Enhancing housemate hunting
            </p>
            <div className={styles["project-hero__tags"]}>
              <span className={styles["tag"]} data-tag="User Flow Design">User Flow Design</span>
              <span className={styles["tag"]} data-tag="Wireframing">Wireframing</span>
              <span className={styles["tag"]} data-tag="Usability Testing">Usability Testing</span>
              <span className={styles["tag"]} data-tag="High Fidelity Prototype">High Fidelity Prototype</span>
            </div>
          </div>
        </div>

        <div className={styles["project-description"]}>
          <p className={styles["project-description__text"]}>
            BunkBuddy: designing a product to enhance the house and housemate
            hunting experience.
          </p>
        </div>
      </div>

      <div className={styles["project-info"]}>
        <div className={styles["project-info__cards"]}>
          <div className={styles["info-card"]}>
            <h3 className={styles["info-card__title"]}>Project Overview</h3>
            <p className={styles["info-card__text"]}>
              A house and roommate-finding app designed to help students and
              young newcomers in the GTA find safe, affordable and compatible
              living options.
            </p>
            <p className={styles["info-card__detail"]}>
              <strong>Timeline</strong> — 15 weeks
            </p>
            <p className={styles["info-card__detail"]}>
              <strong>Tools</strong> — Figma, FigJam
            </p>
            <p className={styles["info-card__detail"]}>
              <strong>Team</strong> — Capstone Group (Muskaan, Kashish Kakkad)
            </p>
          </div>

          <div className={styles["info-card"]}>
            <h3 className={styles["info-card__title"]}>My Contributions</h3>
            <p className={styles["info-card__text"]}>
              <strong>User Research</strong> — Survey, data synthesis, user flow
              diagramming, journey maps.
            </p>
            <p className={styles["info-card__text"]}>
              <strong>User Interface</strong> — Wireframing, high fidelity
              designs, interactive prototyping, iterations.
            </p>
            <p className={styles["info-card__text"]}>
              <strong>Usability Testing</strong> — Scenario based testing with 4
              participants.
            </p>
          </div>
        </div>

        <div className={styles["project-section"]}>
          <h3 className={styles["project-section__title"]}>
            Problem Statement
          </h3>
          <p className={styles["project-section__text"]}>
            Students and newcomers often struggle to find housing and compatible
            roommates due to scattered information, unreliable listings, safety
            concerns, and limited filtering options.
          </p>
          <p className={styles["project-section__text"]}>
            Bunk Buddy aims to create a trustworthy, intuitive platform that
            makes searching for housing and roommates easier, safer, and more
            transparent.
          </p>
        </div>

        <div className={styles["project-section"]}>
          <h3 className={styles["project-section__title"]}>Project Goals</h3>
          <p className={styles["project-section__text"]}>
            Simplify the process of finding verified listings and trustworthy
            roommates. Improve user confidence through transparent profiles and
            safety features. Reduce time spent searching across multiple
            platforms.
          </p>
        </div>
      </div>

      <div className={styles["project-phase"]}>
        <div className={styles["project-phase__header"]}>
          <h2 className={styles["project-phase__title"]}>Phase 1 - Research</h2>
        </div>

        <div className={styles["project-phase__content"]}>
          <div className={styles["research-section"]}>
            <h3 className={styles["research-section__title"]}>
              Competitor Analysis
            </h3>
            <p className={styles["research-section__text"]}>
              Upon comparing existing companies like Kijiji, Facebook
              Marketplace, Roomies and Diggz, we found that most competitors
              either offer safety or convenience—but not both. Verified,
              lifestyle-based apps like Roomies and Diggz are safer but have
              smaller user bases or paywalled features. Large platforms like
              Facebook Marketplace and Kijiji have huge reach but lack
              verification, leading to high scam risk and no compatibility
              filters. This reveals a clear gap for a platform that combines
              trust, verification, and lifestyle matching with easy browsing and
              reliable communication—a space Bunk Buddy can fill.
            </p>
          </div>

          <div className={styles["research-section"]}>
            <h3 className={styles["research-section__title"]}>Survey</h3>
            <p className={styles["research-section__text"]}>
              This was conducted via Google forms to gather broad, quantitative
              insights from our target users (students and young professionals)
              about their current challenges, preferences, and habits related to
              finding housing and roommates. This helped validate the problem
              space, identify common needs at scale, and prioritize features
              based on real user input.
            </p>
          </div>

          <div className={styles["research-section"]}>
            <h3 className={styles["research-section__title"]}>
              Affinity Diagramming
            </h3>
            <p className={styles["research-section__text"]}>
              To make sense of all the raw data collected from surveys similar
              user comments, frustrations, and needs were grouped into clear,
              meaningful themes. This helped identify common pain points and
              priorities directly from user voices.
            </p>
          </div>

          <div className={styles["affinity-diagram"]}>
            <Image
              src="/work/bunkbuddy/affinity-diagramming.svg"
              alt="Affinity Diagram"
              width={1200}
              height={400}
              className={styles["affinity-diagram__image"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["journey-section"]}>
        <h2 className={styles["journey-section__title"]}>Journey Mapping</h2>
        <p className={styles["journey-section__description"]}>
          Using research insights a detailed journey is crafted, to understand
          the emotional narrative of a user&apos;s experience, from realizing
          they need housing to finally moving in. This helped empathize with
          real user struggles and identify where and how Bunk Buddy can offer
          the most value, trust, and ease.
        </p>

        <div className={styles["journey-map"]}>
          <Image
            src="/work/bunkbuddy/journey-map.png"
            alt="Journey Map: Searching for a Room & Roommates"
            width={1200}
            height={800}
            className={styles["journey-map__image"]}
          />
        </div>

        <div className={styles["key-insights"]}>
          <h2 className={styles["key-insights__title"]}>Key Insights</h2>
          <div className={styles["key-insights__grid"]}>
            <div className={styles["insight-card"]}>
              <h3 className={styles["insight-card__title"]}>
                Lifestyle Compatibility is Critical
              </h3>
              <p className={styles["insight-card__text"]}>
                A majority of users emphasized habits like noise tolerance,
                cleanliness, and sleep schedule. Compatibility was rated
                equally or more important than rent or location.
              </p>
            </div>
            <div className={styles["insight-card"]}>
              <h3 className={styles["insight-card__title"]}>
                Trust is a Major Barrier
              </h3>
              <p className={styles["insight-card__text"]}>
                Scams and unsafe profiles were the top concerns, especially on
                platforms like Kijiji and Facebook Marketplace. Users strongly
                preferred verified profiles, video intros, and past roommate
                reviews.
              </p>
            </div>
            <div className={styles["insight-card"]}>
              <h3 className={styles["insight-card__title"]}>
                Existing Tools Are Fragmented
              </h3>
              <p className={styles["insight-card__text"]}>
                People used multiple tools (FB, Kijiji, Roomies) to find both
                listings and roommates separately. No platform offers a
                one-stop solution with matching + safety + lifestyle filters.
              </p>
            </div>
            <div className={styles["insight-card"]}>
              <h3 className={styles["insight-card__title"]}>
                Swipe-Based UI is Appealing
              </h3>
              <p className={styles["insight-card__text"]}>
                Over 70% respondents said they&apos;d use a swipe-style
                roommate/living space matcher.
              </p>
            </div>
          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 2 - Ideation
            </h2>
          </div>
        </div>

        <div className={styles["co-creation"]}>
          <h3 className={styles["co-creation__title"]}>Co Creation Workshop</h3>
          <p className={styles["co-creation__text"]}>
            To involve real users in the early design process by collaboratively
            exploring how they think about and group app features, a co-creation
            workshop was conducted. This collaborative session gave real-time
            insights into user expectations and helped validate design ideas
            early in the process. Participants were provided an unstructured
            card sorting for the app&apos;s information architecture and they
            collectively sorted it into categories that made most sense to them.
          </p>

          <div className={styles["co-creation__images"]}>
            <div className={styles.carouselContainer}>
              <button
                className={styles.carouselArrowPrev}
                onClick={handlePrev}
                aria-label="Previous card sort image"
              >
                <MdChevronLeft />
              </button>

              <div className={styles.carouselFrame}>
                <div className={styles.imageWrapper}>
                  <div
                    className={styles.imageTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {cardSortImages.map((image, index) => (
                      <div className={styles.slide} key={index}>
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={900}
                          height={700}
                          sizes="(max-width: 900px) 100vw, 700px"
                          className={styles.carouselImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.carouselText} key={currentSlide}>
                  <h3 className={styles.carouselTitle}>
                    {cardSortImages[currentSlide].title}
                  </h3>
                  <p className={styles.carouselDescription}>
                    {cardSortImages[currentSlide].description}
                  </p>
                </div>
              </div>

              <button
                className={styles.carouselArrowNext}
                onClick={handleNext}
                aria-label="Next card sort image"
              >
                <MdChevronRight />
              </button>
            </div>
          </div>

          <div className={styles["info-architecture"]}>
            <h2 className={styles["info-architecture__title"]}>
              Information Architecture
            </h2>
            <p className={styles["info-architecture__text"]}>
              Based on insights from card sorting and other research, a sitemap
              and content hierarchy was created that ensured that users could
              efficiently find what they were looking for. This structure aimed
              to organize the app in a clear, logical way that supported easy
              navigation and task completion.
            </p>

            <div className={styles["info-architecture__diagram"]}>
              <Image
                src="/work/bunkbuddy/info-architecture.png"
                alt="Information Architecture Diagram"
                width={1200}
                height={600}
                className={styles["info-architecture__image"]}
              />
            </div>
          </div>
        </div>

        <div className={styles["paper-sketches"]}>
          <h2 className={styles["paper-sketches__title"]}>Paper Sketches</h2>
          <p className={styles["paper-sketches__text"]}>
            Keeping in mind the architecture and workshop insights, these paper
            sketches were made to quickly visualize and iterate design ideas
            before committing to high-fidelity screens. This method helped
            explore multiple layout options and test flows without investing
            time in detailed UI work.
          </p>

          <div className={styles["paper-sketches__container"]}>
            <Image
              src="/work/bunkbuddy/paper-sketches.png"
              alt="Paper Sketches"
              width={1200}
              height={900}
              className={styles["paper-sketches__image"]}
            />
          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 3 - Visual Design
            </h2>
          </div>
        </div>
      </div>
      <div className={styles["medium-fidelity"]}>
        <h3 className={styles["medium-fidelity__title"]}>Medium Fidelity</h3>
        <p className={styles["medium-fidelity__subtitle"]}>
          These wireframes translate research insights into initial interface
          designs, focusing on core functionality and user flow before adding
          visual polish.
        </p>

        <div className={styles["med-fi-frame"]}>
          <div className={styles["med-fi-grid"]}>
            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid1.svg"
                  alt="Explore Profiles"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Explore Profiles</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid2.svg"
                  alt="Filter Preferences"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Filter Preferences</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid3.svg"
                  alt="Share Profile"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Share Profile</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid4.svg"
                  alt="Like a Profile"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Like a Profile</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid5.svg"
                  alt="Chat Section"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Chat Section</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid6.svg"
                  alt="Match Confirmed"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Match Confirmed</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid7.svg"
                  alt="Conversation"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Conversation</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid8.svg"
                  alt="Liked Section"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>Liked Section</p>
            </div>

            <div className={styles["med-fi-item"]}>
              <div className={styles["med-fi-image-wrap"]}>
                <Image
                  src="/work/bunkbuddy/bbmid9.svg"
                  alt="User Profile"
                  width={300}
                  height={550}
                  className={styles["med-fi-image"]}
                />
              </div>
              <p className={styles["med-fi-caption"]}>User Profile</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["hiFiBlock"]}>
        <h3 className={styles["hiFiTitle"]}>High Fidelity</h3>
        <p className={styles["hiFiSubtitle"]}>
          These high-fidelity screens showcase the final visual design, incorporating all research insights to create a polished, intuitive interface that meets user needs and expectations.
        </p>
        <div className={styles["hiFiFrame"]}>
          <div className={styles["hiFiGrid"]}>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh1.png"
                  alt="Screen 1"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Toggle & Browse</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh2.png"
                  alt="Screen 2"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Swipe Profiles</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh3.png"
                  alt="Screen 3"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Like Confirmation</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh4.png"
                  alt="Screen 4"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Share Options</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh5.png"
                  alt="Screen 5"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Filter Settings</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh6.png"
                  alt="Screen 6"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Matches & Messages</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh7.png"
                  alt="Screen 7"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>You Matched!</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh8.png"
                  alt="Screen 8"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Chat Screen</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh9.png"
                  alt="Screen 9"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Likes Tab</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh10.png"
                  alt="Screen 10"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Saved Listings</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh11.png"
                  alt="Screen 11"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>User Profile</p>
            </div>
            <div className={styles["medFiItem"]}>
              <div className={styles["hiFiImageWrap"]}>
                <Image
                  src="/work/bunkbuddy/bbhigh12.png"
                  alt="Screen 12"
                  width={400}
                  height={600}
                  className={styles["hiFiImage"]}
                />
              </div>
              <p className={styles["hiFiCaption"]}>Iterated Design</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["testing-section"]}>
        <div className={styles["testing-section__header"]}>
          <h2 className={styles["testing-section__title"]}>
            Phase 4 - Testing & Iteration
          </h2>
        </div>

        <div className={styles["usability-testing-section"]}>
          <h3 className={styles["usability-testing-section__title"]}>
            Usability Testing
          </h3>

          <div className={styles["usability-frame"]}>
            <div className={styles["usability-frame__content"]}>
            <div className={styles["usability-stat"]}>
              <h4 className={styles["usability-stat__number"]}>7 Sessions</h4>
              <p className={styles["usability-stat__text"]}>
                We conducted 7 usability testing sessions to evaluate the AGO
                app experience.
              </p>
            </div>

            <div className={styles["usability-stat"]}>
              <h4 className={styles["usability-stat__number"]}>5 Key Tasks</h4>
              <p className={styles["usability-stat__text"]}>
                Participants completed 5 key tasks that reflected key app
                features and user flows.
              </p>
            </div>

            <div className={styles["usability-stat"]}>
              <h4 className={styles["usability-stat__number"]}>Participants</h4>
              <p className={styles["usability-stat__text"]}>
                Our participants were primarily aged 18–30, including Humber
                College students and friends or family members familiar with art
                galleries.
              </p>
            </div>

            <div className={styles["usability-stat"]}>
              <h4 className={styles["usability-stat__number"]}>
                In-person + Remote
              </h4>
              <p className={styles["usability-stat__text"]}>
                To ensure flexibility, some sessions were conducted in-person
                for direct observation, while others were done remotely via
                screen sharing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["key-findings"]}>
          <h3 className={styles["key-findings__title"]}>Key Findings</h3>
          <div className={styles["key-findings__grid"]}>
            <div className={styles["finding-card"]}>
              <h4 className={styles["finding-card__title"]}>
                Sharing Profiles/Houses
              </h4>
              <p className={styles["finding-card__text"]}>
                All participants could successfully click on the share button
                but 2 of them talked about having more options like WhatsApp or
                Email alongside the Bunk Buddy matches.
              </p>
            </div>

            <div className={styles["finding-card"]}>
              <h4 className={styles["finding-card__title"]}>
                Like & Match Flow
              </h4>
              <p className={styles["finding-card__text"]}>
                All 4 participants said they liked how the Match confirmation,
                but 1 wanted the ability to revisit skipped profiles.
              </p>
            </div>

            <div className={styles["finding-card"]}>
              <h4 className={styles["finding-card__title"]}>Chat Initiation</h4>
              <p className={styles["finding-card__text"]}>
                Messaging after a match was smooth for all, though 2
                participants wanted chat shortcuts directly from the match
                confirmation screen.
              </p>
            </div>

            <div className={styles["finding-card"]}>
              <h4 className={styles["finding-card__title"]}>Saved Listings</h4>
              <p className={styles["finding-card__text"]}>
                Users saved listings easily but 3 participants mentioned adding
                sort/filter options in the Saved section or a way to separate
                roommates and houses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["implemented-feedback-section"]}>
        <h2 className={styles["implemented-feedback-section__title"]}>
          Implemented Feedback
        </h2>

        <div className={styles["feedback-grid"]}>
          <div className={styles["feedback-item"]}>
            <div className={styles["feedback-item__image-container"]}>
              <Image
                src="/work/bunkbuddy/bbiterated1.png"
                alt="Sharing Options"
                width={300}
                height={650}
                className={styles["feedback-item__image"]}
              />
              <div className={styles["feedback-item__rectangle-1"]}></div>
            </div>
            <div className={styles["feedback-item__content"]}>
              <div className={styles["feedback-item__header"]}>
                <h3 className={styles["feedback-item__number"]}>1.</h3>
                <h4 className={styles["feedback-item__title"]}>
                  Sharing Options
                </h4>
              </div>
              <p className={styles["feedback-item__text"]}>
                Added users&apos; preferred mode of sharing listings: WhatsApp
                and Email options, alongside the existing Copy Link option.
              </p>
            </div>
          </div>

          <div className={styles["feedback-item"]}>
            <div className={styles["feedback-item__image-container"]}>
              <Image
                src="/work/bunkbuddy/bbiterated2.png"
                alt="Chat Shortcut"
                width={300}
                height={650}
                className={styles["feedback-item__image"]}
              />
              <div className={styles["feedback-item__rectangle-2"]}></div>
            </div>
            <div className={styles["feedback-item__content"]}>
              <div className={styles["feedback-item__header"]}>
                <h3 className={styles["feedback-item__number"]}>2.</h3>
                <h4 className={styles["feedback-item__title"]}>
                  Chat Shortcut
                </h4>
              </div>
              <p className={styles["feedback-item__text"]}>
                Added a {"'Send Message'"} option on the Matches page, so it is
                easier for quicker chat initiation, instead of users having to
                manually find the matched room/date in chats.
              </p>
            </div>
          </div>

          <div className={styles["feedback-item"]}>
            <div className={styles["feedback-item__image-container"]}>
              <Image
                src="/work/bunkbuddy/bbiterated3.png"
                alt="Revisiting Profiles"
                width={300}
                height={650}
                className={styles["feedback-item__image"]}
              />
              <div className={styles["feedback-item__rectangle-3"]}></div>
            </div>
            <div className={styles["feedback-item__content"]}>
              <div className={styles["feedback-item__header"]}>
                <h3 className={styles["feedback-item__number"]}>3.</h3>
                <h4 className={styles["feedback-item__title"]}>
                  Revisiting Profiles
                </h4>
              </div>
              <p className={styles["feedback-item__text"]}>
                Added a {"'Recently Viewed'"} section in the Likes page, so in
                case users accidently skip past a potential roommate instead of
                liking the profile, they can revisit the profile here.
              </p>
            </div>
          </div>

          <div className={styles["feedback-item"]}>
            <div className={styles["feedback-item__image-container"]}>
              <Image
                src="/work/bunkbuddy/bbiterated4.png"
                alt="Sorting Saved Options"
                width={300}
                height={650}
                className={styles["feedback-item__image"]}
              />
              <div className={styles["feedback-item__rectangle-4"]}></div>
            </div>
            <div className={styles["feedback-item__content"]}>
              <div className={styles["feedback-item__header"]}>
                <h3 className={styles["feedback-item__number"]}>4.</h3>
                <h4 className={styles["feedback-item__title"]}>
                  Sorting Saved Options
                </h4>
              </div>
              <p className={styles["feedback-item__text"]}>
                Added a toggle in the Saved section between saved roommates and
                houses. Also added a filter option for users to sort through
                their saved listings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["testing-section"]}>
        <div className={styles["testing-section__header"]}>
          <h2 className={styles["testing-section__title"]}>
            Phase 5 - Final Product &amp; Impact
          </h2>
        </div>
      </div>

      <div className={styles["prototype-embed"]}>
        <iframe
          width="800"
          height="450"
          src="https://embed.figma.com/proto/sAeXuLiEeAvEYdktJGS4vg/BunkBuddy-Copy?page-id=217%3A2648&node-id=217-2649&p=f&viewport=152%2C-152%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A2649&embed-host=share"
          allowFullScreen
        />
      </div>

      <div className={styles["takeaways-section"]}>
        <div className={styles["takeaways-grid"]}>
          <div className={styles["takeaways-frame"]}>
            <h2 className={styles["takeaways-frame__title"]}>My Takeaways</h2>
            <p className={styles["takeaways-frame__text"]}>
              Designing Bunk Buddy reinforced the importance of building trust
              and compatibility into digital experiences that impact real-life
              decisions. Through research, usability testing, and iterative
              design, we identified that housing is not just about space
              &mdash; it&apos;s about people, safety, and lifestyle alignment.
              This project strengthened my ability to translate user pain
              points into thoughtful, structured solutions that balance
              usability, emotion, and real-world practicality.
            </p>
          </div>

          <div className={styles["takeaways-frame"]}>
            <h3 className={styles["takeaways-frame__title"]}>Future Scope</h3>
            <ul className={styles["takeaways-frame__list"]}>
              <li>
                Conduct additional usability testing with a larger and more
                diverse user group to validate navigation clarity and feature
                discoverability.
              </li>
              <li>
                Develop high-fidelity micro-interactions (match animation, save
                confirmation, verification badges) to enhance emotional
                engagement.
              </li>
              <li>
                Prototype an AI-based compatibility scoring system and test how
                users interpret and trust that score.
              </li>
              <li>
                Design a roommate agreement and shared expense tracking
                interface as an extended prototype feature.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
