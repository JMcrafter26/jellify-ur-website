const bookmarklet = {
  default:
    '["https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js"].forEach(e=>{const t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)});',
  debug:
    '(()=>{window.JELLIFY_DEBUG=1,window.JELLIFY_OPTIONS={geometry:{animationAreaZoom:1e6,translationAreaZoom:1e6}};["https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js"].forEach(e=>{const t=document.getElementsByTagName("head")[0],a=document.createElement("script");a.src=e,t.appendChild(a)})})();',
  soft: '(()=>{window.JELLIFY_OPTIONS={physics:{constraint:{minStiffness:.001}}};["https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js"].forEach(e=>{const t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)})})();',
  hard: '(()=>{window.JELLIFY_OPTIONS={physics:{constraint:{minStiffness:.01}}};["https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://jmcrafter26.github.io/jellify-ur-website/js/jellify.js"].forEach(e=>{const t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)})})();',
};

function createBookmarkletLink(
  type = "default",
  text = "Jellify",
  size = "md",
  className = "btn btn-primary"
) {
  const href = `javascript:${bookmarklet[type]}`;
  return {
    __html: `<a class="${className} btn-${size}" href='${href}'>${text}</a>`,
  };
}

function BookmarkletLink(props) {
  return (
    <div
      className={props.wrapClassName}
      dangerouslySetInnerHTML={createBookmarkletLink(
        props.type,
        props.text,
        props.buttonSize,
        props.buttonClassName
      )}
      onClick={props.whenClick}
    ></div>
  );
}

export default BookmarkletLink;
