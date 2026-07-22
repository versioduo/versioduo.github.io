// GitHub is unable to serve html pages directly from repositories.
// https://versioduo.com/view?url= fetches the given raw html page
// and renders it to the current window in a fullsize iframe.

'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
  fetch(new URL(window.location).searchParams.get('url'))
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    let iframe = document.createElement('iframe');
    iframe.srcdoc = html;
    iframe.style.width = "100%";
    document.body.appendChild(iframe);
  });
});
