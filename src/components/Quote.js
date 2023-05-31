import { useEffect, useState } from 'react';
import quote from '../styles/Quote.module.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/dadjokes?limit=1',
          {
            headers: {
              'X-Api-Key': 'oNaTrFfgL5OH2S52NR+xew==tPr1dJuqTaePURP8',
            },
          },
        );
        const data = await response.json();
        setQuote(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (quote) {
    return (
      <section>
        <p>
          {`${quote[0].joke}`}
        </p>
      </section>
    );
  }

  return (
    <p>{`Ups! Something went wrong... ${error}`}</p>
  );
};

export default Quote;
