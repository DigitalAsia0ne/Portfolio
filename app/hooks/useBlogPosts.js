import { useState, useEffect } from 'react';

// Mock data for demonstration
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    content: `React and TypeScript make a powerful combination for building robust web applications. In this comprehensive guide, we'll explore the fundamentals of setting up a React project with TypeScript, best practices for component development, and advanced patterns that will help you build scalable applications.

TypeScript brings static typing to JavaScript, which helps catch errors at compile time rather than runtime. When combined with React's component-based architecture, it creates a development experience that is both productive and reliable.`,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdDate: '2025-01-08T10:00:00Z',
    updatedDate: '2025-01-08T10:00:00Z',
    isPublished: true,
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for 2025',
    slug: 'modern-css-techniques-2025',
    content: `CSS has evolved tremendously over the past few years. From CSS Grid and Flexbox to CSS Custom Properties and Container Queries, modern CSS offers powerful tools for creating responsive and maintainable stylesheets.

In this article, we'll explore the latest CSS features that every developer should know in 2025, including practical examples and real-world use cases.`,
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdDate: '2025-01-07T14:30:00Z',
    updatedDate: '2025-01-07T14:30:00Z',
    isPublished: true,
  },
  {
    id: '3',
    title: 'Building Scalable Node.js Applications',
    slug: 'building-scalable-nodejs-applications',
    content: `Node.js has become the go-to runtime for building server-side applications. However, building scalable Node.js applications requires careful consideration of architecture, performance, and best practices.

This guide covers everything from project structure and dependency management to performance optimization and deployment strategies.`,
    coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdDate: '2025-01-06T09:15:00Z',
    updatedDate: '2025-01-06T09:15:00Z',
    isPublished: false,
  },
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));

      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      } else {
        setPosts(mockPosts);
        localStorage.setItem('blogPosts', JSON.stringify(mockPosts));
      }

      setLoading(false);
    };

    loadPosts();
  }, []);

  const savePosts = (newPosts) => {
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  const createPost = async (postData) => {
    const newPost = {
      id: Date.now().toString(),
      ...postData,
      slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };

    const updatedPosts = [...posts, newPost];
    savePosts(updatedPosts);
    return newPost;
  };

  const updatePost = async (postData) => {
    const updatedPosts = posts.map(post =>
      post.id === postData.id
        ? {
            ...post,
            ...postData,
            slug: postData.title
              ? postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
              : post.slug,
            updatedDate: new Date().toISOString(),
          }
        : post
    );

    savePosts(updatedPosts);
    return updatedPosts.find(post => post.id === postData.id);
  };

  const deletePost = async (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
  };

  return {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost,
  };
};
