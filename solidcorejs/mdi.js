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