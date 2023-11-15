import Topbar from '@/components/bar/Topbar';
import Button from '@/components/button/Button';
import PortalContainer from '@/components/container/Container';
import { COLORS } from '@/modules/var';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginPage from './login';


export default function Home() {
  const router = useRouter();

  return (
    <PortalContainer layoutClassName="mx-auto mb-[100px] mt-[200px] flex items-center justify-center w-full" topbar={<Topbar isLogin={true} />}>
      <LoginPage />
    </PortalContainer>
  );
}

