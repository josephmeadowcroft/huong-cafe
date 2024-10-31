import Link from "next/link";
import React from "react";

export default function PopButton({
  handleClick,
  title,
  href,
  target = "_self",
  btnStyles = "bg-white",
  textStyles = "text-black",
}) {
  return (
    <Link
      href={href}
      passHref
      className={`relative transition-all duration-200 ease-in-out ${textStyles}`}
      onClick={handleClick}
      target={target}
    >
      <div className="h-12 px-4 py-3 bg-destructive text-center justify-center items-center z-0 rounded-md absolute inset-0 w-full transform transition-transform duration-200 ease-in-out"></div>
      <div
        className={`h-12 px-4 py-3 text-center relative justify-center items-center z-50 rounded-md transform transition-transform duration-200 ease-in-out hover:-translate-x-1.5 hover:-translate-y-1.5 ${btnStyles}`}
      >
        <p className="font-semibold">{title}</p>
      </div>
    </Link>
  );
}
