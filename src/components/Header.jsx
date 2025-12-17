import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(
              `a[href="#${entry.target.id}"]`
            );
            activeLink?.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <section className="brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmbyTCdxO5fdVRiuAwoDj2mKLiUkcbNKOGQ&s"
          alt="iris logo"
          className="iris-logo"
        />
        <h1>iris</h1>
      </section>

      <nav>
        <ul>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#looks" className="nav-link">Looks</a></li>
          <li><a href="#testimonial" className="nav-link">Testimonial</a></li>
          <li><a href="#eye-test" className="nav-link">Free Eye Test</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
