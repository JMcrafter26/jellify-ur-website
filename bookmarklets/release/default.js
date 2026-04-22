// Original code of the minified bookmarklet (default version)
//
// How to create the bookmarklet:
// 1. Go to https://www.toptal.com/developers/javascript-minifier/
// 2. Paste the code and minify
// 3. Add "javascript:" in front of the minified code to create a bookmarklet

(() => {
  const urls = [
    // Dependencies should be loaded first
    'https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js',
    // Main script is loaded last
    'https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js',
  ];
  urls.forEach((url) => {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
  });
})();
