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
