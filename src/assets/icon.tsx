/** 계절별 오름 아이콘 */
export const seasonalOrem = {
  spring: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8431 7.2C12.2072 4.83722 12.8893 3.65583 13.7798 3.25936C14.5565 2.91355 15.4435 2.91355 16.2202 3.25936C17.1107 3.65583 17.7928 4.83722 19.1569 7.2L23.8335 15.3C25.1976 17.6628 25.8797 18.8442 25.7778 19.8136C25.6889 20.6592 25.2454 21.4273 24.5576 21.9271C23.769 22.5 22.4048 22.5 19.6765 22.5H10.3235C7.59516 22.5 6.23101 22.5 5.44242 21.9271C4.75457 21.4273 4.31108 20.6592 4.22221 19.8136C4.12032 18.8442 4.80239 17.6628 6.16654 15.3L10.8431 7.2Z"
        fill="#D67C7C"
      />
    </svg>
  ),
  summer: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8431 7.2C12.2072 4.83722 12.8893 3.65583 13.7798 3.25936C14.5565 2.91355 15.4435 2.91355 16.2202 3.25936C17.1107 3.65583 17.7928 4.83722 19.1569 7.2L23.8335 15.3C25.1976 17.6628 25.8797 18.8442 25.7778 19.8136C25.6889 20.6592 25.2454 21.4273 24.5576 21.9271C23.769 22.5 22.4048 22.5 19.6765 22.5H10.3235C7.59516 22.5 6.23101 22.5 5.44242 21.9271C4.75457 21.4273 4.31108 20.6592 4.22221 19.8136C4.12032 18.8442 4.80239 17.6628 6.16654 15.3L10.8431 7.2Z"
        fill="#90A68D"
      />
    </svg>
  ),
  autumn: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8431 7.2C12.2072 4.83722 12.8893 3.65583 13.7798 3.25936C14.5565 2.91355 15.4435 2.91355 16.2202 3.25936C17.1107 3.65583 17.7928 4.83722 19.1569 7.2L23.8335 15.3C25.1976 17.6628 25.8797 18.8442 25.7778 19.8136C25.6889 20.6592 25.2454 21.4273 24.5576 21.9271C23.769 22.5 22.4048 22.5 19.6765 22.5H10.3235C7.59516 22.5 6.23101 22.5 5.44242 21.9271C4.75457 21.4273 4.31108 20.6592 4.22221 19.8136C4.12032 18.8442 4.80239 17.6628 6.16654 15.3L10.8431 7.2Z"
        fill="#CAB8A0"
      />
    </svg>
  ),
  winter: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8431 7.2C12.2072 4.83722 12.8893 3.65583 13.7798 3.25936C14.5565 2.91355 15.4435 2.91355 16.2202 3.25936C17.1107 3.65583 17.7928 4.83722 19.1569 7.2L23.8335 15.3C25.1976 17.6628 25.8797 18.8442 25.7778 19.8136C25.6889 20.6592 25.2454 21.4273 24.5576 21.9271C23.769 22.5 22.4048 22.5 19.6765 22.5H10.3235C7.59516 22.5 6.23101 22.5 5.44242 21.9271C4.75457 21.4273 4.31108 20.6592 4.22221 19.8136C4.12032 18.8442 4.80239 17.6628 6.16654 15.3L10.8431 7.2Z"
        fill="#90A68D"
      />
      <path
        d="M11.2057 5.58606C12.3769 3.86186 12.9625 2.99975 13.6711 2.64962C14.5087 2.23578 15.4913 2.23578 16.3289 2.64962C17.0375 2.99975 17.6231 3.86186 18.7943 5.58606C20.2477 7.72585 20.9744 8.79575 20.9951 9.67964C21.0196 10.7232 20.4999 11.7044 19.6229 12.2705C18.8801 12.75 17.5867 12.75 15 12.75C12.4133 12.75 11.1199 12.75 10.3771 12.2705C9.5001 11.7044 8.9804 10.7232 9.00488 9.67964C9.02562 8.79575 9.75233 7.72585 11.2057 5.58606Z"
        fill="white"
      />
    </svg>
  ),
};

