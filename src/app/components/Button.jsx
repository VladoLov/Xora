import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Marker from "./Marker";

const Button = ({
  children,
  icon,
  href,
  onClick,
  containerClassName,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[-1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <Image
            src={icon}
            alt="circle"
            width={40}
            height={40}
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </button>
  );
};

export default Button;
