const siteConfig = window.DEVPLUS_SITE ?? {};

for (const versionNode of document.querySelectorAll("[data-version]")) {
  if (siteConfig.version) {
    versionNode.textContent = `${versionNode.dataset.versionPrefix ?? "Versão "}${siteConfig.version}`;
  }
}

for (const downloadLink of document.querySelectorAll("[data-download-link]")) {
  if (siteConfig.downloadUrl) {
    downloadLink.href = siteConfig.downloadUrl;
  }
  downloadLink.download = "DevPlus-Control-Setup.exe";
}

for (const whatsappLink of document.querySelectorAll("[data-whatsapp-link]")) {
  if (siteConfig.whatsappUrl) {
    whatsappLink.href = siteConfig.whatsappUrl;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  siteNavigation?.classList.toggle("is-open", !isOpen);
});

siteNavigation?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNavigation.classList.remove("is-open");
  }
});
