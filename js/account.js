/*

MIT License

Copyright (c) 2024 JustStudio. <https://juststudio.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

function OAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirect_url');
  const errorid = 'accounts_oauth_error_accept';
  function onerror(msg) {
    const notification = notify(null, 'Error: ' + msg, 'OK', errorid);
    notification.querySelector('#'+errorid).onclick = () => r_notific(notification);
  }
  if (redirectUrl) {
    try {
      const decodedUrl = decodeURIComponent(redirectUrl);
      const urlObj = new URL(decodedUrl);
      const allowedDomains = [
        'accounts.juststudio.is-a.dev'
      ];
      if (allowedDomains.some(domain => 
        urlObj.hostname === domain || 
        urlObj.hostname.endsWith('.' + domain)
      )) {
        window.location.href = decodedUrl;
      } else {
        onerror('Attempt to redirect to non-whitelisted domain.');
      }
    } catch (_) {
      onerror('Redirect URL is invalid or malformed.')
    }
  }
}

window.addEventListener('load', async function () {
  document.getElementById('accounts').innerHTML = `
    <div id="user-button"></div>
  `;
  const userbuttonDiv = document.getElementById('user-button');
  await Clerk.load();
  Clerk.mountUserButton(userbuttonDiv);
  if (!Clerk.user) {
    document.getElementById('acc-btn').style.display = 'flex';
    userbuttonDiv.style.display = 'none';
    if (window.location.pathname == '/account/') {
      document.getElementById('accounts').innerHTML = `
        <div id="sign-in"></div>
      `;
      const signInDiv = document.getElementById('sign-in');
      Clerk.mountSignIn(signInDiv);
    }
  } else if (window.location.pathname == '/account/') {
    document.getElementById('accounts').innerHTML = `
      <div id="user-profile"></div>
    `;
    const userprofileDiv = document.getElementById('user-profile');
    Clerk.mountUserProfile(userprofileDiv);
    document.body.classList.add('no-acc-btn');
    OAuth();
  }
});
