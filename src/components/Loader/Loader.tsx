import React from 'react';

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full border-t-4 border-blue-500"
        style={{ height: size, width: size }}
      ></div>
    </div>
  );
};

export default Loader;
