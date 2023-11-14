import Topbar from '@/components/bar/Topbar';
import Button from '@/components/button/Button';
import PortalContainer from '@/components/container/Container';
import { COLORS } from '@/modules/var';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginPage from './login';


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
    <PortalContainer layoutClassName="mx-auto mb-[120px] mt-[60px] w-full">
      <LoginPage />
    </PortalContainer>
  );
}

