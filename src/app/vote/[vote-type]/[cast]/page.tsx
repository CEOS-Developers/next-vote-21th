'use client';

import Back from '@components/common/back';
import { useParams } from 'next/navigation';

export default function VoteStep2() {
  const params = useParams();

  // front / back / demo
  const type = params['cast'];

  if (type === 'front') {
    return (
      <>
        {/* title */}
        <div className="mt-8 flex items-center px-8">
          <Back />
          <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{type}</h1>
        </div>
        {/* content */}
        <div></div>
      </>
    );
  } else if (type === 'back') {
    return (
      <>
        {/* title */}
        <div className="mt-8 flex items-center px-8">
          <Back />
          <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{type}</h1>
        </div>
        {/* content */}
        <div></div>
      </>
    );
  } else {
    return (
      <>
        {/* title */}
        <div className="mt-8 flex items-center px-8">
          <Back />
          <h1 className="text-headline-03 text-grayscale-00-black mx-auto">{type}</h1>
        </div>
        {/* content */}
        <div></div>
      </>
    );
  }
}
