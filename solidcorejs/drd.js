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