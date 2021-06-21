var navIsDisplay = false;
var nav_links;
let bb1;
let bb2;
let bb3;
var nav;
var nav_title;
var nav_links;
var nav_content;

function NAV() {
    if (document.getElementsByClassName("nav-links")[0]) {
        // Insert bg and close
        document.getElementsByClassName("nav-links")[0].insertAdjacentHTML(
            "afterbegin",
            `
                <div class="nav-bg"></div>
                <div class="nav-close"></div>
            `
        );
        // Insert hamburger button
        document.getElementsByClassName("nav-button")[0].insertAdjacentHTML(
            "afterbegin",
            `
                <button onclick="toggleNav()" class="bbutton">
                    <div class="bb-1"></div>
                    <div class="bb-2"></div>
                    <div class="bb-3"></div>
                </button>
            `
        );
        // Toggle Button
        nav_links = document.getElementsByClassName("nav-links")[0];
        bb1 = document.getElementsByClassName("bb-1")[0];
        bb2 = document.getElementsByClassName("bb-2")[0];
        bb3 = document.getElementsByClassName("bb-3")[0];

        document.getElementsByClassName("nav-bg")[0].onclick = toggleNav;
        document.getElementsByClassName("nav-close")[0].onclick = toggleNav;
        // Set nav attributes: type (position) + gap + height
        nav = document.getElementsByTagName("nav")[0];
        nav_title = document.getElementsByClassName("nav-title")[0];
        nav_links = document.getElementsByClassName("nav-links")[0];
        nav_content = document.getElementsByClassName("nav-content")[0];
        nav.style.position = nav.getAttribute("nav-position");
        nav_content.style.gap = nav.getAttribute("gap");
        // Set nav attributes: links-position
        if (nav.getAttribute("links-position") == "right") {
            //Default
        } else if (nav.getAttribute("links-position") == "center") {
            nav_links.style.marginRight = "auto";
        } else if (nav.getAttribute("links-position") == "left") {
            nav_links.style.marginRight = "auto";
            nav_title.style.marginRight = "0";
        }
    } else {
        console.log(">> SolidCoreJS: NAV disabled");
    }
}

function toggleNav() {
    if (!navIsDisplay) {
        nav_links.classList.add("nav-display");
        navIsDisplay = true;
        // Ham Button
        bb1.classList.add("bb-active-1");
        bb2.classList.add("bb-active-2");
        bb3.classList.add("bb-active-3");
    } else {
        nav_links.classList.remove("nav-display");
        navIsDisplay = false;
        //Ham Button
        bb1.classList.remove("bb-active-1");
        bb2.classList.remove("bb-active-2");
        bb3.classList.remove("bb-active-3");
    }
}

initNAV();

