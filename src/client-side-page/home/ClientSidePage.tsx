"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from 'src/client-side-page/home/Navbar';
import Hero from 'src/client-side-page/home/Hero';
import FeaturedProducts from 'src/client-side-page/home/FeaturedProducts';
import BrandStory from 'src/client-side-page/home/BrandStory';
import Footer from 'src/client-side-page/home/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main>
        <Hero/>
        <BrandStory/>
        <FeaturedProducts/>
      </main>
      <Footer/>
    </div>
  );
}
