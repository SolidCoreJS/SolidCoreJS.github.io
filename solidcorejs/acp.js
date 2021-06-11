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
