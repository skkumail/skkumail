import Button, { BUTTON_SIZE, BUTTON_TYPE } from '@/components/button/Button';
import PortalContainer from '@/components/container/Container';
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
        <span className='font-bold'>update</span>
      </Button>
    </PortalContainer>
  );
}

