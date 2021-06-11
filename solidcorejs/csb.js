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



