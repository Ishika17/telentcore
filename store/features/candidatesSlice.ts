import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useAppSelector } from '@/store/hooks'; 
import { selectAllCandidates } from '@/store/features/candidatesSlice';

const CandidateList = () => {
  const candidates = useAppSelector(selectAllCandidates);

  // This function renders ONLY the rows visible on screen
  const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const candidate = candidates[index];
    return (
      <div style={style} className="border-b p-4 flex justify-between items-center bg-white hover:bg-gray-50">
        <span className="font-medium">{candidate.name}</span>
        <span className="text-sm text-gray-500">{candidate.totalExp} Yrs Exp</span>
      </div>
    );
  };

  return (
    <div className="h-[600px] w-full border rounded-lg overflow-hidden">
      <List
        height={600}
        itemCount={candidates.length}
        itemSize={70} // Height of each row in pixels
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default CandidateList;