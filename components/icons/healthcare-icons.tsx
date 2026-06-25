export function HealthcareIconPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="healthcare-pattern"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Stethoscope */}
          <g transform="translate(50, 50)">
            <path
              d="M 10 5 Q 15 5 20 10 Q 25 15 25 20 Q 25 25 20 30 Q 15 35 10 35 Q 5 35 0 30 Q -5 25 -5 20 Q -5 15 0 10 Q 5 5 10 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-blue-600"
            />
            <path
              d="M 0 20 L -10 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            />
            <path
              d="M 20 20 L 30 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            />
          </g>

          {/* Heart */}
          <g transform="translate(150, 50)">
            <path
              d="M 10 5 C 10 5 5 0 2 3 C -1 6 0 10 5 15 L 10 20 L 15 15 C 20 10 21 6 18 3 C 15 0 10 5 10 5"
              fill="currentColor"
              className="text-red-500"
            />
          </g>

          {/* Clipboard */}
          <g transform="translate(50, 150)">
            <rect
              x="0"
              y="5"
              width="15"
              height="30"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-green-600"
            />
            <rect
              x="2"
              y="0"
              width="11"
              height="5"
              fill="currentColor"
              className="text-green-600"
            />
            <line x1="3" y1="10" x2="12" y2="10" stroke="currentColor" strokeWidth="1" className="text-green-600" />
            <line x1="3" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="1" className="text-green-600" />
            <line x1="3" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="1" className="text-green-600" />
            <line x1="3" y1="25" x2="12" y2="25" stroke="currentColor" strokeWidth="1" className="text-green-600" />
            <line x1="3" y1="30" x2="12" y2="30" stroke="currentColor" strokeWidth="1" className="text-green-600" />
          </g>

          {/* Cross/Plus Sign */}
          <g transform="translate(150, 150)">
            <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
          </g>
        </pattern>
      </defs>
      <rect width="1000" height="1000" fill="url(#healthcare-pattern)" />
    </svg>
  )
}
