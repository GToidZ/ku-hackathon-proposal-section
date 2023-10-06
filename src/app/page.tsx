"use client";

import Benefit from "@/components/Sections/Benefit";
import FAQs from "@/components/Sections/FAQs";
import HomeSection from "@/components/Sections/HomeSection";
import JoinSection from "@/components/Sections/JoinSection";
import Objective from "@/components/Sections/Objective";
import Partners from "@/components/Sections/Partners";
import ScheduleSection from "@/components/Sections/ScheduleSection";
import TimeLineSection from "@/components/Sections/TimeLineSection";

export default function Home() {
    return (
        <>
            <HomeSection />
            <Objective />
            <TimeLineSection />
            <Benefit />
            <Partners />
            <FAQs />
        </>
    );
}
