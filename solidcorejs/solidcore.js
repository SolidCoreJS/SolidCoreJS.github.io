initACP();

function initACP() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
            <style>
                .acp { 
                    -webkit-user-select: none; 
                    -khtml-user-select: none; 
                    -moz-user-select: none; 
                    -ms-user-select: none; 
                    -o-user-select: none; 
                    user-select: none; 
                    pointer-events: none; 
                }
            </style>
        `
    );
    console.log(">> SolidCoreJS: ACP initialized");
}



initCEN();

function initCEN() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
            .center { display: flex; justify-content: center; align-items: center; }
            .center-x { display: flex; justify-content: center; }
            .center-y { display: flex; align-items: center; }
        </style>
        `
    );
    console.log(">> SolidCoreJS: CEN initialized");
}



initCSB();

function initCSB() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
            ::-webkit-scrollbar {
                background: transparent;
                width: 8px;
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background: #838383;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #616161; 
            }
        </style>
        `
    );
    console.log(">> SolidCoreJS: CSB initialized");
}






initDRD();

function initDRD() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
            .desktop-only { 
                display: block; 
            } @media only screen and (max-width: 1000px) { 
                .desktop-only { 
                    display: none; 
                } 
            } 
            .mobile-only { 
                display: block; 
            } @media only screen and (min-width: 1000px) { 
                .mobile-only { 
                    display: none; 
                } 
            }
        </style>
        `
    );
    console.log(">> SolidCoreJS: DRD initialized");
}


function DRK() {
    if (document.getElementById("darkmode")) {
        // Insert bg and close
        document.getElementById("darkmode").insertAdjacentHTML(
            "afterbegin",
            `
            <div class="darkmode-button">
                <label for="darkmodeCheck">DarkMode</label>
                <input type="checkbox" id="darkmodeCheck">
                <span></span>
            </div>
            `
        );
        // Darkmode functions
        function enableDarkMode() {
            document.documentElement.classList.add("darkmode");
            localStorage.setItem("isDarkMode", "true");
            document.getElementById("darkmodeCheck").checked = true;
        }
        function disableDarkMode() {
            document.documentElement.classList.remove("darkmode");
            localStorage.setItem("isDarkMode", "false");
            document.getElementById("darkmodeCheck").checked = false;
        }
        let isDarkMode = localStorage.getItem("isDarkMode");
        if (isDarkMode === "true") {
            enableDarkMode();
            document.getElementById("darkmodeCheck").checked = true;
        }
        const darkmodeButton = document.querySelector(".darkmode-button");
        darkmodeButton.addEventListener("click", function () {
            isDarkMode = localStorage.getItem("isDarkMode");
            isDarkMode === "true" ? disableDarkMode() : enableDarkMode();
        });
    } else {
        console.log(">> SolidCoreJS: DRK disabled");
    }

}


// ----------------------------- Warning: Be careful when edit this function ------------------------------
initDRK();

