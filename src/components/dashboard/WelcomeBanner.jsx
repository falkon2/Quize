import React, {useState} from 'react';
import Swal from 'sweetalert2';

function  WelcomeBanner() {
  const name = localStorage.getItem('name')
  let timerInterval
  const [Click, setClick] = useState(0);

const EasterEggClick = async () => {
  const newClick = Click + 1;
  setClick(newClick);
  console.log(newClick);
  if (newClick === 3) {
    Swal.fire({
  title: "Something mysterious appeared",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(https://sweetalert2.github.io/#images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media.tenor.com/GJ72TMihJP8AAAAC/aesthetic-tv.gif")
    center
    repeat
  `,
  
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }

});
    window.location.replace('https://quizeeasteregg.vercel.app/');
  }
}

    return (
      <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

        {/* Background illustration */}
        <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
          <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
              <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
              <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="rotate(64 36.592 105.604)">
                <mask id="welcome-d" fill="#fff">
                  <use xlinkHref="#welcome-a" />
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
              </g>
              <g transform="rotate(-51 91.324 -105.372)">
                <mask id="welcome-f" fill="#fff">
                  <use xlinkHref="#welcome-e" />
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
              </g>
              <g transform="rotate(44 61.546 392.623)">
                <mask id="welcome-h" fill="#fff">
                  <use xlinkHref="#welcome-g" />
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
              </g>
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative">
          <h1 id="greeting" className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">{`Welcome, ${name}.`} <span
              onClick={EasterEggClick}>👋</span></h1>
          <p className='text-gray-600'>Here is what’s happening with your Tests today:</p>
        </div>

      </div>
    );

}


export default WelcomeBanner;
