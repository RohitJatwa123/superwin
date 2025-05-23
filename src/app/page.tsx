import HeroSection from './components/Hero';
import Leaderboard from './components/Leaderboard';
import AboutApp from './components/AboutApp';
// import Features from './components/Features';
// import TechStack from './components/TechStack';
// import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-950">
      <div className="space-y-16">
        <HeroSection />
        <AboutApp />
        <Leaderboard />
      </div>
      {/* <Features /> */}
      {/* <TechStack /> */}
      {/* <Footer /> */}
    </main>
  );
}
