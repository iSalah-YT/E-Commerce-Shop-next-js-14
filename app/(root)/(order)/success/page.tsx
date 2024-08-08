import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
      <Image src="/images/order.svg" width={300} height={300} alt="success" />
      <h1 className="mb-8 text-3xl mt-2 font-bold uppercase text-green-600">
        Your order has been placed
      </h1>

      <Link href="/">
        <Button size={'lg'}>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default SuccessPage;
