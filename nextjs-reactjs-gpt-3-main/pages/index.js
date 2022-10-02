import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState( { text:'' });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      if (search) {
      setIsLoading(true);
      const res = await fetch(`/api/openai`, {
        body: JSON.stringify({
          name: search
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }};
 
    fetchData();
  }, [search]);
  return (
    <div className={styles.container}>
      <Head>
        <title>DocuBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>DocuBot</a>
        </h1>

        <p className={styles.description}>AI-powered Library and API Documentation Explanation</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Enter any machine learning or sci-kit related question:</h3>
            <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setSearch(query)
          }
        >
          Ask
        </button>
        
          <h4>Answer</h4>  
          {isLoading ? (
            <div>Loading ...</div>
         ) : (
           <span>
           {data.text}
           </span>
           )}
        
          </div>
        </div>
      </main>
    </div>
  );
}