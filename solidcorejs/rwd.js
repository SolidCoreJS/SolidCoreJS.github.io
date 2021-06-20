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