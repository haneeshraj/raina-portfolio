import Image from "next/image";
import styles from "./styles.module.scss";

export default function ScrollingGallery() {
  const squareImages = [1, 2, 3, 4]; // Square images
  const portraitImagesCol2 = [5, 6, 7]; // Portrait images
  const portraitImagesCol3 = [8, 9, 10]; // Portrait images

  const renderColumn = (imageNumbers: number[], isSquare: boolean) => {
    const images = imageNumbers.map((n) => `/work/ago-app/ago-scroll${n}.png`);

    return (
      <div className={styles.column}>
        <div
          className={isSquare ? styles.scrollTrackDown : styles.scrollTrackUp}
        >
          {/* First loop */}
          {images.map((img, i) => (
            <div
              key={`img-${imageNumbers[i]}`}
              className={
                isSquare
                  ? styles.imageWrapperSquare
                  : styles.imageWrapperPortrait
              }
            >
              <Image
                src={img}
                alt={`AGO scroll ${imageNumbers[i]}`}
                width={isSquare ? 180 : 160}
                height={isSquare ? 180 : 280}
                className={styles.image}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {images.map((img, i) => (
            <div
              key={`dup-${imageNumbers[i]}`}
              className={
                isSquare
                  ? styles.imageWrapperSquare
                  : styles.imageWrapperPortrait
              }
            >
              <Image
                src={img}
                alt={`AGO scroll ${imageNumbers[i]}`}
                width={isSquare ? 180 : 160}
                height={isSquare ? 180 : 280}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.scrollingGalleryContainer}>
      {/* Left Column - Squares, Scrolls Up */}
      {renderColumn(squareImages, true)}

      {/* Middle Column - Portraits, Scrolls Down */}
      {renderColumn(portraitImagesCol2, false)}

      {/* Right Column - Portraits, Scrolls Up */}
      {renderColumn(portraitImagesCol3, false)}
    </div>
  );
}
