// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { client } from '../lib/hygraphClient';

import '../App.css'

interface Article {
  id: string;
  title: string;
  slug: string;
}


const ARTICLES_QUERY = `
  query {
    articles {
      id
      author {
      id
      name
      avatar {
        id
        data {
          url
        }
      }
    }
      title
      slug
      
    }
  }
`;

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.request<{ articles: Article[] }>(ARTICLES_QUERY);
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
