import React from "react";

const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
  return (
    <div>
      <button
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} hover:bg-violet-400`}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
