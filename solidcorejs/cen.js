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
