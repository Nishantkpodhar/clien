import React from 'react';

const Modal = ({ isOpen, onClose, title, children, actions = null }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>

        {actions && (
          <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
