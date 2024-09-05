// src/components/ArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../lib/hygraphClient';

interface Article {
  id: string;
  title: string;
  content: {
    json: unknown;
    text: string;
  };
  image: {
    data: {
      url: string;
    };
  };
}

const ARTICLE_QUERY = `
  query article ($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      slug
      content {
        json
        text
      }
      image {
        data {
          url
        }
      }
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
    }
  }
`;

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Get the slug from URL params
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await client.request<{ articles: Article[] }>(ARTICLE_QUERY, { slug });
        
        // Since the response is an array, pick the first article
        const fetchedArticle = data.articles[0] || null;
        setArticle(fetchedArticle);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image.data.url} alt={article.title} />
      <p>{article.content.text}</p>
    </div>
  );
};

export default ArticlePage;
