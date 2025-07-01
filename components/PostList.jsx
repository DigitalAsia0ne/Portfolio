import React from 'react';
import { Edit, Trash2, Eye, Calendar, Globe, FileText } from 'lucide-react';

export const PostList = ({ posts, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleDelete = (post) => {
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      onDelete(post.id);
    }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
        <p className="text-gray-600 mb-6">Get started by creating your first blog post.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{post.title}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    post.isPublished
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {post.isPublished ? (
                    <>
                      <Globe className="w-3 h-3 mr-1" />
                      Published
                    </>
                  ) : (
                    <>
                      <FileText className="w-3 h-3 mr-1" />
                      Draft
                    </>
                  )}
                </span>
              </div>

              <p className="text-gray-600 mb-3 line-clamp-2">
                {post.content.substring(0, 150)}...
              </p>

              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Created {formatDate(post.createdDate)}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  Slug: {post.slug}
                </div>
              </div>
            </div>

            {post.coverImage && (
              <div className="ml-6 flex-shrink-0">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-24 h-16 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Last updated {formatDate(post.updatedDate)}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(post)}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(post)}
                className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-lg text-red-700 bg-red-50 hover:bg-red-100 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
