import React from 'react';

type PropsType = {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: PropsType) {
  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      className="w-full cursor-pointer text-center py-1.5 font-semibold border border-gray-800 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white"
    >
      {props.children}
    </button>
  );
}

export default Button;
