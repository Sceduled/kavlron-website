import { Hero, Problem, WhatItIs, Departments, HowWeWork } from "./components/ui/HomeComponents1";
import { Team, Security, Logos, FAQ } from "./components/ui/HomeComponents2";
import { CTAForm } from "./components/ui/HomeComponents3";
import { siteContent } from "../content/site";

export const metadata = {
  title: siteContent.meta.home.title,
  description: siteContent.meta.home.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatItIs />
      <Departments />
      <HowWeWork />
      <Team />
      <Security />
      <Logos />
      <FAQ />
      <CTAForm />
    </>
  );
}