function initDRK() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        .darkmode {
            filter: invert(1) hue-rotate(180deg);
        }
        
        .darkmode img {
            filter: invert(1) hue-rotate(180deg);
        }
        
        .darkmode .darkmode-ignore {
            filter: invert(1) hue-rotate(180deg);
        }
        
        .darkmode-button {
            --drkbtn-w: 50px;
            --drkbtn-h: 26px;
            z-index: 1;
            position: relative;
            width: var(--drkbtn-w);
            height: var(--drkbtn-h);
            cursor: pointer;
        }
        
        @media screen and (max-width: 1000px) {
            .darkmode-button {
                --drkbtn-w: 72px;
                --drkbtn-h: 36px;
            }
        }
        
        .darkmode-button input[type="checkbox"] {
            position: relative;
            opacity: 0;
            left: 12px;
        }
        
        .darkmode-button span {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            overflow: hidden;
            background-color: #000000;
            border-radius: var(--drkbtn-h);
            transition: 0.2s ease background-color, 0.2s ease opacity;
        }
        
        .darkmode-button span:before,
        .darkmode-button span:after {
            content: "";
            position: absolute;
            top: calc(var(--drkbtn-h) * 0.15);
            width: calc(var(--drkbtn-h) * 0.7);
            height: calc(var(--drkbtn-h) * 0.7);
            border-radius: 50%;
            transition: 0.5s ease transform, 0.2s ease background-color;
        }
        
        .darkmode-button span:after {
            background-color: #ffffff;
            transform: translate(calc(var(--drkbtn-h) * 0.15), 0px);
            z-index: 0;
        }
        
        .darkmode-button input[type="checkbox"]:checked+span:after {
            background-color: #ffffff;
            transform: translate(calc(var(--drkbtn-w) - var(--drkbtn-h) * 0.85), 0px);
        }
        
        .darkmode-button span:before {
            background-color: #000000;
            transform: translate( calc(var(--drkbtn-h) * -0.5), calc(var(--drkbtn-h) * -2));
            z-index: 1;
        }
        
        .darkmode-button input[type="checkbox"]:checked+span:before {
            background-color: #000000;
            transform: translate( calc(var(--drkbtn-w) - var(--drkbtn-h) * 1.15), calc(-0.25 * var(--drkbtn-h)));
        }
        
        .darkmode-button input[type="checkbox"]:checked+span {
            background-color: #000000;
        }
        
        .darkmode-button input[type="checkbox"]:active+span {
            opacity: 0.5;
        }
        
        .darkmode-button label {
            color: transparent;
            font-size: 1px;
        }
        </style>
        `
    );
    console.log(">> SolidCoreJS: DRK initialized");
}


function initSolidCoreJS() {
    RWD();
    NAV();
    MDI();
    ROS();
    SLD();
    STT();
    DRK();
}


function MDI() {
    let mdi = document.querySelectorAll(".mdi");

    for (let i = 0; i < 2000; i++) {
        if (mdi[i] == undefined) { break };
        mdi[i].addEventListener("click", function () {
            let src = mdi[i].getAttribute("src");
            document.body.insertAdjacentHTML(
                "afterend",
                "<div class='mdi-wrap' onclick='removemdi(this)'>" +
                "<img class='mdi-img' src='" +
                src +
                "'>" +
                "</div>"
            );
        });
    }
}

function removemdi(this_mdi) {
    this_mdi.remove();
}

initMDI();

function initMDI() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        .mdi {
            cursor: pointer;
        }
        
        .mdi-wrap {
            background: #00000088;
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            cursor: pointer;
        }
        
        .mdi-img {
            width: 100%;
            border-radius: 0;
            justify-content: center;
            align-items: center;
            object-fit: contain;
        }
        </style>
        `
    );
    console.log(">> SolidCoreJS: MDI initialized");
}


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


function ROS() {
    let ros_top = "120px";
    let ros_transition = "all ease 0.8s";

    let ros = document.querySelectorAll(".ros");
    let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );

    initROS();
    updateROS();
    document.addEventListener("scroll", function () {
        updateROS();
    });

    function initROS() {
        document.head.insertAdjacentHTML(
            "beforeend",
            "<style>" +
            ".ros {position: relative; opacity: 0.0; top: " +
            ros_top +
            "; transition: " +
            ros_transition +
            ";}" +
            "</style>"
        );
        console.log(">> SolidCoreJS: ROS initialized");
    }

    function updateROS() {
        for (let i = 0; i < 2000; i++) {
            if (ros[i] == undefined) { break };
            let rect = ros[i].getBoundingClientRect();
            //
            // if (i === 0) {
            //     console.log(rect.top - vh);
            // }
            if (rect.top - vh < 0) {
                ros[i].style.top = "0";
                ros[i].style.opacity = "1.0";
            } else {
                ros[i].style.top = ros_top;
                ros[i].style.opacity = "0.0";
            }
        }
    }
}





var gap_i;
var row;

function RWD() {
    // row
    gap_i = 0;
    row = document.getElementsByClassName("row")[0];
    while (row != undefined) {
        row.style.gap = row.getAttribute("gap");
        row.style.justifyContent = row.getAttribute("type");
        gap_i += 1;
        row = document.getElementsByClassName("row")[gap_i];
    }
    // row-t
    gap_i = 0;
    row = document.getElementsByClassName("row-t")[0];
    while (row != undefined) {
        row.style.gap = row.getAttribute("gap");
        row.style.justifyContent = row.getAttribute("type");
        gap_i += 1;
        row = document.getElementsByClassName("row")[gap_i];
    }
}

initRWD();

