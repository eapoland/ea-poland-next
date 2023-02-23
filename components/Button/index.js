import Link from "next/link";
import React from "react";

const Button = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-primary py-3 px-7 text-sm uppercase font-bold text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
