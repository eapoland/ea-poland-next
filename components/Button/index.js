import Link from "next/link";
import React from "react";

const Button = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>
        <button className="bg-primary py-3 px-7 text-sm uppercase font-bold text-white">
          {text}
        </button>
      </a>
    </Link>
  );
};

export default Button;
