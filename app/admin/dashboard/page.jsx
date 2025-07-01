import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { Plus, LogOut, BarChart3, FileText, Eye } from 'lucide-react';

export const Dashboard = () => {
  const { logout } = useAuth();
  const { posts, loading, createPost, updatePost, deletePost } = useBlogPosts();
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingPost(null);
  };

  const publishedCount = posts.filter(post => post.isPublished).length;
  const draftCount = posts.filter(post => !post.isPublished).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-gray-900">Blog Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCreatePost}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<FileText className="w-6 h-6 text-blue-600" />} label="Total Posts" value={posts.length} bg="bg-blue-100" />
          <StatCard icon={<Eye className="w-6 h-6 text-green-600" />} label="Published" value={publishedCount} bg="bg-green-100" />
          <StatCard icon={<FileText className="w-6 h-6 text-yellow-600" />} label="Drafts" value={draftCount} bg="bg-yellow-100" />
          <StatCard icon={<BarChart3 className="w-6 h-6 text-purple-600" />} label="Views" value="1.2k" bg="bg-purple-100" />
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Blog Posts</h2>
            <p className="text-sm text-gray-600 mt-1">Manage your blog posts and content</p>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent"></div>
              </div>
            ) : (
              <PostList
                posts={posts}
                onEdit={handleEditPost}
                onDelete={deletePost}
              />
            )}
          </div>
        </div>
      </div>

      {/* Modal for Form */}
      {showForm && (
        <PostForm
          post={editingPost}
          onSave={editingPost ? updatePost : createPost}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

// Helper Component for Stats
const StatCard = ({ icon, label, value, bg }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
    <div className="flex items-center">
      <div className={`p-3 rounded-lg ${bg}`}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);
