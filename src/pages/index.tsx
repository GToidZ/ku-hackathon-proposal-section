'use client';

import Benefit from '@/components/Sections/Benefit';
import FAQs from '@/components/Sections/FAQs';
import Gurus from '@/components/Sections/Gurus';
import Issues from '@/components/Sections/Issues';
import HomeSection from '@/components/Sections/HomeSection';
import JoinSection from '@/components/Sections/JoinSection';
import Objective from '@/components/Sections/Objective';
import Partners from '@/components/Sections/Partners';
import ScheduleSection from '@/components/Sections/ScheduleSection';
import TimeLineSection from '@/components/Sections/TimeLineSection';

import { getListedIssues } from '../utils/GSheetToIssues';
import { Issue } from '@/interfaces/IssueInterface';

export async function getStaticProps() { 
    const issues = await getListedIssues();

    return {
        props: {
            issues: issues
        },
    }
}

interface HomeProps {
  issues: Issue[]
}

export default function Home({ issues }: HomeProps) {
    return (
      <>
        <HomeSection />
        <Objective />
        <JoinSection issues={issues}/>
        <TimeLineSection />
        <Benefit />
        <Gurus />
        {/*<Issues />*/}
        <Partners />
        <FAQs />
      </>
    );
}
