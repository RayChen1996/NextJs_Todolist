import * as React from "react";

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

/** - LOGO */
export default function SvgComponent(props: SvgComponentProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_5_162)">
        <path
          d="M17.5818 2.942C17.0248 2.38433 16.1205 2.38468 15.5628 2.942L6.47617 12.029L2.43754 7.9904C1.87988 7.43274 0.975914 7.43274 0.418249 7.9904C-0.139416 8.54807 -0.139416 9.45203 0.418249 10.0097L5.46631 15.0578C5.74496 15.3364 6.11035 15.4761 6.47578 15.4761C6.8412 15.4761 7.20694 15.3368 7.4856 15.0578L17.5818 4.96125C18.1394 4.40398 18.1394 3.49963 17.5818 2.942Z"
          fill="#FFD370"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_162">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
