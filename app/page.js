"use client"
import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import React, { useState, useEffect } from 'react';
import Footer from "@/layout/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API using useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData.user);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  // Render loading state while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <NoxfolioLayout>
      {/* Hero Section Start */}
      
      <Hero data = {data.about} />
      {/* Hero Section End */}
      {/* About Area start */}
      <About data = {data} />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume data={data} />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Services data = {data} />
      {/* Services Area end */}
      {/* Skill Area start */}
      <Skill data = {data} />
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects data = {data} />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial data = {data} />   
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      <Pricing />
      {/* Pricing Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* Client Log start */}
      <Clients />
      {/* Client Log end */}

      <Footer footer={""} data={data} />

    </NoxfolioLayout>
  );
}
