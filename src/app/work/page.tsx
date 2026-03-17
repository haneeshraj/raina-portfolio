import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import WorkTimeline from "@/components/WorkTimeline/WorkTimeline";
import WorkItemDot from "@/components/WorkItemDot/WorkItemDot";

export default function Work() {
  return (
    <main className={styles["main"]}>
      <div className={styles["diamondBg"]} aria-hidden="true" />
      <div className={styles["title"]}>
        <h1 className={styles["heading"]}>work</h1>
        <svg
          className={styles.workSvgSpace}
          width="56"
          height="53"
          viewBox="0 0 56 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.999 12.5698L36.6526 0L36.2293 15.2297L50.6521 10.1227L41.3133 22.1953L56 26.5011L41.3133 30.8068L50.6521 42.8772L36.2293 37.7724L36.6526 53L27.999 40.4323L19.3474 53L19.7708 37.7724L5.34804 42.8772L14.6847 30.8068L0 26.5011L14.6847 22.1953L5.34804 10.1227L19.7708 15.2297L19.3474 0L27.999 12.5698Z"
            fill="#F297A4"
          />
        </svg>
      </div>

      <WorkTimeline>
        <section className={styles["work"]}>
          {/* Project 1 - BunkBuddy */}
          <WorkItemDot index={0} totalItems={4}>
            <div className={styles["work__item"]}>
              <div className={styles["work__content"]}>
                <Link
                  href="/work/bunkbuddy"
                  className={styles["content__title-link"]}
                >
                  <h2 className={styles["content__title"]}>BunkBuddy</h2>
                </Link>
                <p className={styles["content__subtitle"]}>
                  Enhancing housemate hunting
                </p>
                <div className={styles["content__tags"]}>
                  <span className={styles["tag"]}>User Flow Design</span>
                  <span className={styles["tag"]}>Wireframing</span>
                  <span className={styles["tag"]}>Usability Testing</span>
                  <span className={styles["tag"]}>High-Fidelity Prototype</span>
                </div>
              </div>
              <div className={styles["work__image"]}>
                <Link href="/work/bunkbuddy">
                  <Image
                    src="https://picsum.photos/600/400?random=1"
                    alt="BunkBuddy"
                    width={600}
                    height={400}
                    className={styles["image__img"]}
                  />
                </Link>
              </div>
            </div>
          </WorkItemDot>

          {/* Project 2 - Solace */}
          <WorkItemDot index={1} totalItems={4}>
            <div className={styles["work__item"]}>
              <div className={styles["work__content"]}>
                <Link
                  href="/work/solace"
                  className={styles["content__title-link"]}
                >
                  <h2 className={styles["content__title"]}>Solace</h2>
                </Link>
                <p className={styles["content__subtitle"]}>
                  Voice User Interface for AI Therapy
                </p>
                <div className={styles["content__tags"]}>
                  <span className={styles["tag"]}>Desk Research</span>
                  <span className={styles["tag"]}>Prototyping</span>
                  <span className={styles["tag"]}>AI Personality Design</span>
                  <span className={styles["tag"]}>High-Fidelity Prototype</span>
                </div>
              </div>
              <div className={styles["work__image"]}>
                <Link href="/work/solace">
                  <Image
                    src="https://picsum.photos/600/400?random=2"
                    alt="Solace"
                    width={600}
                    height={400}
                    className={styles["image__img"]}
                  />
                </Link>
              </div>
            </div>
          </WorkItemDot>

          {/* Project 3 - CitySphere */}
          <WorkItemDot index={2} totalItems={4}>
            <div className={styles["work__item"]}>
              <div className={styles["work__content"]}>
                <Link
                  href="/work/citysphere"
                  className={styles["content__title-link"]}
                >
                  <h2 className={styles["content__title"]}>CitySphere</h2>
                </Link>
                <p className={styles["content__subtitle"]}>
                  Spatial UI Design for VR Tourism
                </p>
                <div className={styles["content__tags"]}>
                  <span className={styles["tag"]}>User Research</span>
                  <span className={styles["tag"]}>Storyboarding</span>
                  <span className={styles["tag"]}>Spatial Design + UI</span>
                  <span className={styles["tag"]}>High-Fidelity Screens</span>
                </div>
              </div>
              <div className={styles["work__image"]}>
                <Link href="/work/citysphere">
                  <Image
                    src="https://picsum.photos/600/400?random=3"
                    alt="CitySphere"
                    width={600}
                    height={400}
                    className={styles["image__img"]}
                  />
                </Link>
              </div>
            </div>
          </WorkItemDot>

          {/* Project 4 - AGO App */}
          <WorkItemDot index={3} totalItems={4}>
            <div className={styles["work__item"]}>
              <div className={styles["work__content"]}>
                <Link
                  href="/work/ago-app"
                  className={styles["content__title-link"]}
                >
                  <h2 className={styles["content__title"]}>AGO App</h2>
                </Link>
                <p className={styles["content__subtitle"]}>
                  Redesigning the Gallery experience
                </p>
                <div className={styles["content__tags"]}>
                  <span className={styles["tag"]}>User Research</span>
                  <span className={styles["tag"]}>Wireframing</span>
                  <span className={styles["tag"]}>Interaction Design</span>
                  <span className={styles["tag"]}>Usability Testing</span>
                </div>
              </div>
              <div className={styles["work__image"]}>
                <Link href="/work/ago-app">
                  <Image
                    src="https://picsum.photos/600/400?random=4"
                    alt="AGO App"
                    width={600}
                    height={400}
                    className={styles["image__img"]}
                  />
                </Link>
              </div>
            </div>
          </WorkItemDot>
        </section>
      </WorkTimeline>
    </main>
  );
}
