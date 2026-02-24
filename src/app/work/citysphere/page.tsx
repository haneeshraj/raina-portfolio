import Image from "next/image";

import styles from "./styles.module.scss";

export default function CitySphere() {
  return (
    <div className={styles.page}>
      <div className={styles["project-hero"]}>
        <div className={styles.container}>
          <div className={styles["project-hero__content"]}>
            <div className={styles["project-hero__left"]}>
              <h1 className={styles["project-hero__title"]}>CitySphere</h1>
              <p className={styles["project-hero__subtitle"]}>
                Spatial UI Design for VR Tourism
              </p>
              <div className={styles["project-hero__tags"]}>
                <span className={styles.tag}>User Research</span>
                <span className={styles.tag}>Storyboarding</span>
                <span className={styles.tag}>Spatial Design - VR</span>
                <span className={styles.tag}>High Fidelity Screens</span>
              </div>
            </div>

            <div className={styles["project-hero__right"]}>
              <div className={styles.heroPreviewCard}>
                <Image
                  src="/work/citysphere/a.svg"
                  alt="CitySphere preview"
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
              CitySphere: designing a virtual reality experience for travel and
              tourism in the Greater Toronto Area.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__cards"]}>
            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>Project Overview</h3>
              <p className={styles["info-card__text"]}>
                A virtual reality app created to be used with VR headsets, that
                lets people explore real cities from the comfort of their home.
              </p>
              <p className={styles["info-card__detail"]}>Timeline - 3 weeks</p>
              <p className={styles["info-card__detail"]}>
                Tools - Figma, FigJam, Procreate
              </p>
              <p className={styles["info-card__detail"]}>
                Team - Product Design Group
              </p>
            </div>

            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>My Contributions</h3>
              <p className={styles["info-card__text"]}>
                Exploration - Research, mind mapping, problem-solution mapping.
              </p>
              <p className={styles["info-card__text"]}>
                Storyboarding - Visual description of scenarios and a user&apos;s
                interaction with CitySphere.
              </p>
              <p className={styles["info-card__text"]}>
                User Interface - Designing high fidelity screens to mimic a VR
                headset interface.
              </p>
            </div>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>
              Problem Statement
            </h3>
            <p className={styles["project-section__text"]}>
              Not everyone has the time, resources, or physical ability to
              explore new cities in person. While tools like Google Maps or
              travel videos provide information, they lack immersion and fail to
              capture the feeling of actually being there.
            </p>
            <p className={styles["project-section__text"]}>
              CitySphere aims to bridge this gap by offering an accessible,
              immersive way to experience cities virtually.
            </p>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>Project Goals</h3>
            <p className={styles["project-section__text"]}>
              Let users explore cities in a realistic, immersive way without
              needing to travel. Improve comfort and familiarity with new places
              while making exploration accessible to everyone. Keep the
              experience simple, safe, and engaging.
            </p>
          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 1 - Exploration
            </h2>
          </div>

          <div className={styles.phaseFeature}>
            <div className={styles.phaseFeatureText}>
              <h3 className={styles.phaseTitle}>Research</h3>
              <ul className={styles.researchList}>
                <li>
                  34% of consumers say their personal financial situation has a
                  negative impact on their willingness to travel (Morning
                  Consult, 2023)
                </li>
                <li>
                  38% of travelers cook their own food to cut down on vacation
                  costs (Expedia, 2023)
                </li>
                <li>
                  Nearly 25% of global travelers plan to travel more frugally in
                  2023 (Expedia, 2023)
                </li>
                <li>
                  &quot;More than 1 billion people worldwide experience some
                  form of disability, many of whom face challenges in physical
                  travel.&quot; – World Health Organization (WHO), 2022
                </li>
                <li>
                  Google Maps and travel videos are useful to show the
                  destination but are not immersive nor exciting.
                </li>
              </ul>
              <p className={styles.researchSource}>
                Sources:{" "}
                <a
                  href="https://blog.accessdevelopment.com/tourism-and-travel-statistics-the-ultimate-collection"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://blog.accessdevelopment.com/tourism-and-travel-statistics-the-ultimate-collection
                </a>
                <br />
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.who.int/news-room/fact-sheets/detail/disability-and-health
                </a>
              </p>
            </div>

            <div className={styles.phaseFeatureMedia}>
              <Image
                src="/work/citysphere/b.png"
                alt="Phase 1 exploration artefacts"
                width={1200}
                height={900}
                sizes="(max-width: 900px) 100vw, 560px"
                className={styles.researchImage}
              />
            </div>
          </div>

          <div className={styles.mindMapSection}>
            <div className={styles.mindMapFrame}>
              <h3 className={styles.mindMapTitle}>Mind Map</h3>
              <p className={styles.mindMapSubtitle}>
                Key user problems, core solution, and its functionality and
                benefits.
              </p>

              <div className={styles.mindMapImageWrap}>
                <Image
                  src="/work/citysphere/h.png"
                  alt="CitySphere mind map"
                  width={1600}
                  height={900}
                  sizes="(max-width: 900px) 100vw, 1200px"
                  className={styles.mindMapImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.mindMapSection}>
            <div className={styles.mindMapFrame}>
              <h3 className={styles.mindMapTitle}>Problem–Solution Map</h3>
              <p className={styles.mindMapSubtitle}>
                With CitySphere, users can experience an immersive virtual
                simulation of the Greater Toronto Area.
              </p>

              <div className={styles.mindMapImageWrap}>
                <Image
                  src="/work/citysphere/i.png"
                  alt="CitySphere problem–solution map"
                  width={1600}
                  height={900}
                  sizes="(max-width: 900px) 100vw, 1200px"
                  className={styles.mindMapImage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 2 - Storyboarding
            </h2>
          </div>

          <div className={styles.storyboardIntro}>
            <p className={styles.phaseText}>
              Created a visual story of how a user discovers CitySphere, begins
              the tour, navigates inside the experience, and reflects at the
              end. The storyboard helped validate flow, pacing, and interaction
              moments.
            </p>
          </div>

          <div className={styles.storyboardFrame}>
            <div className={styles.storyboardGrid}>
              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/j.png"
                  alt="Storyboard scene 1"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 1: Daydreaming at Home</h4>
                <p className={styles.storyText}>
                  Reyna is planning on going to Toronto for her higher education
                  but has never visited the city. She wonders what it looks like
                  and feels like in-person and wishes she could see it before
                  shifting there.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/k.png"
                  alt="Storyboard scene 2"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 2: Spots VR Headset</h4>
                <p className={styles.storyText}>
                  She suddenly realizes that if a virtual tour app existed, she
                  could use it to explore Toronto virtually on her VR headset.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/l.png"
                  alt="Storyboard scene 3"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 3: Puts on VR Headset</h4>
                <p className={styles.storyText}>
                  She decides to put on her headset and check for herself to see
                  if such an app exists. To her surprise she comes across
                  CitySphere that looks like a very promising app for virtual
                  tours and it&apos;s solely for the GTA!
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/m.png"
                  alt="Storyboard scene 4"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 4: Intro to CitySphere</h4>
                <p className={styles.storyText}>
                  On opening the CitySphere app Reyna chooses to continue as a
                  guest because it&apos;s convenient and saves her time.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/n.png"
                  alt="Storyboard scene 5"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 5: Setting it up</h4>
                <p className={styles.storyText}>
                  She is shown instructional screens that guide her through
                  setting up her boundary area. She is also shown how to use the
                  controllers to navigate inside the tour, as well as specific
                  hand gestures that she can use.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/o.png"
                  alt="Storyboard scene 6"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 6: Main Menu</h4>
                <p className={styles.storyText}>
                  On the main menu screen, she can see a carousel of tour
                  options, exploring the GTA and she is so excited to try them
                  out!
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/p.png"
                  alt="Storyboard scene 7"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 7: Tour Information</h4>
                <p className={styles.storyText}>
                  When Reyna selects a tour she can see all the details about it
                  including its duration, the sites covered and more. She then
                  selects the tour guide option, turns on sounds and chooses the
                  daytime option of the tour.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/q.png"
                  alt="Storyboard scene 8"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 8: Exploring Lakeshore</h4>
                <p className={styles.storyText}>
                  Finally the tour begins and Reyna is in awe of the way the
                  city looks! She has a control panel with which she can
                  pause/play, mute the sound and even take a photo. This is
                  surpassing all her expectations.
                </p>
              </div>

              <div className={styles.storyCard}>
                <Image
                  src="/work/citysphere/r.png"
                  alt="Storyboard scene 9"
                  width={600}
                  height={400}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px"
                  className={styles.storyImage}
                />
                <h4 className={styles.storyTitle}>Scene 9: Please Don&apos;t End</h4>
                <p className={styles.storyText}>
                  After exploring Lakeshore for more than an hour and looking at
                  so many fun facts, she gets a notification that there are just
                  2 minutes left. Thankfully there is an option for her to
                  extend the tour, since she really doesn&apos;t want it to end.
                  She can&apos;t wait to live in Toronto!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 3 - User Interface
            </h2>
          </div>

          <div className={styles.uiStack}>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Splash Screen</h3>
                <p className={styles.uiText}>
                  The starting screen welcomes users to CitySphere, allowing them to either
                  Sign In, Register or Continue as a Guest.
                </p>
                <p className={styles.uiText}>
                  This lets users instantly dive into the experience with flexibility without any
                  compulsory sign-up walls blocking their curiosity.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/splash.svg"
                  alt="Splash screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Play Area</h3>
                <p className={styles.uiText}>
                  The first instructional screen helps users safely define their physical
                  interaction zone before the VR session begins.
                </p>
                <p className={styles.uiText}>
                  CitySphere is compatible with both sitting and standing user states to
                  allow for better accessibility.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/play.svg"
                  alt="Play area setup screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Using Controllers</h3>
                <p className={styles.uiText}>
                  The second instructional screen explains the controller navigations to users.
                </p>
                <ul className={styles.bullets}>
                  <li>Left Joystick allows for movement forward, backward, left and right.</li>
                  <li>The X button opens the settings and allows users to exit the tour.</li>
                  <li>The A button is for selection and confirmation.</li>
                  <li>The Right Trigger is for point and shoot to teleport further in the chosen direction.</li>
                </ul>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/controllers.svg"
                  alt="Using controllers screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Hand Gestures</h3>
                <p className={styles.uiText}>
                  The final instructional screen showcases hand gestures that users can use
                  while in the tour to navigate.
                </p>
                <ul className={styles.bullets}>
                  <li>Pointing with the index finger acts as a selection or confirmation.</li>
                  <li>Pinching the thumb and index finger open and close allows users to zoom in and out while in the tour.</li>
                  <li>Thumbs up can be used to save or add a specific spot in the tour to favorites.</li>
                </ul>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/gestures.svg"
                  alt="Hand gestures screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Home</h3>
                <p className={styles.uiText}>
                  After the onboarding instructions, users arrive on the home page where
                  they can scroll through the available tours to pick one.
                </p>
                <p className={styles.uiText}>
                  There is also a &ldquo;Take me anywhere&rdquo; button that will randomly select
                  a tour for the users.
                </p>
                <p className={styles.uiText}>
                  Users also have the option to search for a specific tour and see favorite
                  tours once they save some tours for later.
                </p>
                <p className={styles.uiText}>
                  Once started, the home page will also display any ongoing tours so users
                  can pick up where they left off upon resuming.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/home.svg"
                  alt="Home screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Tour Details</h3>
                <p className={styles.uiText}>
                  Upon selecting a specific tour, users can see all the details for it including
                  the duration, the sites covered, and the activities.
                </p>
                <p className={styles.uiText}>
                  They can swipe through images from the tour to get an idea of what it will
                  look like. By clicking the heart button they can even save the tour to their
                  favorites for later.
                </p>
                <p className={styles.uiText}>
                  They can proceed with the tour by clicking the &ldquo;Continue&rdquo; button.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/details.svg"
                  alt="Tour details screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Tour Customisation</h3>
                <p className={styles.uiText}>
                  Before starting the tour, users get the option to personalize their virtual visit.
                </p>
                <p className={styles.uiText}>They have toggle options for the following&mdash;</p>
                <ul className={styles.bullets}>
                  <li>Sounds, including city noises, nature, ambience and narration.</li>
                  <li>Virtual guide that explains everything the user looks at and tells local stories.</li>
                  <li>Night time or day time as per the preference of the user.</li>
                </ul>
                <p className={styles.uiText}>
                  After personalising, the users can finally start the tour.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/customise.svg"
                  alt="Tour customisation screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Tour Begins</h3>
                <p className={styles.uiText}>
                  When the users get accustomed to seeing the magnificent view that beholds them,
                  they can find a utility panel that sticks to the left of their vision.
                </p>
                <p className={styles.uiText}>
                  This panel features a pause and play option, a sound button to adjust the volume,
                  a camera to take snapshots, a gallery to view their photos, a settings button and
                  a home button as well.
                </p>
                <p className={styles.uiText}>
                  When they use the right controller and point in a direction an arrow shows up in
                  their view and they can shoot with the right trigger to teleport in that direction.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/begins.svg"
                  alt="Tour begins screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Fun Facts</h3>
                <p className={styles.uiText}>
                  While moving around and viewing the sites, users will come across information
                  icons that can be clicked on using controller point and A button or just their
                  index finger.
                </p>
                <p className={styles.uiText}>
                  On being clicked, it opens a text popup that gives the users a fun fact or piece
                  of information that can be narrated based on their sound preferences and settings.
                </p>
                <p className={styles.uiText}>
                  Even if their sound settings are toggled off, they can click on the sound icon
                  on the popup to have it play out loud.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/facts.svg"
                  alt="Fun facts popup screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>Capture the Moment</h3>
                <p className={styles.uiText}>
                  When users see something they really like and want to save, they can click on the
                  camera icon on the utility panel to open a camera overlay.
                </p>
                <p className={styles.uiText}>
                  They can move their head around to adjust the frame of the shot and the click the
                  shutter button at the bottom of their view to capture the moment.
                </p>
                <p className={styles.uiText}>
                  The clicked photos hover in their vision for 3 seconds before saving in the gallery
                  that can also be accessed from the panel or after the tour from the user&apos;s profile.
                </p>
                <p className={styles.uiText}>
                  Any text popups that are open during the shot are also captured!
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/capture.svg"
                  alt="Capture the moment screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

            <div className={styles.uiFrame}>
              <div className={styles.uiCopy}>
                <h3 className={styles.uiTitle}>End of Tour</h3>
                <p className={styles.uiText}>
                  Once the user has almost completed the tour, they are shown a notification that
                  displays the remaining time.
                </p>
                <p className={styles.uiText}>
                  The users can then choose to either end the tour, or extend it depending on whether
                  they want to spend more time in their virtual visit.
                </p>
                <p className={styles.uiText}>
                  They can also just dismiss the notification by clicking x and continue with the
                  time that&apos;s left before the tour ends.
                </p>
              </div>
              <div className={styles.uiMedia}>
                <Image
                  src="/work/citysphere/end.svg"
                  alt="End of tour notification screen"
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 640px"
                  className={styles.uiImage}
                />
              </div>
            </div>

          </div>
        </div>

        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Reflection &amp; Way Forward
            </h2>
          </div>

          <div className={styles.takeawaysBlock}>
            <h3 className={styles.takeawaysTitle}>My Takeaways</h3>
            <p className={styles.takeawaysText}>
              Working on CitySphere taught me how different designing for VR is compared to traditional apps,
              especially when it comes to comfort, clarity, and intuitive spatial interaction. I learned to
              simplify movement, reduce visual clutter, and design UI that feels natural inside a 3D environment.
              This project helped me think more deeply about accessibility and how immersive technology can remove
              barriers for people who can&apos;t easily explore new places. Overall, it strengthened my ability to
              design experiences that feel both engaging and inclusive.
            </p>
          </div>

          <div className={styles.futureFrame}>
            <div className={styles.futureCopy}>
              <h3 className={styles.futureTitle}>Future Features</h3>
              <ul className={styles.bullets}>
                <li>
                  <strong>Multi-User Mode:</strong> Add friends and join tours to explore cities together
                </li>
                <li>
                  <strong>Beyond the GTA:</strong> Add more cities in Canada for users to have a larger
                  variety of options.
                </li>
                <li>
                  <strong>Accessibility Adjustment:</strong> Add multiple languages for guides and narration
                  and subtitles for all tours.
                </li>
              </ul>
            </div>

            <div className={styles.futureImages}>
              <Image
                src="/work/citysphere/future1.png"
                alt="Two people sitting by a lake"
                width={600}
                height={400}
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.futureImg1}
              />
              <Image
                src="/work/citysphere/future2.png"
                alt="Canadian flag with mountains"
                width={600}
                height={400}
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.futureImg2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

