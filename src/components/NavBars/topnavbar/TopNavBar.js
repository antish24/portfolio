"use client";
import React, { useEffect, useState } from "react";
import styles from "./topnavbar.module.css";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { MdCall, MdClose, MdMenu } from "react-icons/md";

const TopNavBar = () => {
  const pathName = usePathname();
  const [openMenu, SetOpenMenu] = useState(false);
  const Links = [
    { id: 1, url: "/", name: "Home" },
    { id: 2, url: "/About", name: "About" },
    { id: 3, url: "/Services", name: "Services" },
    { id: 4, url: "/OurWork", name: "Our Work" },
    { id: 5, url: "/Blog", name: "Blog" },
    { id: 6, url: "/Careers", name: "Careers" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? styles.fixedcontainer:styles.container}>
      <div
        className={styles.menubox}
        style={{ height: openMenu ? "100vh" : "0" }}
      >
        <MdClose
          size={30}
          onClick={() => SetOpenMenu(false)}
          className={styles.closebtn}
        />
        {Links.map((list) => (
          <Link
            onClick={() => SetOpenMenu(false)}
            key={list.id}
            className={
              pathName === list.url ? styles.menuactivelink : styles.menulink
            }
            href={list.url}
          >
            <span>{list.name}</span>
            <span className={styles.menucircle}></span>
          </Link>
        ))}
        <Link href="/Contact" className={styles.menucontactbtn}>
          Get In Touch
        </Link>
      </div>
      <div className={styles.cont}>
        <span className={styles.menubtn}>
          <MdMenu onClick={() => SetOpenMenu(true)} size={40} />
        </span>
        <Link href={'/'} className={styles.homepage}>
          ISH 24
        </Link>
        <span className={styles.contactpage}>
          <MdCall onClick={() => window.location.href = `tel:${'+251934608749'}`} size={40} />
        </span>
        <div className={styles.logo}>ISH 24</div>
        <div className={styles.links}>
          {Links.map((list) => (
            <Link
              key={list.id}
              className={
                pathName === list.url ? styles.activelink : styles.link
              }
              href={list.url}
            >
              <span>{list.name}</span>
              <span className={styles.circle}></span>
            </Link>
          ))}
          <Link href="/Contact" className={styles.contactbtn}>
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
