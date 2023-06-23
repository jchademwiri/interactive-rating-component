'use client';
import { thankYouIcon } from '@/images';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Feedback = () => {
  const searchParams = useSearchParams();
  const selectedRating = searchParams.get('selectedRating');
  console.log(selectedRating);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <section className='flex max-w-[350px] flex-col items-center rounded-2xl bg-dark-blue p-6 text-center'>
        <Image src={thankYouIcon} alt='illustration-thank-you' />
        <p className='my-4 rounded-full bg-light-grey/10 px-4 py-1 text-xs text-primary'>
          You selected rating {selectedRating} out of 5
        </p>

        <p className='my-4 text-2xl font-semibold '>Thank you!</p>
        <p className='text-xs text-light-grey'>
          Thank you! We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch!
        </p>
      </section>
    </main>
  );
};
export default Feedback;
