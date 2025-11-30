import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function BunkBuddy() {
  return (
    <>
      <div className={styles["project-hero"]}>
        <div className={styles["project-hero__content"]}>
          <div className={styles["project-hero__left"]}>
            <h1 className={styles["project-hero__title"]}>BunkBuddy</h1>
            <p className={styles["project-hero__subtitle"]}>
              Enhancing housemate hunting
            </p>
            <div className={styles["project-hero__tags"]}>
              <span className={styles["tag"]}>User Flow Design</span>
              <span className={styles["tag"]}>Wireframing</span>
              <span className={styles["tag"]}>Usability Testing</span>
              <span className={styles["tag"]}>High Fidelity Prototype</span>
            </div>
          </div>

          <div className={styles["project-hero__right"]}>
            <Image
              src="https://picsum.photos/600/400?random=10"
              alt="BunkBuddy Preview"
              width={600}
              height={400}
              className={styles["project-hero__image"]}
            />
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
            <p className={styles["info-card__detail"]}>Timeline - 15 weeks</p>
            <p className={styles["info-card__detail"]}>Tools - Figma, FigJam</p>
            <p className={styles["info-card__detail"]}>
              Team - Capstone Group (Muskaan, Kashish Kakkad)
            </p>
          </div>

          <div className={styles["info-card"]}>
            <h3 className={styles["info-card__title"]}>My Contributions</h3>
            <p className={styles["info-card__text"]}>
              User Research - Survey, data synthesis, user flow diagramming,
              journey maps.
            </p>
            <p className={styles["info-card__text"]}>
              User Interface - Wireframing, high fidelity designs, interactive
              prototyping, iterations.
            </p>
            <p className={styles["info-card__text"]}>
              Usability Testing - Scenario based testing with 4 participants.
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
              src="/affinity-diagramming.svg"
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
            src="/journey-map.png"
            alt="Journey Map: Searching for a Room & Roommates"
            width={1200}
            height={800}
            className={styles["journey-map__image"]}
          />
        </div>

        <div className={styles["key-insights"]}>
          <h2 className={styles["key-insights__title"]}>Key Insights</h2>
          <ul className={styles["key-insights__list"]}>
            <li>
              <strong>Lifestyle Compatibility is Critical:</strong> A majority
              of users emphasized habits like noise tolerance, cleanliness, and
              sleep schedule. Compatibility was rated equally or more important
              than rent or location.
            </li>
            <li>
              <strong>Trust is a Major Barrier:</strong> Scams and unsafe
              profiles were the top concerns, especially on platforms like
              Kijiji and Facebook Marketplace. Users strongly preferred verified
              profiles, video intros, and past roommate reviews.
            </li>
            <li>
              <strong>Existing Tools Are Fragmented:</strong> People used
              multiple tools (FB, Kijiji, Roomies) to find both listings and
              roommates separately. No platform offers a one-stop solution with
              matching + safety + lifestyle filters.
            </li>
            <li>
              <strong>Swipe-Based UI is Appealing:</strong> Over 70% respondents
              said they&apos;d use a swipe-style roommate/living space matcher.
            </li>
            <li>
              <strong>Users Want Transparency & Control:</strong> Need to feel
              in control of filtering, chatting, and making informed decisions.
              Past negative experiences make users cautious but open to
              better-designed solutions
            </li>
          </ul>
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
            <div className={styles["co-creation__image-container"]}>
              <h4 className={styles["co-creation__label"]}>BEFORE</h4>
              <Image
                src="/card-sorting-before.png"
                alt="Co-creation workshop before"
                width={600}
                height={500}
                className={styles["co-creation__image"]}
              />
            </div>

            <div className={styles["co-creation__image-container"]}>
              <h4 className={styles["co-creation__label"]}>AFTER</h4>
              <Image
                src="/card-sorting-after.png"
                alt="Co-creation workshop after"
                width={600}
                height={500}
                className={styles["co-creation__image"]}
              />
            </div>
            <div className={styles["info-architecture"]}>
              <h2 className={styles["info-architecture__title"]}>
                Information Architecture
              </h2>
              <p className={styles["info-architecture__text"]}>
                Based on insights from card sorting and other research, a
                sitemap and content hierarchy was created that ensured that
                users could efficiently find what they were looking for. This
                structure aimed to organize the app in a clear, logical way that
                supported easy navigation and task completion.
              </p>

              <div className={styles["info-architecture__diagram"]}>
                <Image
                  src="/info-architecture.png"
                  alt="Information Architecture Diagram"
                  width={1200}
                  height={600}
                  className={styles["info-architecture__image"]}
                />
              </div>
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
              src="/paper-sketches.png"
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

        <div className={styles["design-showcase"]}>
          <div className={styles["design-showcase__images"]}>
            <Image
              src="/mid-fid-1.png"
              alt="Medium Fidelity Screen 1"
              width={250}
              height={540}
              className={styles["design-showcase__image"]}
            />
            <Image
              src="/mid-fid-2.png"
              alt="Medium Fidelity Screen 2"
              width={250}
              height={540}
              className={styles["design-showcase__image"]}
            />
          </div>

          <div className={styles["design-showcase__annotations"]}>
            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>1</span>
              <p className={styles["annotation__text"]}>
                <strong>Toggle Button-</strong> This toggle is a view switcher
                between two types of content:
              </p>
              <ul className={styles["annotation__list"]}>
                <li>
                  Roommates: shows individual profiles of people looking for
                  shared accommodation or roommate match.
                </li>
                <li>House: show listings of available rental properties.</li>
              </ul>
            </div>

            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>2</span>
              <p className={styles["annotation__text"]}>
                <strong>Profile Card-</strong> This is a preview card for a
                roommate listing. It gives users a snapshot of someone
                potentially compatible to live with. Swiping right will like the
                profile and swiping left will skip.
              </p>
            </div>

            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>3</span>
              <p className={styles["annotation__text"]}>
                <strong>Verification Badge Icon-</strong> Indicates that the
                user profile has gone through a verification process (e.g., ID
                verification or phone verification) which adds a layer of trust
                for safety, important in roommate matching scenarios.
              </p>
            </div>

            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>4</span>
              <p className={styles["annotation__text"]}>
                <strong>Navigation Menu-</strong> Serves as the primary
                navigation method for the app which allows users to switch
                between core sections.
              </p>
            </div>

            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>5</span>
              <p className={styles["annotation__text"]}>
                <strong>House Card-</strong> This card acts as a summary of a
                rental listing, presenting key data at a glance. Swiping right
                will like the listing and swiping left will skip.
              </p>
            </div>

            <div className={styles["annotation"]}>
              <span className={styles["annotation__number"]}>6</span>
              <p className={styles["annotation__text"]}>
                <strong>Share Icon-</strong> Tap the share icon to trigger the
                share modal (Screen 3), where the user can select from a list of
                people they&apos;ve recently chatted with, or tap
                {"Copy Link"} to manually send/share elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["matches-section"]}>
        <div className={styles["matches-showcase"]}>
          <div className={styles["matches-showcase__screens"]}>
            <Image
              src="/mid-fid-3.png"
              alt="Matches Screen 1"
              width={250}
              height={540}
              className={styles["matches-showcase__image"]}
            />
            <Image
              src="/mid-fid-4.png"
              alt="Filters Screen"
              width={250}
              height={540}
              className={styles["matches-showcase__image"]}
            />
            <Image
              src="/mid-fid-5.png"
              alt="Like Profile Modal"
              width={250}
              height={540}
              className={styles["matches-showcase__image"]}
            />
          </div>

          <div className={styles["matches-showcase__annotations"]}>
            <div className={styles["match-annotation"]}>
              <span className={styles["match-annotation__number"]}>7</span>
              <p className={styles["match-annotation__text"]}>
                <strong>Basic / Advanced Tabs -</strong> A toggle between two
                filter modes. {'"Basic"'} includes general filters like age,
                budget, and verification. Tapping on {'"Advanced"'} would reveal
                more detailed criteria like gender preference, smoking or pet
                policies.
              </p>
            </div>

            <div className={styles["match-annotation"]}>
              <span className={styles["match-annotation__number"]}>8</span>
              <p className={styles["match-annotation__text"]}>
                <strong>Verified Toggle -</strong> A switch that filters the
                results to show only verified users or listings. When toggled
                ON, only profiles/listings that have gone through verification
                will appear in search results, increasing safety and trust.
              </p>
            </div>

            <div className={styles["match-annotation"]}>
              <span className={styles["match-annotation__number"]}>9</span>
              <p className={styles["match-annotation__text"]}>
                <strong>Like Profile Modal -</strong> A pop-up that appears when
                a user swipes right on a profile. It confirms the action with a
                message such as {'"Like this profile?"'} and prompts the user to
                proceed or cancel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["messaging-section"]}>
        <div className={styles["messaging-showcase"]}>
          <div className={styles["messaging-showcase__screens"]}>
            <Image
              src="/mid-fid-6.png"
              alt="Matches and Messages Screen"
              width={250}
              height={540}
              className={styles["messaging-showcase__image"]}
            />
            <Image
              src="/mid-fid-7.png"
              alt="You Matched Screen 1"
              width={250}
              height={540}
              className={styles["messaging-showcase__image"]}
            />
            <Image
              src="/mid-fid-8.png"
              alt="You Matched Screen 2"
              width={250}
              height={540}
              className={styles["messaging-showcase__image"]}
            />
          </div>

          <div className={styles["messaging-showcase__annotations"]}>
            <div className={styles["messaging-annotation"]}>
              <span className={styles["messaging-annotation__number"]}>10</span>
              <p className={styles["messaging-annotation__text"]}>
                <strong>Matches Tab -</strong> A separate tab that shows users
                with whom there has been a mutual like or match. Tapping a match
                here can initiate a conversation if one hasn&apos;t started yet.
              </p>
            </div>

            <div className={styles["messaging-annotation"]}>
              <span className={styles["messaging-annotation__number"]}>11</span>
              <p className={styles["messaging-annotation__text"]}>
                <strong>Messages Tab -</strong> Displays a list of existing
                conversations with other users. Tapping on a message card opens
                the chat screen (Screen 7).
              </p>
            </div>

            <div className={styles["messaging-annotation"]}>
              <span className={styles["messaging-annotation__number"]}>12</span>
              <p className={styles["messaging-annotation__text"]}>
                <strong>{'"YOU MATCHED!"'} Banner -</strong> Appears when two
                users like each other, confirming a successful match. This
                celebratory screen encourages the user to take the next step in
                engaging with their new match.
              </p>
            </div>

            <div className={styles["messaging-annotation"]}>
              <span className={styles["messaging-annotation__number"]}>13</span>
              <p className={styles["messaging-annotation__text"]}>
                <strong>{'"YOU MATCHED!"'} Banner -</strong> Appears when the
                house lister and you like each other, confirming a successful
                match. This celebratory screen encourages the user to take the
                next step in engaging with their new match.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["chat-likes-section"]}>
        <div className={styles["chat-likes-showcase"]}>
          <div className={styles["chat-likes-showcase__screens"]}>
            <Image
              src="/mid-fid-9.png"
              alt="Chat Screen"
              width={250}
              height={540}
              className={styles["chat-likes-showcase__image"]}
            />
            <Image
              src="/mid-fid-9.png"
              alt="Likes and Recommended Screen"
              width={250}
              height={540}
              className={styles["chat-likes-showcase__image"]}
            />
          </div>

          <div className={styles["chat-likes-showcase__annotations"]}>
            <div className={styles["chat-likes-annotation"]}>
              <span className={styles["chat-likes-annotation__number"]}>
                14
              </span>
              <p className={styles["chat-likes-annotation__text"]}>
                <strong>Likes Tab -</strong> Shows profiles of people who have
                liked you but whom you haven&apos;t interacted with yet. These
                are incoming likes, giving users the opportunity to browse
                through people who have already expressed interest. You can then
                choose to like them back to create a match or ignore the
                profile.
              </p>
            </div>

            <div className={styles["chat-likes-annotation"]}>
              <span className={styles["chat-likes-annotation__number"]}>
                15
              </span>
              <p className={styles["chat-likes-annotation__text"]}>
                <strong>Recommended Tab -</strong> Displays listings or profiles
                tailored to the user based on preferences, location, and past
                likes. Uses card format for easy swiping or tapping.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["saved-profile-section"]}>
        <div className={styles["saved-profile-showcase"]}>
          <div className={styles["saved-profile-showcase__screens"]}>
            <Image
              src="/mid-fid-11.png"
              alt="Saved Listings Screen"
              width={250}
              height={540}
              className={styles["saved-profile-showcase__image"]}
            />
            <Image
              src="/mid-fid-12.png"
              alt="Profile Screen"
              width={250}
              height={540}
              className={styles["saved-profile-showcase__image"]}
            />
          </div>

          <div className={styles["saved-profile-showcase__annotations"]}>
            <div className={styles["saved-profile-annotation"]}>
              <span className={styles["saved-profile-annotation__number"]}>
                16
              </span>
              <p className={styles["saved-profile-annotation__text"]}>
                <strong>Saved Listings -</strong> This section is for profiles
                or listings the user has chosen to save for later viewing.
                Tapping on any saved item opens the full listing or profile,
                allowing users to re-evaluate or contact the other party.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