export const Cloud = ({ ...rest }: any) => {
  return (
    <svg width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M76 66.8352C89.4999 65.3429 100 53.8977 100 40C100 25.0883 87.9117 13 73 13C72.5533 13 72.1092 13.0108 71.6679 13.0323C66.7041 5.19962 57.9593 0 48 0C34.9316 0 23.9543 8.9528 20.8668 21.0597C9.20283 21.9149 0 31.8589 0 44C0 56.7025 10.0736 67 22.5 67C22.6671 67 22.8338 66.9981 23 66.9944V67H73H76V66.8352Z"
        fill="white"
      />
    </svg>
  );
};

export const weatherCard = {
  cloud: (
    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="163" height="163" rx="28" fill="#DCDCDC" />
      <mask id="mask0_99_7556" maskUnits="userSpaceOnUse" x="0" y="0" width="163" height="163">
        <rect width="163" height="163" rx="28" fill="#C7C7C7" />
      </mask>
      <g mask="url(#mask0_99_7556)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.0676 162.261C86.7378 176.366 71.994 186 55 186C30.6995 186 11 166.301 11 142C11 121.196 25.4385 103.764 44.8414 99.1785C49.2279 75.1856 70.2402 57 95.5 57C113.095 57 128.629 65.8236 137.919 79.2873C163.261 81.9909 183 103.44 183 129.5C183 157.39 160.39 180 132.5 180C117.111 180 103.33 173.117 94.0676 162.261Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  snow: (
    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="163" height="163" rx="28" fill="#DCDCDC" />
      <mask id="mask0_99_7573" maskUnits="userSpaceOnUse" x="0" y="0" width="163" height="163">
        <rect width="163" height="163" rx="28" fill="#C7C7C7" />
      </mask>
      <g mask="url(#mask0_99_7573)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M145.075 80.2301C150.043 73.807 153 65.7488 153 57C153 36.0132 135.987 19 115 19C94.0132 19 77 36.0132 77 57C77 65.7488 79.9566 73.807 84.9251 80.2301C67.6075 90.5108 56 109.4 56 131C56 163.585 82.4152 190 115 190C147.585 190 174 163.585 174 131C174 109.4 162.393 90.5108 145.075 80.2301Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  sunny: (
    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="163" height="163" rx="28" fill="#DCDCDC" />
      <mask id="mask0_99_7549" maskUnits="userSpaceOnUse" x="0" y="0" width="163" height="163">
        <rect width="163" height="163" rx="28" fill="#C7C7C7" />
      </mask>
      <g mask="url(#mask0_99_7549)">
        <circle cx="114" cy="118" r="71" fill="#E7C177" />
      </g>
    </svg>
  ),
  rain: (
    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="163" height="163" rx="28" fill="#DCDCDC" />
      <mask id="mask0_99_7566" maskUnits="userSpaceOnUse" x="0" y="0" width="163" height="163">
        <rect width="163" height="163" rx="28" fill="#C7C7C7" />
      </mask>
      <g mask="url(#mask0_99_7566)">
        <path
          d="M166 123.5C166 156.085 139.585 182.5 107 182.5C74.4152 182.5 48 156.085 48 123.5C48 100.652 77.0087 52.5657 94.3447 25.8689C100.379 16.5769 113.621 16.5769 119.655 25.8689C136.991 52.5657 166 100.652 166 123.5Z"
          fill="#A1CAD7"
        />
      </g>
    </svg>
  ),
  fog: (
    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="163" height="163" rx="28" fill="#DCDCDC" />
      <mask id="mask0_99_7582" maskUnits="userSpaceOnUse" x="0" y="0" width="163" height="163">
        <rect width="163" height="163" rx="28" fill="#C7C7C7" />
      </mask>
      <g mask="url(#mask0_99_7582)">
        <rect x="40" y="85" width="164" height="20" rx="10" fill="white" />
        <rect x="77" y="72" width="164" height="9" rx="4.5" fill="white" />
        <rect x="22" y="98" width="164" height="30" rx="15" fill="white" />
        <rect x="56" y="116" width="164" height="30" rx="15" fill="white" />
      </g>
    </svg>
  ),
};
