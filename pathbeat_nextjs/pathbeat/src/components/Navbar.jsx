import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavData } from '../data/NavData';
import { Link as Go, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxStoreHooks';
import { useFetchUserLocalData, useValidateToken } from '../hooks/userHooks';
import { handleLogoutPress, updateLocalStorage } from '../utils/userApis';
import { setUserLogout, setUserSignin } from '../redux-store/slices/userSlice';
import { setSignInModalInfo } from '../redux-store/slices/generalSlice';
import LoginButton from './authentications/LoginButton';
import { CgProfile } from 'react-icons/cg';
import SignInModal from './authentications/SignInModal';
import { IoIosLogOut } from 'react-icons/io';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { signInModalInfo } = useAppSelector((state) => state.generalSlice);
  const { responseData, isAuthenticated } = useAppSelector(
    (state) => state.userSlice
  );
  const { mutate: validateToken, data: tokenData } = useValidateToken();
  const { data: localData } = useFetchUserLocalData();

  const modalRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const isHomePage = pathname === '/';

  // Function to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && isHomePage) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  // Validate Token and Handle User State
  const handleValidation = useCallback(async () => {
    try {
      if (tokenData?.data) {
        const { IsNewAccessTokenGranted, IsValid, AccessToken } =
          tokenData.data;
        if (IsNewAccessTokenGranted) {
          await updateLocalStorage({ Token: { AccessToken } });
          dispatch(setUserSignin(localData));
          return true;
        } else if (IsValid) {
          dispatch(setUserSignin(localData));
          return true;
        } else {
          dispatch(setUserLogout());
          return false;
        }
      }
      return false;
    } catch (err) {
      console.error('Error during token validation:', err);
      dispatch(setUserLogout());
      return false;
    }
  }, [tokenData?.data, localData, dispatch]);

  useEffect(() => {
    const runValidation = async () => {
      try {
        if (!tokenData) {
          await validateToken();
        } else if (tokenData?.data) {
          handleValidation();
        }
      } catch (error) {
        console.log('error from useEffect', error.message);
      }
    };
    runValidation();
  }, [validateToken, tokenData, handleValidation]);

  // Handle modal open
  const handleModal = () => {
    dispatch(
      setSignInModalInfo({
        isModalVisible: true,
        singInModalText: 'Login',
      })
    );
  };

  // Toggle profile dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // Handle Logout
  const handleLogoutPressLocal = async () => {
    await handleLogoutPress();
    dispatch(setUserLogout());
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      <nav
        className={`lg:px-28 fixed lg:bg-transparent lg:py-2 xl:py-3 z-50 w-full transition-all duration-100 pb-5`}
      >
        <div
          className={` flex text-lg  justify-between items-center m-auto bg-white lg:bg-transparent px-7 lg:px-4 xl:px-7 lg:rounded-full ${
            isScrolled && isHomePage
              ? 'lg:bg-white text-black shadow-lg ease-in-out duration-300'
              : isHomePage
                ? 'bg-transparent text-white'
                : 'lg:bg-transparent text-black '
          } ${!isHomePage ? 'lg:bg-white shadow-lg ease-in-out text-black duration-300' : ''} p-3`}
        >
          <div>
            <Go to={'/'}>
              {isScrolled || !isHomePage ? (
                <img
                  className="h-12 lg:block hidden lg:w-auto"
                  src="/logo/logo_2.png"
                  alt="Pathbeat logo"
                />
              ) : (
                <img
                  className="lg:block hidden h-12 lg:w-auto"
                  src="/logo/logo.png"
                  alt="Pathbeat logo"
                />
              )}
              <img
                className="h-12 lg:hidden lg:w-auto"
                src="/logo/logo_2.png"
                alt="Pathbeat logo"
              />
            </Go>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-16 lg:gap-2 xl:gap-16">
            {NavData.map((item, index) => (
              <div key={index}>
                {pathname === '/' && item.title !== 'Destinations' ? ( // Check if you're on the homepage (or whichever page has the scrollable sections)
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="active-link"
                    className="font-medium hover:scale-105 cursor-pointer lg:px-1 xl:px-0  "
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Go
                    to={
                      item.title !== 'Destinations' ? `/#${item.to}` : item.to
                    }
                    className="font-medium hover:scale-105 cursor-pointer "
                  >
                    {item.title}
                  </Go>
                )}
              </div>
            ))}
          </div>

          {/* Authentication Section */}
          <div className="hidden lg:flex gap-5 justify-center items-center">
            {isAuthenticated ? (
              <div ref={modalRef} className="relative">
                <CgProfile
                  onClick={toggleDropdown}
                  className="text-4xl text-black font-light sm:font-medium text-center m-auto cursor-pointer"
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#FAFAFA] border-gray-300 rounded-lg shadow-lg z-20">
                    <div className="px-4 py-2 text-[#12273F]">
                      <p className="font-ibm">
                        {responseData?.User?.Name || responseData?.User?.Email}
                      </p>
                      <p className="text-sm text-gray-600 font-ibm">
                        {responseData?.User?.Email}
                      </p>
                    </div>
                    <div className="bg-[#12273F] btn hover:bg-[#1d3f66] py-2 px-4 rounded mt-1 text-center">
                      <button
                        onClick={handleLogoutPressLocal}
                        className="hover:scale-105 ease-in-out duration-1000 text-white font-ibm"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <LoginButton onPress={handleModal}>Login</LoginButton>
            )}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex lg:gap-1 xl:gap-5 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.pathbeat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300"
            >
              <img
                src="/whyus/play-store.png"
                className="w-[25%] h-10 lg:w-[90%] xl:w-auto"
                alt=""
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/pathbeat/id6670258755"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300"
            >
              <img
                src="/whyus/app-store.png"
                className="w-[25%] h-10 lg:w-[90%] xl:w-auto"
                alt=""
              />
            </a>
          </div>
          {/* Mobile Menu Toggle and Language Selector */}
          <div className="lg:hidden  flex gap-5">
            {show ? (
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="flex h-4 w-4"
              >
                <img src="/Navbar/close.svg" alt="Menu Toggle" />
              </button>
            ) : (
              <div className="flex gap-2 m-auto ">
                {isAuthenticated ? (
                  <div ref={modalRef} className="relative z-50">
                    <CgProfile
                      onClick={toggleDropdown}
                      className="text-4xl text-[#000] font-light sm:font-medium text-center m-auto cursor-pointer"
                    />
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-[#FAFAFA] border-gray-300 rounded-lg shadow-lg z-20">
                        <div className="px-4 py-2 text-[#12273F]">
                          <p className="font-ibm">
                            {responseData?.User?.Name ||
                              responseData?.User?.Email}
                          </p>
                          <p className="text-sm text-gray-600 font-ibm">
                            {responseData?.User?.Email}
                          </p>
                        </div>
                        <div className="bg-[#12273F] btn hover:bg-[#1d3f66] py-2 px-4 rounded mt-1 text-center">
                          <button
                            onClick={handleLogoutPressLocal}
                            className="hover:scale-105 ease-in-out duration-1000 text-white font-ibm"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  ''
                )}
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="flex h-8 w-8"
                >
                  <img src="/Navbar/open.svg" alt="Menu Toggle" />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {show && (
        <div
          className=" lg:hidden bg-[#FAFAFA] rounded-2xl p-5 w-screen right-0 fixed mt-10 z-40"
          ref={mobileMenuRef}
        >
          <div className="pt-4 flex  flex-col rounded-xl items-start">
            {NavData?.map((item, index) => (
              <div key={index}>
                {pathname === '/' && item.title !== 'Destinations' ? (
                  <ScrollLink
                    key={index}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active-link"
                    className="font-semibold text-black  p-3 w-full"
                    onClick={() => setShow(false)}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Go
                    to={
                      item.title !== 'Destinations' ? `/#${item.to}` : item.to
                    }
                    className="font-semibold text-black  p-3 w-full"
                  >
                    {item.title}
                  </Go>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {isAuthenticated ? (
              <div className="relative flex flex-col gap-2 items-start">
                <div className="p-3">
                  <p className="text-lg text-[#12273F] font-semibold">
                    {responseData?.User?.Name || responseData?.User?.Email}
                  </p>
                  <div className="cursor-pointer ">
                    <LoginButton onPress={handleLogoutPressLocal}>
                      Logout
                    </LoginButton>
                  </div>
                </div>
              </div>
            ) : (
              <div className="ml-3">
                <LoginButton onPress={handleModal}>Login</LoginButton>
              </div>
            )}
          </div>
          <div className="flex gap-5 mt-5 items-center ml-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.pathbeat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300"
            >
              <img
                src="/whyus/play-store.png"
                className="w-[100%]"
                alt="Google Playstore"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/pathbeat/id6670258755"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300"
            >
              <img
                src="/whyus/app-store.png"
                className="w-[100%]"
                alt="Apple Appstore"
              />
            </a>
          </div>
        </div>
      )}
      <SignInModal />
      {!isHomePage && <div className="lg:pt-24"></div>}

      {/* Additional Padding to Prevent Content Overlap */}
    </>
  );
};

export default Navbar;
