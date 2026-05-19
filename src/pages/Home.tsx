import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import IllustrationSection from '../components/IllustrationSection';
import UIUXSection from '../components/UIUXSection';
import RecentWorks from '../components/RecentWorks';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <IllustrationSection />
      <UIUXSection />
      <RecentWorks />
      <Contact />
    </>
  );
}
