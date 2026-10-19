/*This script contains pieces of scripts in heaven_online.*/

/*Page functions*/
const baseURL = window.location.origin;
document.addEventListener("keydown", (event)=> {
    if (event.key == "Tab") {
        event.preventDefault();
        const certainUrl = baseURL + "/Tab_is_dangerous.html";
        window.location.replace(certainUrl);
    }
});

function goto(url) {
    window.location.href = url;
};

function rng(min,max) {
    return Math.floor(Math.random() * max) + min;
};

let isindex = null;

console.log("Preparing page.");

var page = window.location.pathname;
if (page.endsWith(".html")) {
	page = page.slice(1, -5)
} else if (page.endsWith("/")) {
	page = page.slice(1, -1)
} else {
	page = page.slice(1)
};
if (page == "") {
	page = "index"
}

if (page == "index") {
	isindex = true
} else {
	isindex = false
};
/*Connecting js scripts.*/
function loadScript(src, asynchrone) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = asynchrone;
        script.onload = () => {
            console.log(`${src} is loaded.`);
            resolve();
        };
        script.onerror = () => {
            console.error(`Error loading ${src}.`);
            reject(new Error(`Error loading ${src}.`));
        };
        document.head.appendChild(script);
    });
}

// Load scripts
if (isindex == true) {
    loadScript("/jquery-3.7.1.min.js",false)
    loadScript("/tooltip.js",false);
} else {
    loadScript("../jquery-3.7.1.min.js",false)
    loadScript("../tooltip.js",false);
}
// Audio script
function AudioPlay(src,loop,volume,speed) {
    let audio = new Howl({
        src: [src],
        loop: loop,
        volume: volume,
        rate: speed
    });
    audio.play();
    return audio;
};
function AudioStop(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    };
};
/*End.*/
console.log("Page is prepared. Enjoy the game.");