import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Issue, SubIssue } from '@/interfaces/IssueInterface';
import { Element } from 'react-scroll';
import axios from 'axios';
import _ from 'lodash';
import IssueList from './IssueList';
import IssueType from './IssueType';
import { ChevronsRight } from 'lucide-react';
import { useScreenWidthSize } from '@/components/hooks/useScreenWidthSize';
import { ScrollShadow } from '@nextui-org/react';
import LoadingSkeleton from './LoadingSkeleton';

interface Props {}

interface ModifiedIssue extends Issue {
  count: number;
}

const Problems: NextPage<Props> = () => {
  const width = useScreenWidthSize();

  const [issues, setIssues] = useState<ModifiedIssue[]>([]);
  const [selectedTypeIssue, setSelectedTypeIssue] = useState<number>(0);

  useEffect(() => {
    getIssues();
  }, []);

  const getIssues = async () => {
    try {
      const { data } = await axios.get<Issue[]>('/api/issues');

      let newData: ModifiedIssue[] = [];

      data.map((type) => {
        newData = [
          ...newData,
          {
            ...type,
            count: type.subissues.reduce((accumulator, object) => {
              return accumulator + object.count;
            }, 0),
          },
        ];
      });

      setIssues(newData);
    } catch {}
  };

  const getSubIssuesByType: (idx: number) => SubIssue[] = (idx: number) => {
    return issues[idx]?.subissues ?? [];
  };

  return (
    <Element
      name="problems"
      className="sm:max-w-[90vw] mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          ปัญหาที่พบในมหาวิทยาลัย
        </div>
        <div className="text-xl text-green-500 font-bold text-center">
          University’s Pain Point
        </div>
      </div>
      <div className="mt-[5rem] flex flex-col w-full lg:w-fit">
        {issues.length == 0 ? (
          <LoadingSkeleton isMobile={width >= 1024} />
        ) : (
          <div className="flex flex-col lg:flex-row lg:gap-[2rem]">
            {width >= 1024 ? (
              <div className="w-full flex flex-col gap-[1.5rem]">
                {_.orderBy(issues, (o) => o.count, 'desc').map((type, idx) => {
                  return (
                    <IssueType
                      key={idx}
                      number={idx + 1}
                      label={type.name}
                      issueCount={type.count}
                      isActive={idx == selectedTypeIssue}
                      onClick={() => setSelectedTypeIssue(idx)}
                    />
                  );
                })}
              </div>
            ) : (
              <ScrollShadow
                orientation="horizontal"
                hideScrollBar
                className="overflow-y-hidden py-[1rem]"
              >
                <div className="grid grid-flow-col gap-[1rem]">
                  {_.orderBy(issues, (o) => o.count, 'desc').map(
                    (type, idx) => {
                      return (
                        <IssueType
                          key={idx}
                          number={idx + 1}
                          label={type.name}
                          issueCount={type.count}
                          isActive={idx == selectedTypeIssue}
                          onClick={() => setSelectedTypeIssue(idx)}
                        />
                      );
                    }
                  )}
                </div>
              </ScrollShadow>
            )}
            <div className="hidden lg:w-fit lg:flex items-center">
              <ChevronsRight size={48} className="text-gray-500" />
            </div>
            <div className="w-full lg:w-[45vw]">
              <IssueList data={getSubIssuesByType(selectedTypeIssue)} />
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Problems;