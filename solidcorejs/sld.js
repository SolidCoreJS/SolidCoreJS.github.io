function SLD() {
    const a = document.querySelectorAll('a[target="_blank"]');
    a.forEach(function (element) {
        if (!element.hasAttribute("rel")) {
            element.setAttribute("rel", "noopener noreferrer");
        }
    });
    console.log(">> SolidCoreJS: SLD initialized");
}
