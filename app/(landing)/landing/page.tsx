'use client'
import {useRef} from 'react'
import Threads from "../../../components/Threads";
import Section2 from "@/app/components/landing/Section2";
import LogoLoopComp from "@/app/components/landing/LogoLoopComp";
import Testimonials from '@/app/components/landing/Testimonials';
import Problem from '@/app/components/landing/Problem'
import Solution from "@/app/components/landing/Solution";
import Features from "@/app/components/landing/Features";
import Demo from "@/app/components/landing/Demo";
import Pricing from "@/app/components/landing/Pricing";
import Faq from "@/app/components/landing/FAQ";
import FinalCTA from "@/app/components/landing/FinalCTA";
import Nav from "./Nav";

export default function Landing() {
  const faqsRef = useRef<HTMLDivElement | null>(null);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref:React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50'>
      <Nav onScroll={scrollTo} refs={{faqsRef, benefitsRef, featuresRef, testimonialsRef, pricingRef}}/>
    </div>
      <section className="relative mb-20 max-w-[1300px]">
        {/* Background Threads */}
        <div className="absolute inset-0 top-0 left-0 -z-10 h-[400px] w-full max-w-full overflow-x-hidden">
          <Threads
            color={[0.1098, 0.1235, 0.7255]}
            amplitude={2}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>

        {/* Hero Section */}
        <main className=" flex flex-col justify-center items-center text-center gap-6 section-spacing px-6 py-12  z-10 bg-transparent">
          <h1 className="text-4xl md:text-6xl font-bold bg-transparent">
            {`See What's Happening`}
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold bg-transparent">
            On Your Website Today
          </h1>

          <p className="text-zinc-400 text-xl antialiased max-w-[700px] bg-transparent">
            Skip the complexity of Google Analytics. Insightly shows you exactly
            what matters in one beautiful dashboard.
          </p>

          <button className="p-btn">Start for free</button>
        </main>
      </section>
      <div className="px-12">
        <LogoLoopComp />
      </div>
      <Section2 />
      <Testimonials ref={testimonialsRef}/>
      <Problem/>
      <Solution ref={benefitsRef}/>
      <Features ref={featuresRef}/>
      <Demo/>
      <Pricing ref={pricingRef}/>
      <Faq ref={faqsRef}/>
      <FinalCTA/>
    </>
  );
}
