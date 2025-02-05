'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
    const bannerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const imageElement = bannerRef.current;
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

        const handleScroll = () => {
            if (scrollPosition > scrollThreshold) {
                imageElement?.classList.add("scrolled");
            } else {
                imageElement?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title ">
            {""}
            Your AI Career Assistant for
            <br />
            Professional Growth
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advanced career guidance powered by AI to personal guidance,
            interview preparation, and powerful tools to boost your career.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant={"outline"} size="lg" className="px-8">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Banner */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={bannerRef} className="hero-image">
            <Image
              src="/assets/banner.jpeg"
              alt="banner"
              width={1200}
              height={720}
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
