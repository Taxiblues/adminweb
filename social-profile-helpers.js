(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.PassengersSocialProfile = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizedValue(value) {
    return String(value || "").trim();
  }

  function facebookProfileUrl(value) {
    const normalized = normalizedValue(value);
    if (!normalized) return null;
    try {
      const parsed = new URL(normalized);
      const host = parsed.hostname.toLowerCase();
      if (parsed.protocol !== "https:") return null;
      if (parsed.username || parsed.password || parsed.port) return null;
      if (host !== "facebook.com" && host !== "www.facebook.com") return null;
      if (!parsed.pathname || parsed.pathname === "/") return null;
      return parsed.toString();
    } catch (_) {
      return null;
    }
  }

  function instagramProfileUrl(value) {
    const normalized = normalizedValue(value).replace(/^@/, "");
    if (
      !/^(?!.*\.\.)(?!.*\.$)[A-Za-z0-9_][A-Za-z0-9._]{0,29}$/.test(normalized)
    ) {
      return null;
    }
    return `https://www.instagram.com/${encodeURIComponent(normalized)}/`;
  }

  function renderInstagramAccount(value) {
    const normalized = normalizedValue(value).replace(/^@/, "");
    if (!normalized) return '<span class="social-profile-empty">-</span>';
    const display = `@${normalized}`;
    const href = instagramProfileUrl(normalized);
    return `<div class="social-profile-reference"><span class="social-profile-value">${
      escapeHtml(
        display,
      )
    }</span>${
      href
        ? `<a href="${
          escapeHtml(href)
        }" target="_blank" rel="noopener noreferrer">Apri Instagram</a>`
        : ""
    }</div>`;
  }

  function renderFacebookAccount(value) {
    const normalized = normalizedValue(value);
    if (!normalized) return '<span class="social-profile-empty">-</span>';
    const href = facebookProfileUrl(normalized);
    return `<div class="social-profile-reference"><span class="social-profile-value">${
      escapeHtml(
        normalized,
      )
    }</span>${
      href
        ? `<a href="${
          escapeHtml(href)
        }" target="_blank" rel="noopener noreferrer">Apri Facebook</a>`
        : ""
    }<small>Tag Facebook da aggiungere manualmente</small></div>`;
  }

  return {
    facebookProfileUrl,
    instagramProfileUrl,
    renderFacebookAccount,
    renderInstagramAccount,
  };
});
