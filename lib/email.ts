export function encodeMailtoHref(email: string): string {
  return ("mailto:" + email)
    .split("")
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join("");
}

export function encodeEmailText(email: string): string {
  return email.replace(/@/g, "&#64;").replace(/\./g, "&#46;");
}

export function buildObfuscatedMailtoHTML(email: string, className: string = ""): string {
  const href = encodeMailtoHref(email);
  const text = encodeEmailText(email);
  const cls = className ? ` class="${className}"` : "";
  return `<a href="${href}"${cls}>${text}</a>`;
}
