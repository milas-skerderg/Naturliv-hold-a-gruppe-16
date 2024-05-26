

document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem('cookieConsent')) {
    let banner = document.createElement("div");
    banner.id = "cookie-consent";
    banner.style.position = "fixed";
    banner.style.bottom = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#333";
    banner.style.color = "#fff";
    banner.style.padding = "10px";
    banner.style.textAlign = "center";
    banner.innerHTML = `
      Hos NaturLiv bruger vi cookies for at give den bedste oplevelse! 
      <button id="accept-cookies" style="margin-left: 10px; border-radius: 5px;">Accepter</button>
    `; 

    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", function() {
      localStorage.setItem('cookieConsent', 'true');
      document.getElementById("cookie-consent").remove();
    });
  }
});




