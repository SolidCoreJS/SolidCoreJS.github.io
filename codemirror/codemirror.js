var i_count = 0;
while (document.getElementsByClassName("myTextArea")[i_count] != undefined) {
    CodeMirror.fromTextArea(
        document.getElementsByClassName("myTextArea")[i_count], {
        lineNumbers: true,
        mode: "text/html",
        theme: "ayu-mirage",
        indentUnit: 8,
        readOnly: true,
    }
    );
    i_count++;
}

i_count = 0;
while (document.getElementsByClassName("CodeMirror")[i_count] != undefined) {
    document.getElementsByClassName("CodeMirror")[i_count].classList.add("darkmode-ignore");
    i_count++;
}