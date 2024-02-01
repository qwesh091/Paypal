import React from 'react';
import './App.css';

function App() {
  return (
    <div>
  <meta charSet="utf-8" />
  <section id="loginform">
    <div id="outerbox">
      <img src="paypallogo.jfif" id="logo" />
      <form>
        <input id="password" type="password" name="password" placeholder="Email or mobile number" />
        <a href id="forgotpass">Forgot email?</a>
        <button id="login" className="but">
          Next
        </button>
        <div class="loginSignUpSeparator "><span class="textInSeparator">or</span></div>
        <button id="login" className="button2">
          Sign Up
        </button>
        <div class="intentFooter ">
      <div class="localeSelector  ">
        <span class="picker country-selector">
          <span class="hide" id="countryPickerLink">
            </span><button type="button" aria-label="countryPickerLink" class="country PH" pa-marked="1">
              </button></span><ul class="localeLink"><li><a class="selected scTrack:unifiedlogin-footer-language_en_US" href="/signin?Z3JncnB0=&amp;country.x=PH&amp;locale.x=en_US&amp;langTgl=en" lang="en" data-locale="en_US" aria-current="”true”" pa-marked="1">English</a></li><li><a class=" scTrack:unifiedlogin-footer-language_tl_PH" href="/signin?Z3JncnB0=&amp;country.x=PH&amp;locale.x=tl_PH&amp;langTgl=tl" lang="tl" data-locale="tl_PH" pa-marked="1">Filipino</a></li></ul></div></div>
              <footer class="footer" role="contentinfo"><div class="legalFooter"><ul class="footerGroup"><li><a target="_blank" href="/ph/smarthelp/contact-us" pa-marked="1">Contact Us</a></li><li><a target="_blank" href="/ph/webapps/mpp/ua/privacy-full" pa-marked="1">Privacy</a></li><li><a target="_blank" href="/ph/webapps/mpp/ua/legalhub-full" pa-marked="1">Legal</a></li><li><a target="_blank" href="/ph/webapps/mpp/ua/upcoming-policies-full" pa-marked="1">Policy Updates</a></li><li><a target="_blank" href="/ph/webapps/mpp/country-worldwide" pa-marked="1">Worldwide</a></li>
              </ul>
              </div>
              </footer>
      </form>
    </div>
  </section>
</div>

  );
};
export default App;