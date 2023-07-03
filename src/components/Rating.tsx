'use client';
import { starIcon } from '@/images';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Rating = () => {
  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };
  const handleSubmit = () => {
    router.push(`/feedback?rate=${selectedRating}`);
  };

  return (
    <section className='max-w-[350px] rounded-2xl bg-dark-blue p-6'>
      <Image
        src={starIcon}
        alt='Star Icon'
        className='h-full w-auto rounded-full bg-light-grey/10 p-2'
      />

      <h1 className='my-4 text-2xl font-semibold'>How did we do?</h1>
      <p className='text-[15px] text-light-grey '>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='my-4 flex items-center justify-between'>
        {Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => (
          <span
            key={rating}
            onClick={() => handleRatingSelect(rating)}
            className={`flex h-10 w-10 cursor-pointer justify-center rounded-full bg-light-grey/10 p-2 text-center text-light-grey hover:bg-primary hover:text-white ${
              selectedRating === rating ? 'bg-light-grey/50 text-white' : ''
            }`}
          >
            {rating}
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className='w-full rounded-full bg-primary py-2 uppercase hover:bg-white hover:text-primary'
      >
        Submit
      </button>
      {/* <!-- Rating state end --> */}

      {/* Thank you state end  */}
    </section>
  );
};

export default Rating;
