import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-[#0a192f] text-black dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />

      <main className="pt-[80px]">
        <section id="home" className="p-4 scroll-mt-20"><Home /></section>
        <section id="about" className="p-4 scroll-mt-20"><About /></section>
        <section id="work" className="p-4 scroll-mt-20"><Work /></section>
        <section id="skills" className="p-4 scroll-mt-20"><Skills /></section>
        <section id="project" className="p-4 scroll-mt-20"><Project /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
