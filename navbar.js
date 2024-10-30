// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
        <header>
            <div class="header-container">
                <div class="site-logo">
                    <a href="#">
                        <img src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/global/logo_cs_sm_blk.svg" alt="CS:GO Logo" class="logo">
                    </a>
                </div>
                <nav class="navigation">
                    <ul class="nav-list">
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="#" class="about-link">About</a>
                            <ul class="dropdown">
                                <li><a href="https://blog.counter-strike.net/index.php/history/">History</a></li>
                                <li><a href="https://counterstrike.fandom.com/wiki/Gameplay_Mechanics">Gameplay</a></li>
                                <li><a href="https://www.hltv.org/live">Competitive Scene</a></li>
                                <li><a href="https://csfloat.com/db">Skins</a></li>
                                <li><a href="https://www.counter-strike.net/news">News</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Counter-Strike</a>
                            <ul class="dropdown">
                                <li><a href="cs16.html">CS 1.6</a></li>
                                <li><a href="csgo.html">CS:GO</a></li>
                                <li><a href="cs2.html">CS2</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                        
                        <input type="checkbox" class="checkbox" id="checkbox">
                        <label for="checkbox" class="checkbox-label">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <span class="ball"></span>
                        </label>
                    </ul>
                    <div class="hamburger-menu" onclick="toggleMenu()">☰</div>
                </nav>
            </div>
        </header>
    `;

    // Insert the navbar into the page
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
