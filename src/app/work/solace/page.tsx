import Image from "next/image";

import styles from "./styles.module.scss";

export default function Solace() {
  return (
    <div className={styles.page}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className={styles["project-hero"]}>
        <div className={styles["project-hero__content"]}>
          <div className={styles["project-hero__right"]}>
            <div className={styles.heroPreviewCard}>
              <Image
                src="/work/solace/solace-thumbnail-bg.svg"
                alt="Solace preview"
                width={900}
                height={560}
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                className={styles["project-hero__image"]}
              />
              <Image
                src="/work/solace/Solace.gif"
                alt="Solace animation"
                width={900}
                height={560}
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                unoptimized
                className={styles["project-hero__overlay"]}
              />
            </div>
          </div>

          <div className={styles["project-hero__left"]}>
            <h1 className={styles["project-hero__title"]}>Solace</h1>
            <p className={styles["project-hero__subtitle"]}>
              Voice User Interface for AI Therapy
            </p>
            <div className={styles["project-hero__tags"]}>
              <span className={styles["tag"]} data-tag="Desk Research">
                Desk Research
              </span>
              <span className={styles["tag"]} data-tag="User Flow Design">
                User Flow Design
              </span>
              <span className={styles["tag"]} data-tag="AI Personality Design">
                AI Personality Design
              </span>
              <span
                className={styles["tag"]}
                data-tag="High Fidelity Prototype"
              >
                High Fidelity Prototype
              </span>
            </div>
          </div>
        </div>

        <div className={styles["project-description"]}>
          <p className={styles["project-description__text"]}>
            Solace: designing a voice user interface for an AI driven mental
            health companion.
          </p>
        </div>
      </div>

      {/* ── PROJECT INFO ─────────────────────────────────── */}
      <div className={styles.container}>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__cards"]}>
            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>Project Overview</h3>
              <p className={styles["info-card__text"]}>
                A mental-wellness app designed to help young adults manage
                stress, track emotions, and access quick support through AI
                guided activities and check-ins.
              </p>
              <p className={styles["info-card__detail"]}>
                <strong>Timeline</strong> — 3 weeks
              </p>
              <p className={styles["info-card__detail"]}>
                <strong>Tools</strong> — Figma, FigJam, Voiceflow
              </p>
              <p className={styles["info-card__detail"]}>
                <strong>Team</strong> — Product Design Group (Wajiha, Eman &amp;
                Amal)
              </p>
            </div>

            <div className={styles["info-card"]}>
              <h3 className={styles["info-card__title"]}>My Contributions</h3>
              <p className={styles["info-card__text"]}>
                <strong>Desk Research</strong> — Competitor analysis. News.
                Articles. Journals.
              </p>
              <p className={styles["info-card__text"]}>
                <strong>AI Personality</strong> — Defining character traits for
                Solace
              </p>
              <p className={styles["info-card__text"]}>
                <strong>User Interface</strong> — Designing the logo, high
                fidelity designs, interactive prototyping, audio inclusion.
              </p>
            </div>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>
              Problem Statement
            </h3>
            <p className={styles["project-section__text"]}>
              Individuals struggle to find always-available mental health
              support when dealing with difficult emotions and the fear of
              judgement prevents them from seeking help. Traditional therapy,
              while valuable, isn&apos;t always accessible in the moment,
              leaving people without guidance when they need it most. Existing
              mental health apps can also feel clinical, overwhelming, or
              inconsistent.
            </p>
          </div>

          <div className={styles["project-section"]}>
            <h3 className={styles["project-section__title"]}>Project Goals</h3>
            <p className={styles["project-section__text"]}>
              Providing immediate, non-judgmental, and accessible mental health
              support through empathetic conversations, guided reflections, and
              personalized coping strategies for each user.
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

          {/* Competitor Analysis */}
          <div className={styles.researchBlock}>
            <h3 className={styles.researchTitle}>Competitor Analysis</h3>
            <p className={styles.researchText}>
              In our competitor analysis, we examined existing AI companions
              such as Snapchat&apos;s My AI, ChatGPT, and Hume to understand how
              users currently seek emotional support. While these tools offer
              instant responses and low-barrier conversational support, they
              often lack emotional nuance, guided wellness structure, and a
              consistent sense of comfort. These gaps highlighted an opportunity
              for Solace to create a calmer, more emotionally attuned, and
              wellness-focused AI experience.
            </p>
          </div>

          {/* Existing Studies */}
          <div className={styles.researchBlock}>
            <h3 className={styles.researchTitle}>Existing Studies</h3>

            <div className={styles.studiesGrid}>
              {/* Study 1 */}
              <div className={styles.studyCard}>
                <div className={styles.studyImageWrap}>
                  <Image
                    src="/work/solace/study1.svg"
                    alt="Frontiers in Digital Health – robot therapist article"
                    width={600}
                    height={400}
                    className={styles.studyImage}
                  />
                  <p className={styles.studyCaption}>
                    A paper that talks about the role of psychological AI
                    chatbots in leading to therapeutic misconception
                  </p>
                </div>
                <div className={styles.studyHighlights}>
                  <h4 className={styles.studyHighlightsTitle}>Highlights</h4>
                  <ul className={styles.studyBullets}>
                    <li>
                      Users should be made aware that the chatbots are not
                      envisaged to replace therapy, but rather supplement care
                      and/or enhance self-management in one&apos;s mental health
                      (2). It is imperative that user expectations are managed
                      about the support and guidance that they will receive from
                      the chatbot.
                    </li>
                    <li>
                      Additional supports should also be put in place where
                      there is some form of human intervention that users can
                      fall back on. One solution to achieve this and preserve
                      the integrity of such chatbots is to have clinicians
                      intervene when a chatbot notifies them of extreme mood
                      fluctuations, irregularities, or sensitive topics such as
                      suicide
                    </li>
                  </ul>
                </div>
              </div>

              {/* Study 2 */}
              <div className={styles.studyCard}>
                <div className={styles.studyImageWrap}>
                  <Image
                    src="/work/solace/study2.svg"
                    alt="AI chatbots for mental health article"
                    width={600}
                    height={400}
                    className={styles.studyImage}
                  />
                  <p className={styles.studyCaption}>
                    An article talking about the rise of AI ChatBots for Therapy
                  </p>
                </div>
                <div className={styles.studyHighlights}>
                  <ul className={styles.studyBullets}>
                    <li>
                      The industry argument is simple: Chatbots are free,
                      available 24/7 and don&apos;t come with the stigma that
                      keeps some people away from therapy.
                    </li>
                    <li>
                      Chatbots aren&apos;t equivalent to the give-and-take of
                      traditional therapy, but Wright thinks they could help
                      with less severe mental and emotional problems.
                    </li>
                    <li>
                      The authors concluded that chatbots could
                      &quot;significantly reduce&quot; symptoms of depression
                      and distress in the short term.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Study 3 */}
              <div className={styles.studyCard}>
                <div className={styles.studyImageWrap}>
                  <Image
                    src="/work/solace/study3.svg"
                    alt="Wired article – AI in touch with emotions"
                    width={600}
                    height={400}
                    className={styles.studyImage}
                  />
                  <p className={styles.studyCaption}>
                    Article about new tech that implements AI which can detect
                    human emotion.
                  </p>
                </div>
                <div className={styles.studyHighlights}>
                  <ul className={styles.studyBullets}>
                    <li>
                      A Wired article discusses the development of emotionally
                      intelligent AI capable of recognizing and responding to
                      human emotions, and its potential applications in mental
                      health therapy.
                    </li>
                    <li>
                      A new AI called Hume can detect the users tone and
                      emotions through their voice. Other AI&apos;s like ChatGPT
                      don&apos;t have the capacity to do this.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Study 4 */}
              <div className={styles.studyCard}>
                <div className={styles.studyImageWrap}>
                  <Image
                    src="/work/solace/study4.svg"
                    alt="Snapchat My AI article"
                    width={600}
                    height={400}
                    className={styles.studyImage}
                  />
                  <p className={styles.studyCaption}>
                    A conversation with Snapchat&apos;s My AI
                  </p>
                </div>
                <div className={styles.studyHighlights}>
                  <ul className={styles.studyBullets}>
                    <li>
                      Some teens have turned to My AI for mental health support
                      — something that many medical experts caution against.
                    </li>
                    <li>
                      &quot;Using My AI because I&apos;m lonely and don&apos;t
                      want to bother real people,&quot; one person wrote on
                      Reddit.
                    </li>
                    <li>
                      &quot;While My AI was designed to avoid misleading
                      content, My AI certainly makes plenty of mistakes, so you
                      can&apos;t rely on it for advice — something we&apos;ve
                      been clear about since the start,&quot; Maggie Cherneff,
                      communications manager at Snap
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PHASE 2 – AI PERSONALITY IDEATION ────────────── */}
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 2 - AI Personality Ideation
            </h2>
          </div>

          {/* Key Features */}
          <div className={styles.featuresBlock}>
            <p className={styles.featuresEyebrow}>WHAT DOES SOLACE DO</p>
            <h3 className={styles.featuresTitle}>Key Features</h3>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureNumber}>①</span>
                <h4 className={styles.featureCardTitle}>
                  Immediate and Non-Judgmental Support
                </h4>
                <p className={styles.featureCardText}>
                  Helps users process emotions through active listening and
                  guided reflection.
                </p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureNumber}>②</span>
                <h4 className={styles.featureCardTitle}>
                  Adaptive Conversations &amp; Coping Tools
                </h4>
                <p className={styles.featureCardText}>
                  Offers breathing exercises, relaxation techniques, and
                  activity suggestions for emotional regulation.
                </p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureNumber}>③</span>
                <h4 className={styles.featureCardTitle}>
                  Connection to Mental Health Professionals
                </h4>
                <p className={styles.featureCardText}>
                  Provides resources and referrals for professional mental
                  health care within the user&apos;s region.
                </p>
              </div>
            </div>
          </div>

          {/* Personality */}
          <div className={styles.personalityBlock}>
            <div className={styles.personalityImageWrap}>
              <Image
                src="/work/solace/personality.svg"
                alt="Solace personality card"
                width={800}
                height={600}
                className={styles.personalityImage}
              />
            </div>
            <div className={styles.personalityContent}>
              <h3 className={styles.personalityTitle}>Personality</h3>
              <div className={styles.personalitySection}>
                <h4 className={styles.personalitySectionTitle}>Traits –</h4>
                <ul className={styles.personalityList}>
                  <li>Supportive &amp; Caring</li>
                  <li>Encouraging</li>
                  <li>Helpful</li>
                  <li>Patient</li>
                  <li>Trustworthy</li>
                </ul>
              </div>
              <div className={styles.personalitySection}>
                <h4 className={styles.personalitySectionTitle}>
                  Speaking Style –
                </h4>
                <ul className={styles.personalityList}>
                  <li>
                    Gentle &amp; Reassuring: Tone is kind and comforting to make
                    the user feel safe and supported.
                  </li>
                  <li>
                    Personable &amp; Conversational: Speaks like they are a good
                    friend.
                  </li>
                  <li>
                    Encouraging &amp; Uplifting: Focuses on supporting the
                    user&apos;s self confidence
                  </li>
                </ul>
              </div>
              <div className={styles.personalitySection}>
                <h4 className={styles.personalitySectionTitle}>
                  Character Strengths:
                </h4>
                <ul className={styles.personalityList}>
                  <li>
                    Emotional Intelligence: Deep understanding of human emotions
                    and knows how to respond with sensitivity.
                  </li>
                  <li>
                    Unwavering Patience: Never rushes conversations or pressures
                    users to feel better, they allow healing to happen
                    naturally.
                  </li>
                  <li>
                    Active Listening: They don&apos;t just hear words, they
                    process the user&apos;s emotions and context to respond
                    meaningfully.
                  </li>
                  <li>
                    Reliability: Always there when needed, predictably present.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Requests & Intents */}
          <div className={styles.intentBlock}>
            <h3 className={styles.intentTitle}>User Requests and Intents</h3>
            <div className={styles.intentTableWrap}>
              <table className={styles.intentTable}>
                <tbody>
                  <tr>
                    <td className={styles.intentRowLabel}>Request or Task</td>
                    <td>Select Emotion</td>
                    <td>Ask for Support</td>
                    <td>Request a Coping Exercise</td>
                    <td>Sharing Personal Thoughts</td>
                    <td>Showcase Extreme Mental State</td>
                    <td>Past Conversations</td>
                  </tr>
                  <tr>
                    <td className={styles.intentRowLabel}>Intent</td>
                    <td>Express Emotion Intent</td>
                    <td>Support Intent</td>
                    <td>Exercise Intent</td>
                    <td>Journaling Intent</td>
                    <td>Resource and referral Intent</td>
                    <td>Memory Recall Intent</td>
                  </tr>
                  <tr>
                    <td className={styles.intentRowLabel}>Sample Utterances</td>
                    <td>*Select from Homescreen*</td>
                    <td>&quot;I&apos;m so upset right now.&quot;</td>
                    <td>&quot;Please help me calm down.&quot;</td>
                    <td>&quot;I just need to vent.&quot;</td>
                    <td>&quot;Nothing is helping, I need more!&quot;</td>
                    <td>&quot;Remember what I said the other day?&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Design Rational */}
          <div className={styles.rationalBlock}>
            <h3 className={styles.rationalTitle}>Design Rational</h3>
            <p className={styles.rationalText}>
              The core design principles prioritize usability, empathy, and
              personalization, creating an experience that feels natural,
              supportive, and easy to navigate. Since it deals with users in
              somewhat delicate state of minds, it prioritizes sensitivity and
              their comfort by giving them control over the flow of the
              conversation. While solace speaks and provides transcription for
              its words, users can have the option to speak back or even type
              out how they feel. They can even make use of the quick select menu
              options that appear anytime Solace is giving them options to
              choose from in order to proceed.
            </p>
          </div>
        </div>

        {/* ── PHASE 3 – CONVERSATION FLOW ──────────────────── */}
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 3 - Conversation Flow
            </h2>
          </div>

          <div className={styles.flowBlock}>
            <div className={styles.flowDiagramWrap}>
              <h3 className={styles.flowTitle}>Conversation Flow</h3>
              <div className={styles.flowLegend}>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--user"]}`}
                  >
                    User
                  </div>
                </div>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--solace"]}`}
                  >
                    Solace
                  </div>
                </div>
              </div>
              <div className={styles.flowImageWrap}>
                <Image
                  src="/work/solace/flow.svg"
                  alt="Conversation flow diagram"
                  width={1400}
                  height={900}
                  className={styles.flowImage}
                />
              </div>
            </div>

            <div className={styles.flowNarrative}>
              <ul className={styles.flowList}>
                <li>
                  If the user had a good day →{" "}
                  <em>
                    Solace commends them and reinforces positivity, helping them
                    focus on it.
                  </em>
                </li>
                <li>
                  If the user had a bad day →{" "}
                  <em>
                    Solace acknowledges the emotion and asks if they&apos;d like
                    to talk more about how it made them feel.
                  </em>
                  <ul className={styles.flowSubList}>
                    <li>
                      If the user shares more details, Solace connects past
                      interactions and offers sympathy.
                    </li>
                    <li>
                      If the user doesn&apos;t want to talk further, Solace asks
                      if there&apos;s anything else it can do.
                    </li>
                    <li>
                      If Solace detects a lot of emotional turbulence it offers
                      a quick breathing exercise, a relaxing activity or just
                      the option to vent.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className={styles.flowDiagramWrap}>
              <div className={styles.flowLegend}>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--user"]}`}
                  >
                    User
                  </div>
                </div>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--solace"]}`}
                  >
                    Solace
                  </div>
                </div>
              </div>
              <div className={styles.flowImageWrap}>
                <Image
                  src="/work/solace/flow-simple.svg"
                  alt="Good day / bad day conversation flow"
                  width={1400}
                  height={400}
                  className={styles.flowImage}
                />
              </div>
            </div>

            <div className={styles.flowNarrative}>
              <ul className={styles.flowList}>
                <li>
                  If the user refuses, or tries but the activity/suggestion is
                  ineffective, or they vent and show severe distress, Solace
                  provides mental health resources and shows mental health
                  professionals close to the user.
                </li>
                <li>
                  If the user further refuses, Solace can offer starting a
                  conversation with a friend, or if it observes threat to the
                  user&apos;s stability and safety, it alerts authorities of
                  their condition.
                </li>
              </ul>
            </div>

            <div className={styles.flowDiagramWrap}>
              <div className={styles.flowLegend}>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--user"]}`}
                  >
                    User
                  </div>
                </div>
                <div className={styles.flowLegendItem}>
                  <div
                    className={`${styles.flowLegendIcon} ${styles["flowLegendIcon--solace"]}`}
                  >
                    Solace
                  </div>
                </div>
              </div>
              <div className={styles.flowImageWrap}>
                <Image
                  src="/work/solace/flow-crisis.svg"
                  alt="Crisis escalation flow"
                  width={1400}
                  height={400}
                  className={styles.flowImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── PHASE 4 – VISUAL DESIGN ──────────────────────── */}
        <div className={styles["project-phase"]}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Phase 4 - Visual Design
            </h2>
          </div>

          {/* Row 1 – Splash, Home, Conversation initiated */}
          <div className={styles.screensRow}>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/splash.svg"
                  alt="Splash screen"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>Splash screen</p>
            </div>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/home.svg"
                  alt="Home screen"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>Home screen</p>
            </div>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/conversation.svg"
                  alt="Conversation initiated"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>Conversation initiated</p>
            </div>
          </div>

          {/* Row 2 – User response, Menu options, Multiple responses */}
          <div className={styles.screensRow}>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/response.svg"
                  alt="User response"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>User response</p>
            </div>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/menu.svg"
                  alt="Solace menu options"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>Solace menu options</p>
            </div>
            <div className={styles.screenItem}>
              <div className={styles.screenImageWrap}>
                <Image
                  src="/work/solace/multiple.svg"
                  alt="Multiple responses"
                  width={400}
                  height={800}
                  className={styles.screenImage}
                />
              </div>
              <p className={styles.screenCaption}>Multiple responses</p>
            </div>
          </div>
        </div>

        {/* ── REFLECTION & WAY FORWARD ─────────────────────── */}
        <div className={styles.reflectionSection}>
          <div className={styles["project-phase__header"]}>
            <h2 className={styles["project-phase__title"]}>
              Reflection &amp; Way Forward
            </h2>
          </div>

          <div className={styles.reflectionGrid}>
            <div className={styles.reflectionBlock}>
              <h3 className={styles.reflectionTitle}>My Takeaways</h3>
              <p className={styles.reflectionText}>
                Designing Solace taught me how to create digital experiences
                that balance emotional sensitivity with functional clarity. I
                learned the importance of shaping microinteractions, tone, and
                flow in ways that make users feel supported rather than
                overwhelmed. This project strengthened my ability to design for
                mental wellness, simplify complex emotional tasks, and integrate
                AI in a way that feels human, safe, and approachable.
              </p>
            </div>

            <div className={styles.reflectionBlock}>
              <h3 className={styles.reflectionTitle}>Next Steps</h3>
              <p className={styles.reflectionText}>
                Moving forward, I would explore deeper personalization using
                mood patterns and long-term behavior insights. I&apos;d also
                like to expand the emotional toolkit with more guided
                activities, audio-based grounding, and crisis-support pathways.
                Conducting broader user testing with diverse age groups would
                help validate emotional tone and accessibility across different
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
