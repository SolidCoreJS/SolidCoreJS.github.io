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