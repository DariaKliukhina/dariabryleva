import React from "react";

const GithubIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      className={className}
    >
      <path
        d="M13.5 0C9.91958 0 6.4858 1.42232 3.95406 3.95406C1.42232 6.4858 0 9.91958 0 13.5C0 17.0804 1.42232 20.5142 3.95406 23.0459C6.4858 25.5777 9.91958 27 13.5 27C17.0804 27 20.5142 25.5777 23.0459 23.0459C25.5777 20.5142 27 17.0804 27 13.5C27 9.91958 25.5777 6.4858 23.0459 3.95406C20.5142 1.42232 17.0804 0 13.5 0ZM17.0584 24.5059H16.9537C16.8751 24.5112 16.7962 24.4999 16.7221 24.4728C16.6481 24.4457 16.5806 24.4033 16.524 24.3484C16.4705 24.2931 16.429 24.2274 16.4019 24.1554C16.3748 24.0835 16.3627 24.0067 16.3665 23.9299V22.3481C16.374 21.8224 16.3777 21.2914 16.3777 20.7551C16.3758 20.3636 16.3186 19.9742 16.2079 19.5986C16.103 19.2189 15.8914 18.8773 15.5981 18.6142C16.3823 18.5387 17.1531 18.3606 17.8909 18.0844C18.5133 17.8477 19.0762 17.4775 19.5401 16.9999C19.998 16.5195 20.3389 15.939 20.5357 15.3056C20.7747 14.5298 20.8886 13.721 20.8733 12.9094C20.8786 12.3426 20.7794 11.7797 20.5808 11.2489C20.3796 10.7137 20.0758 10.223 19.6864 9.80438C19.7706 9.59334 19.8317 9.37381 19.8686 9.14963C19.9061 8.92463 19.9249 8.69812 19.9249 8.47012C19.9249 8.17612 19.8911 7.88625 19.8236 7.6005C19.7636 7.30823 19.6805 7.0212 19.575 6.74213C19.5352 6.7268 19.4928 6.71916 19.4501 6.71963H19.3264C19.0669 6.72263 18.8141 6.76425 18.5681 6.8445C18.2976 6.92208 18.0332 7.01985 17.7773 7.137C17.5227 7.25234 17.2745 7.38115 17.0336 7.52287C16.7921 7.66612 16.5772 7.80187 16.389 7.93012C14.4963 7.4039 12.4959 7.4039 10.6031 7.93012C10.3919 7.78921 10.1774 7.65342 9.95962 7.52287C9.71594 7.3789 9.46344 7.2504 9.20362 7.13812C8.9479 7.0183 8.6826 6.92008 8.4105 6.8445C8.1701 6.76503 7.91893 6.72291 7.66575 6.71963H7.542C7.4997 6.7193 7.45773 6.72694 7.41825 6.74213C7.31307 7.0222 7.22663 7.30896 7.1595 7.6005C7.0995 7.887 7.06912 8.17687 7.06837 8.47012C7.06837 8.69812 7.0875 8.92463 7.12575 9.14963C7.164 9.37463 7.224 9.59288 7.30575 9.80438C6.91744 10.2236 6.61477 10.7147 6.41475 11.25C6.2149 11.7806 6.1146 12.3435 6.11888 12.9105C6.10368 13.7177 6.21451 14.5224 6.44737 15.2955C6.651 15.9289 6.99075 16.5105 7.44187 17.001C7.90875 17.4758 8.47125 17.8448 9.09113 18.0855C9.82575 18.3668 10.5953 18.5468 11.3783 18.621C11.1589 18.8185 10.9853 19.0615 10.8697 19.3331C10.7591 19.6013 10.6835 19.8826 10.6447 20.1701C10.232 20.3679 9.78054 20.4716 9.32287 20.4739C8.89797 20.49 8.47879 20.3719 8.12475 20.1364C7.78541 19.885 7.4981 19.5702 7.27875 19.2094C7.18092 19.0576 7.07107 18.9139 6.95025 18.7796C6.82314 18.6382 6.68302 18.509 6.53175 18.3938C6.38293 18.2818 6.21939 18.191 6.04575 18.1238C5.87515 18.0489 5.69091 18.0103 5.50463 18.0101C5.45963 18.0116 5.41462 18.0154 5.36962 18.0214C5.30821 18.0217 5.24704 18.0293 5.18738 18.0439C5.13496 18.0574 5.08542 18.0803 5.04112 18.1114C5.02124 18.1228 5.0046 18.1392 4.99279 18.1589C4.98098 18.1786 4.97438 18.2009 4.97363 18.2239C4.97835 18.278 4.9949 18.3305 5.02212 18.3775C5.04933 18.4245 5.08655 18.465 5.13112 18.4961C5.23612 18.5794 5.32313 18.6435 5.39213 18.6885L5.42587 18.7121C5.57587 18.8284 5.71912 18.9532 5.85562 19.0867C5.98237 19.1977 6.09488 19.3215 6.19313 19.458C6.29513 19.5915 6.38175 19.7344 6.453 19.8866C6.5355 20.0366 6.62213 20.2102 6.71288 20.4075C6.92438 20.9407 7.30012 21.3919 7.78613 21.6956C8.29575 21.969 8.86725 22.1051 9.44663 22.0905C9.64313 22.0905 9.83887 22.0793 10.0339 22.0568C10.2274 22.026 10.4205 21.9919 10.6133 21.9544V23.9152C10.6168 23.9943 10.6035 24.0732 10.5745 24.1468C10.5454 24.2204 10.5011 24.2871 10.4445 24.3424C10.3879 24.3977 10.3203 24.4405 10.246 24.4679C10.1718 24.4953 10.0926 24.5067 10.0136 24.5014H9.94387C7.32042 23.6539 5.08575 21.8975 3.64226 19.5487C2.19878 17.1998 1.64134 14.4128 2.07032 11.6894C2.4993 8.96603 3.88651 6.48529 5.98215 4.69391C8.0778 2.90252 10.7442 1.9182 13.5011 1.9182C16.2581 1.9182 18.9244 2.90252 21.0201 4.69391C23.1157 6.48529 24.503 8.96603 24.9319 11.6894C25.3609 14.4128 24.8035 17.1998 23.36 19.5487C21.9165 21.8975 19.6818 23.6539 17.0584 24.5014V24.5059Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GithubIcon;