function initRWD() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `<style>` +
        // :root
        `
        :root {
            --main-width-1: 1100px;
            --main-width-2: 1300px;
            --main-width-3: 1500px;

            --mobile-padding: 24px;
        }
        ` +
        // *
        `
        * {
            padding: 0;
            margin: 0;
            transition: all ease 0.3s;
            font-family: 'Roboto', sans-serif;
            box-sizing: border-box;
            scroll-behavior: smooth;
            line-height: 1.5;
        }
        ` +
        // .main
        `
        .main {
            width: min(100%, var(--main-width-1));
            margin: 0 auto;
        } @media screen and (min-width: 1366px) {
            .main {
                width: min(100%, var(--main-width-1));
            }
        } @media screen and (min-width: 1536px) {
            .main {
                width: min(100%, var(--main-width-2));
            }
        } @media screen and (min-width: 1920px) {
            .main {
                width: min(100%, var(--main-width-3));
            }
        }

        @media screen and (max-width: 1000px) {
            .main {
                padding: 0 var(--mobile-padding);
            }
            section {
                padding: 0 var(--mobile-padding);
            }
        }
        ` +
        // RWD
        `
        .row,
        .row-t {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
        } @media screen and (min-width: 1000px) {
            .row,
            .row-t {
                flex-wrap: nowrap;
            }
        }

        .row [class^='col'] {
            width: 100%;
        } @media screen and (min-width: 1000px) {
            .row .col { width: 100%; }
            .row .col-1 { width: 8.33%; }
            .row .col-2 { width: 16.66%; }
            .row .col-3 { width: 25%; }
            .row .col-4 { width: 33.33%; }
            .row .col-5 { width: 41.66%; }
            .row .col-6 { width: 50%; }
            .row .col-7 { width: 58.33%; }
            .row .col-8 { width: 66.66%; }
            .row .col-9 { width: 75%; }
            .row .col-10 { width: 83.33%; }
            .row .col-11 { width: 91.66%; }
            .row .col-12 { width: 100%; }
        }

        .row-t [class^='col'] {
            width: 100%;
        } @media screen and (min-width: 600px) {
            .row-t [class^='col'] {
                width: 50%;
            }
        }

        @media screen and (min-width: 1000px) {
            .row-t .col { width: 100%; }
            .row-t .col-1 { width: 8.33%; }
            .row-t .col-2 { width: 16.66%; }
            .row-t .col-3 { width: 25%; }
            .row-t .col-4 { width: 33.33%; }
            .row-t .col-5 { width: 41.66%; }
            .row-t .col-6 { width: 50%; }
            .row-t .col-7 { width: 58.33%; }
            .row-t .col-8 { width: 66.66%; }
            .row-t .col-9 { width: 75%; }
            .row-t .col-10 { width: 83.33%; }
            .row-t .col-11 { width: 91.66%; }
            .row-t .col-12 { width: 100%; }
        }
        ` +
        // a
        `
        a {
            font-size: 16px;
            text-decoration: none;
            color: #000000;
        } a:hover {
            color: #838383;
        }
        ` +
        // .cta
        `
        .cta {
            font-size: 16px;
            color: #ffffff;
            background: #292929;
            border: none;
            padding: 8px 32px;
            border-radius: 100px;
            cursor: pointer;
        } .cta:hover {
            background: #444444;
        }
        ` +
        `</style>`
    );
    console.log(">> SolidCoreJS: RWD initialized");
}


function SLD() {
    const a = document.querySelectorAll('a[target="_blank"]');
    a.forEach(function (element) {
        if (!element.hasAttribute("rel")) {
            element.setAttribute("rel", "noopener noreferrer");
        }
    });
    console.log(">> SolidCoreJS: SLD initialized");
}



function STT() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        "<div id='scrolltotop'></div>"
    );

    let stt = document.querySelector("#scrolltotop");
    let html = document.querySelector("html");

    stt.innerHTML = "&raquo;";

    document.addEventListener("scroll", function () {
        if (html.scrollTop < 500) {
            stt.style.opacity = "0.0";
        } else {
            stt.style.opacity = "1.0";
        }
    });

    stt.addEventListener("click", function () {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
}

initSTT();

function initSTT() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        #scrolltotop {
            position: fixed;
            z-index: 1000;
            bottom: 20px;
            right: 20px;
            font-size: 20px;
            transform: rotate(-90deg);
            opacity: 0.0;
            cursor: pointer;
            transition: all ease 0.3s;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: grey;
        }
        </style>
        `
    );
    console.log(">> SolidCoreJS: STT initialized");
}



