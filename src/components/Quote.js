import { useEffect, useState } from 'react';
import quoteStyle from '../styles/Quote.module.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller.signal;
    (async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/dadjokes?limit=1',
          {
            headers: {
              'X-Api-Key': 'oNaTrFfgL5OH2S52NR+xew==tPr1dJuqTaePURP8',
            },
          },
          {
            signal,
          },
        );
        const data = await response.json();
        setQuote(data[0].joke);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>{`Ups! Something went wrong... ${error}`}</p>
    );
  }

  return (
    <main>
      <p className={quoteStyle.phrase}>
        {quote}
      </p>
    </main>
  );
};

export default Quote;
