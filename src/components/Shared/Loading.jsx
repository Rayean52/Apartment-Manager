import { Spinner } from 'flowbite-react';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default Loading;