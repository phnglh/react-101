import { useEffect, useState } from 'react';
import kyClient from '../../lib/kyClient';

export default function HomePage() {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    kyClient
      .get('')
      .json<{ message: string }>()
      .then(setData)
      .catch(console.error);
  }, []);

  return <h1>{data?.message ?? 'Loading...'}</h1>;
}
