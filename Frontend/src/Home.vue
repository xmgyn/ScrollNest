<template>
    <Splash v-if="!completeLoaded" @token="setToken" @dataArray="setData" @setLoading="setLoading" />
    <div class="App" v-if="completeLoaded">
        <div class="Left-pane">
            <div class="Logo"><img src="/Logo-Big.jpg"> </div>
            <div class="Create-Post" @click="openCreatePost">
                <div class="Create-Post-Icon">
                    <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g fill="none" fill-rule="evenodd" stroke="#fbaeff" stroke-linecap="round"
                                stroke-linejoin="round" transform="translate(3 3)">
                                <path
                                    d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682">
                                </path>
                                <path
                                    d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z">
                                </path>
                                <path d="m12.5 2.5.953 1"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="Create-Post-Text merriweather-Medium">Create Post</div>
            </div>
            <div class="nav-Pane">
                <div class="nav-Item">
                    <div class="nav-Item-Icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                                    stroke="#bf92ef" stroke-width="1.5"></path>
                                <path d="M15 18H9" stroke="#bf92ef" stroke-width="1.5" stroke-linecap="round"></path>
                            </g>
                        </svg></div>
                    <div class="nav-Item-Text merriweather-Medium">Home</div>
                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Interface / Trending_Up">
                                    <path id="Vector"
                                        d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14"
                                        stroke="#bf92ef" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </g>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Trending</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon">
                        <svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1"
                            xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#bf92ef" stroke="#bf92ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <desc></desc>
                                <path
                                    d="M28.343,17.48L16,29 L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55 C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
                                    fill="none" stroke="#bf92ef" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="2"></path>
                            </g>
                        </svg>
                    </div>

                    <div class="nav-Item-Text merriweather-Medium">Popular</div>

                </div>
                <div class="nav-Divider"></div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6.00014 11H10.0001M8.00014 9V13M15.0001 12H15.0101M18.0001 10H18.0101M10.4491 5H13.5512C16.1761 5 17.4885 5 18.5187 5.49743C19.4257 5.9354 20.1793 6.63709 20.6808 7.51059C21.2503 8.5027 21.3438 9.81181 21.5309 12.43L21.7769 15.8745C21.8975 17.5634 20.5599 19 18.8667 19C18.0008 19 17.1796 18.6154 16.6253 17.9502L16.2501 17.5C15.907 17.0882 15.7354 16.8823 15.54 16.7159C15.1305 16.3672 14.6346 16.1349 14.1045 16.0436C13.8516 16 13.5836 16 13.0476 16H10.9527C10.4167 16 10.1487 16 9.89577 16.0436C9.36563 16.1349 8.86981 16.3672 8.46024 16.7159C8.26487 16.8823 8.09329 17.0882 7.75013 17.5L7.37497 17.9502C6.82064 18.6154 5.99949 19 5.13359 19C3.44037 19 2.10275 17.5634 2.22339 15.8745L2.46942 12.43C2.65644 9.81181 2.74994 8.5027 3.31951 7.51059C3.82098 6.63709 4.57458 5.9354 5.48159 5.49743C6.51176 5 7.8242 5 10.4491 5Z"
                                    stroke="#bf92ef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Gaming</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#bf92ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="icomoon-ignore"> </g>
                                <path
                                    d="M9.069 2.672v14.928h-6.397c0 0 0 6.589 0 8.718s1.983 3.010 3.452 3.010c1.469 0 16.26 0 20.006 0 1.616 0 3.199-1.572 3.199-3.199 0-1.175 0-23.457 0-23.457h-20.259zM6.124 28.262c-0.664 0-2.385-0.349-2.385-1.944v-7.652h5.331v7.192c0 0.714-0.933 2.404-2.404 2.404h-0.542zM28.262 26.129c0 1.036-1.096 2.133-2.133 2.133h-17.113c0.718-0.748 1.119-1.731 1.119-2.404v-22.12h18.126v22.391z"
                                    fill="#bf92ef"> </path>
                                <path d="M12.268 5.871h13.861v1.066h-13.861v-1.066z" fill="#bf92ef"> </path>
                                <path d="M12.268 20.265h13.861v1.066h-13.861v-1.066z" fill="#bf92ef"> </path>
                                <path d="M12.268 23.997h13.861v1.066h-13.861v-1.066z" fill="#bf92ef"> </path>
                                <path
                                    d="M26.129 9.602h-13.861v7.997h13.861v-7.997zM25.063 16.533h-11.729v-5.864h11.729v5.864z"
                                    fill="#bf92ef"> </path>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">News</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            fill="#bf92ef">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect x="0" fill="none" width="20" height="20"></rect>
                                <g>
                                    <path
                                        d="M8.55 3.06c1.01.34-1.95 2.01-.1 3.13 1.04.63 3.31-2.22 4.45-2.86.97-.54 2.67-.65 3.53 1.23 1.09 2.38.14 8.57-3.79 11.06-3.97 2.5-8.97 1.23-10.7-2.66-2.01-4.53 3.12-11.09 6.61-9.9zm1.21 6.45c.73 1.64 4.7-.5 3.79-2.8-.59-1.49-4.48 1.25-3.79 2.8z">
                                    </path>
                                </g>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Art</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 2.75C11.3096 2.75 10.75 3.30964 10.75 4C10.75 4.69036 11.3096 5.25 12 5.25C12.6904 5.25 13.25 4.69036 13.25 4C13.25 3.30964 12.6904 2.75 12 2.75ZM9.25 4C9.25 2.48122 10.4812 1.25 12 1.25C13.5188 1.25 14.75 2.48122 14.75 4C14.75 5.51878 13.5188 6.75 12 6.75C10.4812 6.75 9.25 5.51878 9.25 4ZM16.9894 7.16382C18.4102 6.85936 19.75 7.94247 19.75 9.39553C19.75 10.3779 19.1214 11.2501 18.1894 11.5608L16.0141 12.2859C15.877 12.3316 15.795 12.3591 15.7342 12.3821C15.6957 12.3966 15.6795 12.4044 15.6756 12.4063C15.5935 12.4582 15.5488 12.5528 15.561 12.6491C15.562 12.6534 15.5663 12.6709 15.5795 12.7098C15.6004 12.7714 15.6313 12.8522 15.6832 12.987L16.93 16.2287C17.4901 17.6849 16.4152 19.25 14.8549 19.25C14.0571 19.25 13.3205 18.8225 12.9246 18.1298L12 16.5117L11.0754 18.1298C10.6795 18.8225 9.94287 19.25 9.14506 19.25C7.58484 19.25 6.50994 17.6849 7.07002 16.2287L8.31681 12.987C8.36869 12.8522 8.3996 12.7714 8.42051 12.7098C8.43373 12.6709 8.43803 12.6534 8.43901 12.6491C8.4512 12.5528 8.40652 12.4582 8.32443 12.4063C8.32052 12.4044 8.30434 12.3966 8.26583 12.3821C8.20501 12.3591 8.12301 12.3316 7.98592 12.2859L5.81062 11.5608C4.87863 11.2501 4.25 10.3779 4.25 9.39553C4.25 7.94247 5.58979 6.85936 7.0106 7.16382L8.90817 7.57044C9.01467 7.59326 9.06443 7.60392 9.11353 7.61407C11.0177 8.00795 12.9823 8.00795 14.8865 7.61407C14.9356 7.60392 14.9853 7.59326 15.0918 7.57044L16.9894 7.16382ZM18.25 9.39553C18.25 8.89743 17.7907 8.52615 17.3037 8.63052L15.4034 9.03773C15.3006 9.05975 15.2453 9.0716 15.1903 9.08298C13.0857 9.51831 10.9143 9.51831 8.80969 9.08298C8.7547 9.0716 8.69947 9.05977 8.59688 9.03779L6.69631 8.63052C6.20927 8.52615 5.75 8.89743 5.75 9.39553C5.75 9.73228 5.96549 10.0313 6.28497 10.1378L8.46026 10.8629C8.47839 10.8689 8.49661 10.8749 8.5149 10.881C8.72048 10.9491 8.93409 11.0199 9.1102 11.1286C9.69929 11.4922 10.0186 12.169 9.92485 12.8548C9.89681 13.0599 9.81566 13.2698 9.73756 13.4718C9.73061 13.4898 9.72369 13.5077 9.71683 13.5255L8.47004 16.7672C8.28784 17.2409 8.63751 17.75 9.14506 17.75C9.40459 17.75 9.64422 17.6109 9.77299 17.3856L11.3488 14.6279C11.4823 14.3942 11.7309 14.25 12 14.25C12.2691 14.25 12.5177 14.3942 12.6512 14.6279L14.227 17.3856C14.3558 17.6109 14.5954 17.75 14.8549 17.75C15.3625 17.75 15.7122 17.2409 15.53 16.7672L14.2832 13.5255C14.2763 13.5077 14.2694 13.4898 14.2624 13.4718C14.1843 13.2698 14.1032 13.0599 14.0751 12.8548C13.9814 12.169 14.3007 11.4922 14.8898 11.1286C15.0659 11.0199 15.2795 10.9491 15.4851 10.881C15.5034 10.8749 15.5216 10.8689 15.5397 10.8629L17.715 10.1378C18.0345 10.0313 18.25 9.73228 18.25 9.39553ZM5.21639 14.1631C5.40245 14.5332 5.25328 14.984 4.88321 15.1701C3.36229 15.9348 2.75 16.7949 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31951 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 16.7949 20.6377 15.9348 19.1168 15.1701C18.7467 14.984 18.5975 14.5332 18.7836 14.1631C18.9697 13.793 19.4205 13.6439 19.7906 13.8299C21.4366 14.6575 22.75 15.9 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 15.9 2.5634 14.6575 4.20941 13.8299C4.57948 13.6439 5.03032 13.793 5.21639 14.1631Z"
                                    fill="#bf92ef"></path>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Lifestyle</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg fill="#bf92ef" viewBox="0 0 1069 1069"
                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                            version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect height="1066.67" id="Chip-set" style="fill:none;" width="1066.67" x="1.397"
                                    y="0.245">
                                </rect>
                                <g>
                                    <path
                                        d="M688.577,148.161l-279.947,0l-0,-64.765c-0,-17.247 -14.003,-31.25 -31.25,-31.25c-17.248,0 -31.25,14.003 -31.25,31.25l-0,64.768c-52.094,0.29 -101.991,21.109 -138.847,57.966c-33.572,33.572 -53.838,77.963 -57.402,124.974l-65.332,0c-17.247,0 -31.25,14.003 -31.25,31.25c0,17.247 14.003,31.25 31.25,31.25l64.765,0l0,279.948l-64.765,-0c-17.247,-0 -31.25,14.002 -31.25,31.25c0,17.247 14.003,31.25 31.25,31.25l65.332,-0c3.564,47.011 23.83,91.402 57.402,124.974c36.856,36.857 86.753,57.676 138.847,57.965l-0,64.768c-0,17.248 14.002,31.25 31.25,31.25c17.247,0 31.25,-14.002 31.25,-31.25l-0,-64.764l279.947,-0l-0,64.764c-0,17.248 14.003,31.25 31.25,31.25c17.247,0 31.25,-14.002 31.25,-31.25l-0,-66.877c41.818,-6.159 80.852,-25.606 111.102,-55.856c33.572,-33.572 53.837,-77.963 57.401,-124.974l65.332,-0c17.248,-0 31.25,-14.003 31.25,-31.25c0,-17.248 -14.002,-31.25 -31.25,-31.25l-64.765,-0l0,-279.948l64.765,0c17.248,0 31.25,-14.003 31.25,-31.25c0,-17.247 -14.002,-31.25 -31.25,-31.25l-65.332,0c-3.564,-47.011 -23.829,-91.402 -57.401,-124.974c-30.25,-30.25 -69.284,-49.697 -111.102,-55.856l-0,-66.878c-0,-17.247 -14.003,-31.25 -31.25,-31.25c-17.247,0 -31.25,14.003 -31.25,31.25l-0,64.765Zm33.654,708.334l-375,-0c-35.915,-0 -70.359,-14.268 -95.754,-39.663c-25.396,-25.396 -39.663,-59.84 -39.663,-95.754c0,-113.06 0,-261.94 0,-375c0,-35.915 14.267,-70.359 39.663,-95.754c25.395,-25.396 59.839,-39.663 95.754,-39.663l374.999,0c35.915,0 70.359,14.267 95.755,39.663c25.395,25.395 39.662,59.839 39.662,95.754l0,375c0,35.914 -14.267,70.358 -39.662,95.754c-25.396,25.395 -59.84,39.663 -95.754,39.663Zm-364.584,-322.917c0,-0 0,29.825 0,62.5c0.001,63.283 51.301,114.583 114.584,114.583c39.191,0 85.809,0 125,0c63.282,0 114.583,-51.3 114.583,-114.583c0,-39.191 0,-85.809 0,-125c-0,-63.283 -51.301,-114.583 -114.583,-114.583c-32.675,-0 -62.5,-0 -62.5,-0c-17.248,-0 -31.25,14.002 -31.25,31.25c-0,17.247 14.002,31.25 31.25,31.25l62.498,-0c28.767,0 52.084,23.318 52.085,52.081c0,0.003 0,125.002 0,125.002c-0.001,28.765 -23.318,52.082 -52.082,52.083c-0.003,0 -125.001,0 -125.001,0c-28.765,-0.001 -52.083,-23.318 -52.084,-52.081c0,-0.004 0,-62.502 0,-62.502c0,-17.248 -14.002,-31.25 -31.25,-31.25c-17.247,-0 -31.25,14.002 -31.25,31.25Zm385.417,-241.407c18.254,0 33.073,14.82 33.073,33.074c0,18.253 -14.819,33.073 -33.073,33.073c-18.254,-0 -33.073,-14.82 -33.073,-33.073c-0,-18.254 14.819,-33.074 33.073,-33.074Z">
                                    </path>
                                    <path
                                        d="M920.147,346.078c0.001,-52.491 -20.851,-102.832 -57.968,-139.948c-37.117,-37.117 -87.458,-57.969 -139.949,-57.969c-113.059,0 -261.939,0 -374.999,0c-52.491,0 -102.832,20.852 -139.948,57.969c-37.117,37.116 -57.969,87.457 -57.969,139.948c0,113.06 0,261.94 0,375c-0,52.49 20.852,102.831 57.969,139.948c37.116,37.117 87.457,57.969 139.948,57.969c70.055,-0 147.677,-0 201.797,-0c52.491,-0 102.832,-20.852 139.949,-57.969c49.034,-49.034 124.168,-124.168 173.202,-173.202c37.117,-37.117 57.969,-87.458 57.968,-139.949l0,-201.797Zm-62.5,0l0,201.797c0,35.915 -14.267,70.359 -39.662,95.755c-49.035,49.034 -124.168,124.167 -173.202,173.202c-25.396,25.396 -59.84,39.663 -95.755,39.663c-54.12,-0 -131.742,-0 -201.797,-0c-35.915,-0 -70.359,-14.267 -95.754,-39.663c-25.396,-25.396 -39.663,-59.84 -39.663,-95.754c0,-113.06 0,-261.94 0,-375c0,-35.915 14.267,-70.359 39.663,-95.754c25.395,-25.396 59.839,-39.663 95.754,-39.663l374.999,0c35.915,0 70.359,14.267 95.755,39.663c25.395,25.395 39.662,59.839 39.662,95.754Zm-500,250c0.001,63.283 51.301,114.583 114.584,114.583c39.191,0 85.809,0 125,0c63.282,0 114.583,-51.3 114.583,-114.583c0,-39.191 0,-85.809 0,-125c-0,-63.283 -51.301,-114.583 -114.583,-114.583l-125,-0c-63.283,-0 -114.583,51.3 -114.584,114.583l0,125Zm62.5,0.002l0,-125.002c0.001,-28.765 23.319,-52.083 52.082,-52.083c0.003,-0 125.001,-0 125.001,-0c28.766,0 52.083,23.318 52.084,52.081c0,0.003 0,125.002 0,125.002c-0.001,28.765 -23.318,52.082 -52.082,52.083c-0.003,0 -125.001,0 -125.001,0c-28.765,-0.001 -52.083,-23.318 -52.084,-52.081Z"
                                        style="fill-opacity:0.5;"></path>
                                </g>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Technology</div>

                </div>
                <div class="nav-Item">

                    <div class="nav-Item-Icon"><svg fill="#bf92ef" viewBox="0 0 32 32" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>plane</title>
                                <path
                                    d="M12.25 8.719l-0.469 0.469 4 0.344 2.406-2.406c0.375-0.375 1.063-0.938 2.063-1.563s1.656-0.813 1.906-0.563c0.688 0.688 0 2.031-2.063 4.063l-2.375 2.375 0.344 4 0.469-0.438c0.375-0.406 0.781-0.406 1.094-0.094 0.375 0.375 0.219 0.906-0.531 1.656l-0.75 0.781 0.375 2.688 0.531-0.563c0.344-0.375 0.719-0.375 1.063-0.063 0.375 0.375 0.313 0.844-0.188 1.344l-1.125 1.125c0.438 3 0.5 4.688 0.156 5.031-0.156 0.125-0.375 0.25-0.688 0.313-0.281 0.031-0.531 0-0.688-0.125-0.125-0.156-0.313-0.719-0.5-1.688-0.219-1-0.75-2.688-1.688-5.063-0.906-2.406-1.563-3.75-1.875-4.094-0.125-0.125-0.313-0.125-0.531 0-0.219 0.094-1 0.75-2.25 1.969-1.25 1.25-2.406 2.25-3.5 3.031-0.031 0.188 0.063 0.813 0.219 1.844s0.219 1.719 0.188 1.969c-0.063 0.25-0.313 0.594-0.719 1-0.219 0.219-0.375 0.344-0.531 0.375-0.406-0.406-1.031-1.719-1.875-3.875-2.344-1.031-3.625-1.688-3.875-1.938 0-0.125 0.125-0.313 0.344-0.531 0.406-0.406 0.75-0.656 1.031-0.688 0.25-0.063 0.906 0.031 1.938 0.219 1.031 0.156 1.656 0.219 1.875 0.219 0.75-1.125 2.156-2.781 4.344-4.969 0.625-0.688 0.813-1.125 0.594-1.344-0.313-0.344-1.688-0.969-4.063-1.875-2.406-0.906-4.063-1.5-5.063-1.688-1-0.219-1.563-0.375-1.688-0.531-0.156-0.125-0.188-0.375-0.125-0.688 0.031-0.313 0.156-0.531 0.313-0.688 0.313-0.313 2-0.281 5.031 0.156l1.094-1.125c0.5-0.469 0.969-0.531 1.344-0.156 0.344 0.313 0.313 0.688-0.031 1.031l-0.563 0.531 2.688 0.375 0.75-0.719c0.75-0.75 1.281-0.906 1.656-0.531 0.344 0.344 0.313 0.688-0.063 1.094z">
                                </path>
                            </g>
                        </svg></div>

                    <div class="nav-Item-Text merriweather-Medium">Travel</div>

                </div>
            </div>
        </div>
        <div class="Center-pane">
            <div class="Data-pane" v-if="!dataLoading">
                <div v-for="(item) in data" :key="item.BlogID" class="Card">
                    <div class="Item-Interact">
                        <div class="Like merriweather-Medium">
                            <svg fill="#FFFFFF" height="200px" width="200px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512.001 512.001" xml:space="preserve" stroke="#FFFFFF"
                                stroke-width="0.0051200099999999995">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M453.625,114.547c-6.441-6.554-16.978-6.646-23.535-0.206c-6.556,6.443-6.648,16.98-0.205,23.536 c31.489,32.045,48.831,75.395,48.831,122.067c0,40.371-13.103,77.293-40.058,112.877c-5.55,7.327-4.11,17.767,3.218,23.316 c3.006,2.277,6.535,3.377,10.037,3.377c5.033,0,10.006-2.274,13.279-6.594c31.499-41.583,46.81-85.081,46.81-132.977 C512,204.492,491.269,152.857,453.625,114.547z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M81.91,114.341c-6.556-6.442-17.093-6.347-23.535,0.206C20.731,152.856,0,204.492,0,259.944 c0,47.896,15.312,91.394,46.811,132.977c3.273,4.322,8.246,6.594,13.279,6.594c3.5,0,7.031-1.101,10.037-3.377 c7.327-5.551,8.767-15.989,3.216-23.316c-26.954-35.583-40.058-72.505-40.058-112.877c0-46.672,17.342-90.023,48.83-122.067 C88.558,131.321,88.466,120.784,81.91,114.341z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M99.856,259.944c0-28.649,10.511-55.227,29.599-74.842c6.41-6.587,6.267-17.124-0.321-23.534 c-6.588-6.409-17.124-6.265-23.534,0.321c-25.169,25.864-39.03,60.686-39.03,98.055c0,34.52,11.947,66.339,36.522,97.275 c3.285,4.137,8.14,6.292,13.042,6.292c3.627,0,7.281-1.18,10.341-3.613c7.197-5.717,8.397-16.187,2.679-23.383 C109.166,311.352,99.856,287.022,99.856,259.944z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M406.399,161.889c-6.411-6.588-16.947-6.73-23.534-0.321s-6.73,16.947-0.321,23.534 c19.087,19.615,29.599,46.194,29.599,74.842c0,27.078-9.31,51.408-29.3,76.572c-5.717,7.196-4.518,17.666,2.68,23.383 c3.061,2.431,6.714,3.613,10.341,3.613c4.901,0,9.756-2.156,13.042-6.292c24.576-30.936,36.522-62.755,36.522-97.275 C445.429,222.576,431.568,187.753,406.399,161.889z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M360.116,209.969c-12.78-14.062-30.455-21.806-49.772-21.806c-25.802,0-43.286,13.704-54.344,27.479 c-11.058-13.776-28.543-27.479-54.344-27.479c-19.317,0-36.991,7.744-49.769,21.806c-12.089,13.304-18.746,31.052-18.746,49.976 c0,44.517,38.711,76.96,92.288,121.864c6.389,5.354,12.993,10.89,19.804,16.669c3.106,2.636,6.938,3.953,10.769,3.953 s7.663-1.318,10.769-3.953c6.81-5.779,13.415-11.315,19.804-16.669c53.578-44.904,92.288-77.347,92.288-121.864 C378.862,241.021,372.205,223.273,360.116,209.969z M265.193,356.299c-3.016,2.526-6.079,5.095-9.192,7.711 c-3.114-2.616-6.177-5.185-9.192-7.711c-46.666-39.112-80.383-67.371-80.383-96.354c0-18.662,12.348-38.497,35.231-38.497 c26.741,0,38.092,31.328,38.607,32.794c2.31,6.717,8.616,11.269,15.724,11.269c7.133,0,13.458-4.506,15.748-11.26 c0.469-1.339,11.812-32.802,38.61-32.802c22.884,0,35.231,19.835,35.231,38.497C345.576,288.928,311.859,317.186,265.193,356.299z ">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            {{ item.Likes }}
                        </div>
                        <div class="Views merriweather-Medium">
                            <svg width="82px" height="82px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M21 3L14 9L10 5L3 11M4.5 21C3.67157 21 3 20.3284 3 19.5V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V19.5C6 20.3284 5.32843 21 4.5 21ZM11.5 21C10.6716 21 10 20.3284 10 19.5V14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5V19.5C13 20.3284 12.3284 21 11.5 21ZM18.5 21C17.6716 21 17 20.3284 17 19.5V16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5V19.5C20 20.3284 19.3284 21 18.5 21Z"
                                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            {{ item.Views }}
                        </div>
                        <div class="Share">
                            <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                                        stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            0
                        </div>
                    </div>
                    <div class="Image-Items">
                        <img src="/airplane-flying-low-over-snowy-600nw-2496851013.webp" alt="">
                        <img src="/pexels-photo-1371360.jpeg" alt="">
                        <img src="/photo-1707343848552-893e05dba6ac.jpg" alt="">
                        <img src="/intro-1672072042.jpg" alt="">
                    </div>
                    <div class="Heading" v-html="decode(item.Heading)"></div>
                    <div class="SubHeading" v-html="decode(item.SubHeading)"></div>
                    <div class="Expand">
                        <div class="Readtime">{{ item.ReadTime }} Minutes Reading</div>
                        <div class="RedirectDiv" @click="redirectToLink(`/blog/undef/${item.BlogID}`)">
                            Read The Blog
                        </div>
                    </div>

                    <div class="Time">{{ item.Date }} Min Ago</div>
                </div>
                <div class="Pagination">
                    <div class="Block Block-Active merriweather-Medium" @click="changePage(1)">1</div>
                    <div class="Block merriweather-Medium" @click="changePage(2)">2</div>
                    <div class="Block merriweather-Medium" @click="changePage(3)">3</div>
                    <div class="Block merriweather-Medium" @click="changePage(4)">4</div>
                    <div class="Block merriweather-Medium" @click="changePage(5)">5</div>
                    <div class="Block merriweather-Medium" @click="changePage(6)">6</div>
                    <div class="Block merriweather-Medium" @click="changePage(7)">7</div>
                    <div class="Block merriweather-Medium" @click="changePage(8)">8</div>
                </div>
            </div>
            <div class="Spinner" v-if="dataLoading">
            </div>
        </div>
        <div class="Right-pane">
            <div class="In-Your-Area">
                <!-- <div class="map"><img src="/ms.jpg" alt=""></div> -->
            </div>
            <div class="Account-Block" v-if="isLoggedIn">
                <div class="Account-Activity"></div>
                <div class="Account-Summary">
                    <div class="Account-Logout" @click="setToken(null)">
                        <svg fill="#8616fd" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                            xmlns:serif="http://www.serif.com/"
                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect id="Icons" x="-192" y="-320" width="1280" height="800" style="fill:none;"></rect>
                                <g id="Icons1" serif:id="Icons">
                                    <g id="Strike"> </g>
                                    <g id="H1"> </g>
                                    <g id="H2"> </g>
                                    <g id="H3"> </g>
                                    <g id="list-ul"> </g>
                                    <g id="hamburger-1"> </g>
                                    <g id="hamburger-2"> </g>
                                    <g id="list-ol"> </g>
                                    <g id="list-task"> </g>
                                    <g id="trash"> </g>
                                    <g id="vertical-menu"> </g>
                                    <g id="horizontal-menu"> </g>
                                    <g id="sidebar-2"> </g>
                                    <g id="Pen"> </g>
                                    <g id="Pen1" serif:id="Pen"> </g>
                                    <g id="clock"> </g>
                                    <g id="external-link"> </g>
                                    <g id="hr"> </g>
                                    <g id="info"> </g>
                                    <g id="warning"> </g>
                                    <g id="plus-circle"> </g>
                                    <g id="minus-circle"> </g>
                                    <g id="vue"> </g>
                                    <g id="cog"> </g>
                                    <g id="logo"> </g>
                                    <g id="radio-check"> </g>
                                    <g id="eye-slash"> </g>
                                    <g id="eye"> </g>
                                    <g id="toggle-off"> </g>
                                    <g id="shredder"> </g>
                                    <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g>
                                    <g id="react"> </g>
                                    <g id="check-selected"> </g>
                                    <g id="turn-off">
                                        <path
                                            d="M40,14.62c7.91,3.16 13.505,10.896 13.505,19.928c0,11.838 -9.611,21.449 -21.449,21.449c-11.838,0 -21.449,-9.611 -21.449,-21.449c0,-8.99 5.542,-16.695 13.393,-19.883l0,4.332c-5.616,2.918 -9.456,8.789 -9.456,15.551c0,9.665 7.847,17.512 17.512,17.512c9.665,0 17.512,-7.847 17.512,-17.512c0,-6.806 -3.891,-12.711 -9.568,-15.608l0,-4.32Z">
                                        </path>
                                        <path
                                            d="M34.056,9.886c0,-1.104 -0.896,-2 -2,-2c-1.104,0 -2,0.896 -2,2l0,24c0,1.104 0.896,2 2,2c1.104,0 2,-0.896 2,-2l0,-24Z">
                                        </path>
                                    </g>
                                    <g id="code-block"> </g>
                                    <g id="user"> </g>
                                    <g id="coffee-bean"> </g>
                                    <g id="coffee-beans">
                                        <g id="coffee-bean1" serif:id="coffee-bean"> </g>
                                    </g>
                                    <g id="coffee-bean-filled"> </g>
                                    <g id="coffee-beans-filled">
                                        <g id="coffee-bean2" serif:id="coffee-bean"> </g>
                                    </g>
                                    <g id="clipboard"> </g>
                                    <g id="clipboard-paste"> </g>
                                    <g id="clipboard-copy"> </g>
                                    <g id="Layer1"> </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="Login" v-if="!isLoggedIn">
                <div class="Join-Us-Image"><img src="/join.jpg" alt=""></div>
                <div class="Join-Us-Pane">
                    <div class="Join-Us-Header merriweather-Medium">Start Your Own Blogging Journey</div>
                    <div class="Join-Us-Login merriweather-Medium" @click="() => updateShowAuthentication('Login')">
                        Login</div>
                    <div class="Join-Us-SignUp merriweather-Medium" @click="() => updateShowAuthentication('SignUp')">
                        Sign Up</div>
                </div>
            </div>
        </div>
    </div>
    <Authenticate v-if="showAuthentication" @show="updateShowAuthentication" :type="loginType"
        @updatemsg="updateMessage" @token="setToken" />
    <CreatePost v-if="showCreatePost" :token="token" @close="showCreatePost = false" />
    <Message v-if="showMessage" :type="MessageType" :msg="Message" />
