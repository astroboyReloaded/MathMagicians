import { useEffect, useState } from 'react';
import quoteStyle from '../styles/Quote.module.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    (async () => {
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
        setQuote(data[0].joke);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main>
      {loading && <p className={quoteStyle.phrase}>Loading...</p>}
      {error && <p className={quoteStyle.phrase}>{`Ups! Something went wrong... ${error}`}</p>}
      {quote && (
        <p className={quoteStyle.phrase}>
          {`'${quote}'`}
        </p>
      )}
    </main>
  );
};

export default Quote;