function initNAV() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        nav {
            --default-height: 60px;

            --nav-1: rgba(255, 255, 255, 0.8);
            --nav-2: blur(10.0px);
            --nav-3: 0 8px 32px 0 rgba(0, 0, 0, 0.02);
        
            background: var(--nav-1);
            backdrop-filter: var(--nav-2);
            box-shadow: var(--nav-3);

            // background: #f0f0f0;
            z-index: 10;
            position: sticky;
            top: 0;
            display: flex;
            align-items: center;
            height: var(--default-height);
            /* Default */
        }
        
        @media screen and (max-width: 1000px) {
            nav {
                position: sticky !important;
            }
        }
        
        nav .main {
            display: flex;
            align-items: center;
        }
        
        nav .nav-title {
            margin-right: auto;
        }
        
        nav .nav-cta {
            font-size: 15px;
            display: none;
        }
        
        @media screen and (min-width: 1000px) {
            nav .nav-cta {
                display: block;
            }
        }
        
        nav .nav-button {
            position: relative;
            z-index: 11;
            display: block;
            margin-left: auto;
        }
        
        @media screen and (min-width: 1000px) {
            nav .nav-button {
                display: none;
            }
        }
        
        nav .nav-links {
            overflow-y: scroll;
            background: #ffffff;
            /* BG */
            top: -40px;
            z-index: 9;
            position: fixed;
            left: 0;
            width: 100%;
            visibility: hidden;
            opacity: 0;
            height: calc(100% - var(--default-height));
            /* Default */
            margin-top: var(--default-height);
            /* Default */
        }
        
        @media screen and (min-width: 1000px) {
            nav .nav-links {
                overflow-y: initial;
                background: transparent;
                position: relative;
                top: 0;
                left: 0;
                width: initial;
                height: initial;
                visibility: visible;
                opacity: 1;
                margin-top: 0;
            }
        }
        
        nav .nav-display {
            visibility: visible;
            opacity: 1;
            top: 0;
        }
        
        nav .nav-content {
            display: flex;
            flex-direction: column;
        }
        
        nav .nav-content a {
            font-size: 15px;
            z-index: 1;
            padding: 14px 0;
        }
        
        @media screen and (min-width: 1000px) {
            nav .nav-content {
                flex-direction: row;
            }
            nav .nav-content a {
                padding: 10px 0;
            }
        }
        
        nav .nav-sub-links .nav-sub-bg {
            background: #f0b8b800;
            /* BG */
            display: flex;
            gap: 4px;
            border-radius: 6px;
            flex-direction: column;
        }
        
        nav .nav-sub-links {
            position: relative;
            padding-top: 12px;
            margin-left: 24px;
            transition: all ease 0.2s;
        }
        
        nav .nav-sub {
            z-index: 1;
            position: relative;
        }
        
        nav .nav-sub-wrap {
            padding-top: 8px;
        }
        
        @media screen and (min-width: 1000px) {
            nav .nav-sub-links .nav-sub-bg {
                padding: 12px;
                background: #ffffff;
                /* BG */
            }
            nav .nav-sub-links {
                position: absolute;
                padding-top: calc(var(--default-height) + 35px);
                /* Changable */
                top: -40px;
                left: 0;
                width: 100%;
                visibility: hidden;
                opacity: 0;
                margin-left: 0;
            }
            nav .nav-sub-wrap {
                display: flex;
                padding-top: 0;
            }
            nav .nav-sub-links a {
                text-align: center;
            }
            .nav-sub:hover+.nav-sub-links,
            .nav-sub-links:hover {
                visibility: visible;
                opacity: 1;
                top: -30px;
            }
        }
        
        .bbutton {
            --bsize: 36px;
            position: relative;
            width: var(--bsize);
            height: var(--bsize);
            overflow: hidden;
            border: none;
            background: transparent;
            cursor: pointer;
        }
        
        [class^='bb-'] {
            position: absolute;
            height: 4px;
            width: 100%;
            background: #000000;
            border-radius: 100px;
        }
        
        .bb-1 {
            top: 23%;
        }
        
        .bb-2 {
            top: 50%;
            left: 0;
        }
        
        .bb-3 {
            top: 77%;
        }
        
        .bb-active-1,
        .bb-active-2,
        .bb-active-3 {
            animation-duration: 0.8s;
            animation-timing-function: ease;
            animation-fill-mode: forwards;
        }
        
        .bb-active-1 {
            animation-name: bb1-anim;
        }
        
        .bb-active-2 {
            animation-name: bb2-anim;
        }
        
        .bb-active-3 {
            animation-name: bb3-anim;
        }
        
        @keyframes bb1-anim {
            0% {
                top: 23%;
                transform: rotate(0deg);
            }
            50% {
                top: 50%;
                transform: rotate(0deg);
            }
            100% {
                top: 50%;
                transform: rotate(-45deg);
            }
        }
        
        @keyframes bb2-anim {
            0% {
                opacity: 100%;
            }
            49% {
                opacity: 100%;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 0;
            }
        }
        
        @keyframes bb3-anim {
            0% {
                top: 77%;
                transform: rotate(0deg);
            }
            50% {
                top: 50%;
                transform: rotate(0deg);
            }
            100% {
                top: 50%;
                transform: rotate(-135deg);
            }
        }
        </style>
        `
    );
    console.log(">> SolidCoreJS: NAV initialized");
}