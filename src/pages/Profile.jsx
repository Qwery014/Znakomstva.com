import React, { useState } from 'react';
import Header from '../components/Header';
import "../styles/profile.scss";
import "../styles/auth.scss";
import ProfileProfile from '../components/ProfileProfile';
import ProfileFav from '../components/ProfileFav';
import ProfilePb from '../components/ProfilePb';



const Profile = () => {



  const [selected, setSelected] = useState('profile');

  const handleChange = event => {
    setSelected(event.target.value);
  };

  let profilePage;

  if (selected == "profile") {
    profilePage = <ProfileProfile />;
  } else if (selected == "favourite") {
    profilePage = <ProfileFav />
  } else if (selected == "pb") {
    profilePage = <ProfilePb />
  }


  return (
    <>
      <Header />
      <div className="profile__main_block">
        <div className="container">
          <div className="profile__nav_block">
            <input type="radio" name="profile__nav" id="personal-area" value="profile" checked={selected === 'profile'} onChange={handleChange} />
            <input type="radio" name="profile__nav" id="favourite" value="favourite" checked={selected === 'favourite'} onChange={handleChange} />
            <input type="radio" name="profile__nav" id="personal-balance" value="pb" checked={selected === 'pb'} onChange={handleChange} />
            <div className="border-left__block">
              <div className="border-left__line"></div>
            </div>
            <label htmlFor="personal-area" className='label__block-pa'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_52_928)">
                  <path className='profile__vector_path' d="M9.8582 9.63406C11.1817 9.63406 12.3278 9.15936 13.2642 8.22278C14.2007 7.28635 14.6754 6.14057 14.6754 4.81688C14.6754 3.49364 14.2007 2.34771 13.2641 1.41097C12.3275 0.474699 11.1816 0 9.8582 0C8.5345 0 7.38872 0.474699 6.4523 1.41113C5.51587 2.34756 5.04102 3.49349 5.04102 4.81688C5.04102 6.14057 5.51587 7.2865 6.45245 8.22293C7.38903 9.1592 8.53496 9.63406 9.8582 9.63406V9.63406Z" />
                  <path className='profile__vector_path' d="M18.2862 15.379C18.2592 14.9893 18.2046 14.5642 18.1242 14.1152C18.043 13.663 17.9385 13.2354 17.8134 12.8446C17.6841 12.4407 17.5083 12.0419 17.291 11.6597C17.0655 11.2629 16.8006 10.9175 16.5034 10.6332C16.1926 10.3358 15.812 10.0967 15.372 9.92229C14.9334 9.7488 14.4474 9.66091 13.9276 9.66091C13.7234 9.66091 13.526 9.74468 13.1446 9.99294C12.91 10.146 12.6355 10.323 12.3291 10.5188C12.0671 10.6857 11.7121 10.8421 11.2738 10.9837C10.8461 11.1221 10.4118 11.1923 9.98318 11.1923C9.55456 11.1923 9.12045 11.1221 8.69229 10.9837C8.25437 10.8422 7.89945 10.6858 7.63776 10.5189C7.33427 10.325 7.05961 10.148 6.82142 9.99279C6.44056 9.74453 6.24296 9.66076 6.0388 9.66076C5.51878 9.66076 5.03295 9.7488 4.59456 9.92245C4.15481 10.0965 3.7741 10.3357 3.46297 10.6334C3.16589 10.9178 2.90084 11.2631 2.67562 11.6597C2.45849 12.0419 2.28271 12.4406 2.15332 12.8448C2.02835 13.2356 1.92383 13.663 1.84265 14.1152C1.76224 14.5635 1.70761 14.9888 1.6806 15.3794C1.65405 15.7621 1.64062 16.1593 1.64062 16.5605C1.64062 17.6045 1.9725 18.4496 2.62695 19.073C3.27331 19.688 4.12856 20.0001 5.1686 20.0001H14.7987C15.8387 20.0001 16.6937 19.6882 17.3402 19.073C17.9948 18.4501 18.3267 17.6048 18.3267 16.5603C18.3265 16.1573 18.3129 15.7598 18.2862 15.379V15.379Z" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_52_928" x1="5.04102" y1="4.81703" x2="14.6754" y2="4.81703" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE0979" />
                    <stop offset="1" stopColor="#FF6A00" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_52_928" x1="1.64062" y1="14.8304" x2="18.3267" y2="14.8304" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE0979" />
                    <stop offset="1" stopColor="#FF6A00" />
                  </linearGradient>
                  <clipPath id="clip0_52_928">
                    <rect width="19.9999" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Профиль</span>
            </label>
            <label htmlFor="favourite" className='label__block-fav'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                <g clipPath="url(#clip0_52_928)">
                  <path className='fav__vector_path' d="M13.8323 0H2.22803C1.28295 0 0.453125 0.777477 0.453125 1.69775V18.8639C0.453125 19.172 0.538862 19.4287 0.67704 19.6271C0.842288 19.8642 1.10836 20.0001 1.39368 20C1.66343 20 1.95064 19.8799 2.21586 19.6534L7.40759 15.2453C7.56794 15.1084 7.79826 15.0299 8.03774 15.0299C8.27712 15.0299 8.50698 15.1084 8.6678 15.2457L13.8422 19.6527C14.1083 19.8799 14.3757 20.0001 14.645 20.0001C15.1004 20.0001 15.5443 19.6488 15.5443 18.864V1.69775C15.5443 0.777477 14.7773 0 13.8323 0Z" />
                </g>
              </svg>
              <span>Избранное</span>
            </label>
            <label htmlFor="personal-balance" className='label__block-pb'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_52_928)">
                  <path className='pb__vector_path' d="M18.75 15V16.5625C18.75 17.4244 18.0487 18.125 17.1875 18.125H3.75C2.37125 18.125 1.25 17.0037 1.25 15.625C1.25 15.625 1.25 5.00938 1.25 5C1.25 3.62125 2.37125 2.5 3.75 2.5H15.3125C15.8306 2.5 16.25 2.92 16.25 3.4375C16.25 3.955 15.8306 4.375 15.3125 4.375H3.75C3.40563 4.375 3.125 4.655 3.125 5C3.125 5.345 3.40563 5.625 3.75 5.625H17.1875C18.0487 5.625 18.75 6.32562 18.75 7.1875V8.75H15.625C13.9019 8.75 12.5 10.1519 12.5 11.875C12.5 13.5981 13.9019 15 15.625 15H18.75Z" />
                  <path className='pb__vector_path' d="M18.75 10V13.75H15.625C14.5894 13.75 13.75 12.9106 13.75 11.875C13.75 10.8394 14.5894 10 15.625 10H18.75Z" />
                </g>
              </svg>
              <span>Личный счёт</span>
            </label>
          </div>
          {
            profilePage
          }
        </div>
      </div>
    </>
  );
};

export default Profile;
