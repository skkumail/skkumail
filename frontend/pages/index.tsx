import Topbar from '@/components/bar/Topbar';
import Button from '@/components/button/Button';
import PortalContainer from '@/components/container/Container';
import { COLORS } from '@/modules/var';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  const handleButtonClick = () => {
    // Use router.push to navigate to the desired page
    router.push('/email');
  };

  return (
    <PortalContainer layoutClassName="mx-auto mb-[120px] mt-[60px] w-full" topbar={<Topbar />}>
      <div className='mt-[20px]'>
        <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-100' onClick={handleButtonClick}>
          <span className='font-bold text-green-500'>GO DEMO</span>
        </Button>
      </div>
    </PortalContainer>
  );
}

