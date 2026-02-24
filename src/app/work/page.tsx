import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Work() {
  return (
    <div className={styles["work-timeline"]}>
      {/* Continuous timeline line */}
      <div className={styles["timeline-line-container"]}>
        <div className={styles["timeline-line"]}></div>
      </div>

      {/* Project 1 - BunkBuddy */}
      <div className={styles["timeline-item"]}>
        <div className={styles["timeline-content-left"]}>
          <Link
            href="/work/bunkbuddy"
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className={styles["project-title"]}>BunkBuddy</h2>
          </Link>
          <p className={styles["project-subtitle"]}>
            Enhancing housemate hunting
          </p>
          <div className={styles["project-tags"]}>
            <span className={styles["tag"]}>User Flow Design</span>
            <span className={styles["tag"]}>Wireframing</span>
            <span className={styles["tag"]}>Usability Testing</span>
            <span className={styles["tag"]}>High-Fidelity Prototype</span>
          </div>
        </div>

        <div className={styles["timeline-dot"]}></div>

        <div className={styles["timeline-content-right"]}>
          <Link
            href="/work/bunkbuddy"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="BunkBuddy"
              width={600}
              height={400}
              className={styles["project-image"]}
            />
          </Link>
        </div>
      </div>

      {/* Project 2 - Solace */}
      <div className={styles["timeline-item"]}>
        <div className={styles["timeline-content-left"]}>
          <Link
            href="/work/solace"
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className={styles["project-title"]}>Solace</h2>
          </Link>
          <p className={styles["project-subtitle"]}>
            Voice User Interface for AI Therapy
          </p>
          <div className={styles["project-tags"]}>
            <span className={styles["tag"]}>Desk Research</span>
            <span className={styles["tag"]}>Prototyping</span>
            <span className={styles["tag"]}>AI Personality Design</span>
            <span className={styles["tag"]}>High-Fidelity Prototype</span>
          </div>
        </div>

        <div className={styles["timeline-dot"]}></div>

        <div className={styles["timeline-content-right"]}>
          <Link
            href="/work/solace"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              src="https://picsum.photos/600/400?random=2"
              alt="Solace"
              width={600}
              height={400}
              className={styles["project-image"]}
            />
          </Link>
        </div>
      </div>

      {/* Project 3 - CitySphere */}
      <div className={styles["timeline-item"]}>
        <div className={styles["timeline-content-left"]}>
          <Link
            href="/work/citysphere"
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className={styles["project-title"]}>CitySphere</h2>
          </Link>
          <p className={styles["project-subtitle"]}>
            Spatial UI Design for VR Tourism
          </p>
          <div className={styles["project-tags"]}>
            <span className={styles["tag"]}>User Research</span>
            <span className={styles["tag"]}>Storyboarding</span>
            <span className={styles["tag"]}>Spatial Design + UI</span>
            <span className={styles["tag"]}>High-Fidelity Screens</span>
          </div>
        </div>

        <div className={styles["timeline-dot"]}></div>

        <div className={styles["timeline-content-right"]}>
          <Link
            href="/work/citysphere"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              src="/work/citysphere/a.svg"
              alt="CitySphere"
              width={600}
              height={400}
              className={styles["project-image"]}
            />
          </Link>
        </div>
      </div>

      {/* Project 4 - AGO App */}
      <div className={styles["timeline-item"]}>
        <div className={styles["timeline-content-left"]}>
          <Link
            href="/work/ago-app"
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className={styles["project-title"]}>AGO App</h2>
          </Link>
          <p className={styles["project-subtitle"]}>
            Redesigning the Gallery experience
          </p>
          <div className={styles["project-tags"]}>
            <span className={styles["tag"]}>User Research</span>
            <span className={styles["tag"]}>Wireframing</span>
            <span className={styles["tag"]}>Interaction Design</span>
            <span className={styles["tag"]}>Usability Testing</span>
          </div>
        </div>

        <div className={styles["timeline-dot"]}></div>

        <div className={styles["timeline-content-right"]}>
          <Link
            href="/work/ago-app"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              src="https://picsum.photos/600/400?random=4"
              alt="AGO App"
              width={600}
              height={400}
              className={styles["project-image"]}
            />
          </Link>
        </div>
      </div>

      {/* Project 5 - CampMate */}
      <div className={styles["timeline-item"]}>
        <div className={styles["timeline-content-left"]}>
          <Link
            href="/work/campmate"
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className={styles["project-title"]}>CampMate</h2>
          </Link>
          <p className={styles["project-subtitle"]}>
            Guiding the Ontario Parks experience
          </p>
          <div className={styles["project-tags"]}>
            <span className={styles["tag"]}>User Flow Design</span>
            <span className={styles["tag"]}>Wireframing</span>
            <span className={styles["tag"]}>Interaction Design</span>
            <span className={styles["tag"]}>Usability Testing</span>
          </div>
        </div>

        <div className={styles["timeline-dot"]}></div>

        <div className={styles["timeline-content-right"]}>
          <Link
            href="/work/campmate"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              src="https://picsum.photos/600/400?random=5"
              alt="CampMate"
              width={600}
              height={400}
              className={styles["project-image"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
