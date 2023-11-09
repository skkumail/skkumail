import Button, { BUTTON_SIZE, BUTTON_TYPE } from '@/src/components/button/Button';
import PortalContainer from '@/src/components/container/Container';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <PortalContainer>
      <Button type={BUTTON_TYPE.SOLID} size={BUTTON_SIZE.MD}>
        로그인 하세요
      </Button>
    </PortalContainer>
  );
}

