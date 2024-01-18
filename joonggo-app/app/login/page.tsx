import LoginBtn from "../_components/login/login-btn";
import LoginInput from "../_components/login/login-btn";
import Image from "next/image";

const LoginPage: React.FC = () => {
  return (
    <main className="relative flex-grow border-b-2">
      <div className="min-h-[100vh] flex flex-col justify-center items-center mx-auto max-w-[1280px] px-4 md:px-8 2xl:px-16 box-content">
        <div className="max-[767px]:w-full mx-auto my-auto flex flex-col justify-center items-center space-y-5">
          <a
            className="max-[479px]:self-start max-[479px]:ml-5 inline-flex focus:outline-none relative"
            href="/"
          >
            <span>
              <Image
                alt="Joonggonara"
                width={100}
                height={30}
                src="../../public/custom-logo.svg"
                decoding="async"
                data-nimg="fill"
              />
            </span>
          </a>
          <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-[450px] sm:border sm:border-gray-300 py-5 px-5 sm:px-8 relative">
            <div>
              <div>
                <div className="min-h-[500px] flex flex-col justify-between">
                  <div className="text-center pt-2.5">
                    <h2 className="font-semibold text-left text-2xl text-black focus-visible:ring">
                      <span className="block">중고나라에 오신 것을</span>
                      <span>환영합니다.</span>
                    </h2>
                  </div>
                  <LoginInput />
                  {/* <span className="block" title="ID">
                    ID :{" "}
                  </span>
                  <input
                    className="flex-1 mr-[22px]"
                    id="auto-login"
                    type="text"
                  />
                  <span title="PW">PW : </span> */}
                  {/* <input
                    className="flex-1 mr-[22px]"
                    id="auto-login"
                    type="text"
                  /> */}
                  <div className="mt-atuo">
                    <div>
                      <label
                        htmlFor="auto-login"
                        className="flex justify-start items-center cursor-pointer"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#0DCC5A"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block mr-2"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#0DCC5A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M16 9L10.5 14.5L8 12"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <span className="inline-block font-semibold text-sm">
                          로그인 유지하기
                        </span>
                      </label>
                      <input
                        id="auto-login"
                        type="checkbox"
                        className="a11yHidden"
                      />
                    </div>
                    <button
                      data-variant="flat"
                      className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-naver hover:bg-naver justify-between"
                    >
                      <div className="text-sm sm:text-base me-1.5">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_18575_1864)">
                            <g clip-path="url(#clip1_18575_1864)">
                              <path
                                d="M9.99967 18.9993C14.97 18.9993 18.9993 14.97 18.9993 9.99967C18.9993 5.02929 14.97 1 9.99967 1C5.02929 1 1 5.02929 1 9.99967C1 14.97 5.02929 18.9993 9.99967 18.9993Z"
                                fill="#5A616B"
                              ></path>
                              <path
                                d="M9.61785 8.44348C10.9306 8.44348 12.2433 8.44348 13.556 8.44348C14.545 8.44348 15.3996 9.20114 15.5026 10.1862C15.5615 10.7512 15.3949 11.2535 15.0104 11.6768C14.6353 12.0894 14.1632 12.296 13.6101 12.3308C13.5152 12.3368 13.4215 12.3401 13.3266 12.3314C13.1908 12.3194 13.0972 12.3903 13.037 12.508C12.9822 12.6156 12.928 12.7233 12.8638 12.8256C12.1938 13.8869 11.2462 14.5309 10.003 14.7342C9.7001 14.7836 9.39583 14.809 9.09023 14.7923C8.45227 14.7582 7.85777 14.579 7.31343 14.2426C6.73967 13.8882 6.25418 13.4395 5.88304 12.8744C5.53797 12.3488 5.34538 11.7684 5.28453 11.1438C5.22969 10.5827 5.25511 10.0197 5.26112 9.45726C5.2638 9.21652 5.25912 8.97512 5.28319 8.73438C5.30192 8.5458 5.35274 8.47959 5.54132 8.45151C5.58679 8.44482 5.6336 8.44348 5.67974 8.44348C6.99245 8.44348 8.30515 8.44348 9.61785 8.44348ZM13.4563 11.0094C13.4463 11.1672 13.4944 11.2173 13.6502 11.1986C13.9271 11.1658 14.1351 11.0241 14.2735 10.7847C14.4327 10.5105 14.3992 10.2357 14.2521 9.97017C14.1163 9.72475 13.9024 9.59302 13.6195 9.58298C13.5285 9.57964 13.4944 9.61241 13.4784 9.70135C13.4737 9.72877 13.473 9.75752 13.473 9.78561C13.473 9.95479 13.4764 10.124 13.4831 10.2938C13.4924 10.5326 13.473 10.7706 13.455 11.0087"
                                fill="white"
                              ></path>
                              <path
                                d="M12.3199 5.21627C12.4517 5.21627 12.4878 5.25439 12.4918 5.38746C12.5139 6.09029 12.2611 6.68412 11.7569 7.1656C11.3563 7.54744 10.8715 7.75073 10.3171 7.78818C10.0998 7.80289 9.88244 7.81827 9.66511 7.81559C9.25986 7.81158 8.85462 7.79687 8.44937 7.78483C8.3163 7.78082 8.27082 7.73334 8.27149 7.59492C8.27617 7.03653 8.4487 6.537 8.80246 6.10099C9.19232 5.62085 9.69052 5.33129 10.3037 5.24168C10.4221 5.22429 11.1657 5.20223 11.2861 5.2029C11.5395 5.20423 12.021 5.2156 12.3206 5.21627"
                                fill="white"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_18575_1864">
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                            <clipPath id="clip1_18575_1864">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(1 1)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className="flex-1 mr-[22px]">
                        네이버로 시작하기
                      </span>
                    </button>
                    <button
                      data-variant="flat"
                      className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-kakao hover:bg-kakao hover:text-black text-black justify-between"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-sm sm:text-base me-1.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"></path>
                        </g>
                      </svg>
                      <span className="flex-1 mr-[22px]">
                        카카오로 시작하기
                      </span>
                    </button>
                    <button
                      data-variant="flat"
                      className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center placeholder-white focus-visible:outline-none focus:outline-none rounded-md px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-white text-black border-solid border border-black justify-between"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="text-sm sm:text-base me-1.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 mr-[22px]">
                        휴대폰번호로 시작하기
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-black font-semibold">
            <span>공용 PC에서는 [로그인 유지하기]를 꺼주세요</span>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </main>
  );
};

export default LoginPage;