</template>

<script>
import CreatePost from '@/components/CreatePost.vue';
import Splash from '@/components/Splash.vue';
import Authenticate from '@/components/Authenticate.vue';
import Message from './components/Message.vue';

export default {
    data() {
        return {
            showCreatePost: false,
            completeLoaded: false,
            showAuthentication: false,
            showMessage: false,
            loginType: "Login",
            MessageType: "Error",
            Message: "",
            timeoutId: null,
            token: null,
            data: [],
            dataLoading: false,
            sno: 0,
            eno: 3,
        };
    },
    methods: {
        updateShowAuthentication(login) {
            this.loginType = login;
            this.showAuthentication = !this.showAuthentication;
        },
        setLoading() {
            this.completeLoaded = true;
            if (!this.token) this.updateShowAuthentication('Login');
        },
        setData(data) {
            this.data = data;
        },
        updateMessage(type, msg) {
            if (this.timeoutId) clearTimeout(this.timeoutId);
            this.showMessage = true;
            this.MessageType = type;
            this.Message = msg;
            this.timeoutId = setTimeout(() => {
                this.showMessage = false;
            }, 5000);
        },
        setToken(token) {
            localStorage.removeItem('token');
            localStorage.setItem('token', token);
            this.token = token;
        },
        openCreatePost() {
            if (this.token) this.showCreatePost = true
            else {
                this.updateShowAuthentication('Login');
            }
        },
        redirectToLink(link) {
            this.$router.push(link);
        },
        decode(str) {
            const item = new TextDecoder("utf-8").decode(new Uint8Array(str.data));
            return decodeURIComponent(escape(atob(item)));
        },
        async changePage(page) {
            this.dataLoading = true;
            this.sno = (page - 1) * 3;
            this.eno = page * 3;

            console.log(this.sno + " " + this.eno)
            try {
                const response = await fetch(`http://localhost:3000/blogs?sno=${this.sno}&eno=${this.eno}`);
                const data = await response.json();
                this.data = data;
                this.dataLoading = false;
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        },
    },

    computed: {
        isLoggedIn() {
            return this.token !== null;
        }
    },
    components: {
        CreatePost,
        Splash,
        Authenticate,
        Message
    }
}
</script>

<style scoped>
div.App {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 22% 53% 25%;
}

div.Left-pane {
    border-right: 1px solid #101010;
}

div.Logo {
    img {
        width: 100%;
    }
}

div.Create-Post {
    background-color: #8616fd;
    height: 7%;
    width: 75%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;

    div.Create-Post-Icon {
        height: 65%;

        svg {
            height: 100%;
        }
    }

    div.Create-Post-Text {
        margin-left: 5%;
        color: #fbaeff;
        font-size: 1.58rem;
    }
}

div.Create-Post:Hover {
    cursor: pointer;
    background-color: #8e37eb;
}

div.nav-Pane {
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0px;
}

div.nav-Divider {
    background: #9250d7;
    height: 0.5px;
    width: 65%;
    margin: 17px 0px;
}

div.nav-Item {
    display: grid;
    height: 50px;
    width: 65%;
    justify-items: left;
    align-items: center;
    grid-template-columns: 15% 15% 7% 50% 13%;
    margin: 7px 0px;
}

div.nav-Item:hover {
    cursor: pointer;

    div.nav-Item-Icon {
        svg {
            g {
                path {
                    stroke: white;
                }
            }
        }
    }

    div.nav-Item-Text {
        color: white;
    }
}

div.nav-Item-Select {
    color: #8616fd;
}

div.nav-Item-Icon {
    height: 60%;
    justify-self: center;
    grid-column: 2;

    svg {
        height: 100%;
    }
}

div.nav-Item-Text {
    font-size: 17px;
    color: #bf92ef;
    grid-column: 4;
}


div.Right-pane {
    border-left: 1px solid #101010;

    div.In-Your-Area {
        height: 35%;
    }

    div.Account-Block {
        height: 60%;
        width: 90%;
        justify-self: center;
        border-radius: 20px;
        position: relative;

        div.Account-Activity {
            height: 50%;
            width: 100%;
        }

        div.Account-Summary {
            background-color: #000000b3;
            height: 50%;
            width: 100%;
            border-radius: 15px;

            div.Account-Logout {
                height: 100%;

                svg {
                    height: 20%;
                }
            }
        }
    }

    div.Login {
        height: 60%;
        width: 90%;
        justify-self: center;
        border-radius: 20px;
        position: relative;

        div.Join-Us-Image {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            overflow: hidden;
            border-radius: 20px;

            img {
                height: 80%;
                width: 100%;
                border-radius: 20px;
                transition: 0.7s ease-in;
                transform-origin: center;
            }
        }

        div.Join-Us-Pane {
            bottom: 0px;
            position: absolute;
            width: 100%;
            height: 25%;
            background: #000000;
            border-radius: 0px 0px 20px 20px;
            display: grid;
            grid-template-columns: 8% 40% 4% 40% 8%;
            grid-template-rows: 50%;

            div.Join-Us-Header {
                grid-column: span 5;
                grid-row: 1;
                font-size: 1.1rem;
                text-align: center;
                margin: 6%;
                color: #ffffff;
                font-weight: 600;
            }

            div.Join-Us-Login {
                grid-row: 2;
                grid-column: 2;
                background: #0e0e0e;
                height: 70%;
                border-radius: 10px;
                width: 100%;
                justify-self: center;
                color: #ffffff;
                font-size: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            div.Join-Us-Login:hover {
                background: #292929;
            }

            div.Join-Us-SignUp {
                grid-row: 2;
                grid-column: 4;
                background: #8616fd;
                height: 70%;
                border-radius: 10px;
                width: 100%;
                justify-self: center;
                color: #ffffff;
                font-size: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            div.Join-Us-SignUp:hover {
                background: #8e37eb;
            }
        }
    }

    div.Login:hover {
        cursor: pointer;

        div.Join-Us-Image {
            img {
                transform: scale(1.15);
            }
        }
    }
}


div.Center-pane {
    display: grid;
    grid-template-columns: 1fr 95% 1fr;
}

div.Data-pane {
    height: 100%;
    grid-column: 2;
    width: 95%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: #8e37eb black;
    scrollbar-width: thin;

    div.Pagination {
        width: 92%;
        min-height: 4%;
        border-radius: 5px;
        margin: 2%;
        background: #8616fd;
        display: flex;
        align-self: center;

        div.Block {
            height: inherit;
            width: 10%;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border: 2px solid #eabeff;
        }

        div.Block:Hover {
            cursor: pointer;
            background-color: #eabeff;
        }

        div.Block-Active {
            background: #ffffff;
            color: black;
        }
    }
}

div.Card {
    height: 45%;
    width: 90%;
    margin: 2% 5%;
    justify-self: center;
    background: #000000;
    border-radius: 20px;
    color: white;
    position: relative;


    div.Item-Interact {
        position: absolute;
        top: 5%;
        right: 5%;
        display: none;
        background: #000000;
        border: 2px solid #8616fd;
        width: 40%;
        border-radius: 10px;
        height: 12%;

        div {
            height: 100%;
            width: 33%;
            display: flex;
            font-size: 1.7rem;
            justify-content: space-evenly;
            align-items: center;

            svg {
                height: 100%;
                width: 40%;
            }
        }

        div:first-child {
            border-right: 1px solid white;
        }

        div:last-child {
            border-left: 1px solid white;
        }
    }
}

div.Card:Hover {
    div.Item-Interact {
        display: flex;
    }

    div.Expand {
        display: flex;
    }
}

div.Image-Items {
    column-count: 2;
    overflow: hidden;
    height: 175px;
    column-gap: 0px;

    img {
        display: block;
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
}

div.Heading {
    font-size: 25px;
    text-align: center;
}

div.Time {
    position: absolute;
    bottom: -22px;
}

div.Expand {
    display: none;
    position: absolute;
    bottom: 10px;
    height: 10%;
    width: 40%;
    border-radius: 10px;
    justify-self: anchor-center;
    justify-content: space-between;
}

div.RedirectDiv {
    background: green;
    width: 50%;
    border-radius: 20px;
    text-align: center;
    align-content: center;
    cursor: pointer;
}

div.Spinner {
    width: 56px;
    height: 56px;
    border: 6.7px solid #941dfa;
    animation: spinner-kk2y8v 3s infinite;
}

@keyframes spinner-kk2y8v {
    0% {
        transform: rotate(0deg);
    }

    10%,
    15% {
        transform: rotate(-90deg);
    }

    20%,
    25% {
        transform: rotate(-180deg);
    }

    30%,
    35% {
        transform: rotate(-270deg);
    }

    40%,
    50% {
        transform: rotate(-360deg);
    }

    100% {
        transform: rotate(720deg);
    }
}
</style>
