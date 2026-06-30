import React, { useState } from "react";
import { Volume2, VolumeX, ChevronsRight } from "lucide-react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

const HeroSection = () => {

  return (
    <header className={styles.heroHeader}>
      <div className={styles.heroGrid}>
        <div className={styles.introText}>
          <h1>
            <Translate
              id="homepage.hero.title"
              values={{ name: <span>The Binary Diary</span> }}
            >
              {"Welcome to {name}"}
            </Translate>
          </h1>
          <p>
            <Translate id="homepage.hero.description">
              This is my personal cybersecurity diary, where I document my research journey and share insights and practical guides while breaking down technical concepts along the way.
            </Translate>
          </p>
          <div className={styles.buttonsContainer}>
            <Link className="button button--primary button--lg" to="/blog">
              <Translate id="homepage.hero.readBlog">Read the Blog</Translate>{" "}
              <ChevronsRight size={18} className={styles.arrowIcon} />
            </Link>
            {/*<Link
              className="button button--secondary button--lg"
              to="/blog/archive"
            >
              <Translate id="homepage.hero.archive">Archive</Translate>
            </Link>*/}
          </div>
        </div>

        <div className={styles.videoWrapper}>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
