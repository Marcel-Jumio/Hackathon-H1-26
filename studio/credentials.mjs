// Local credential storage (WP6) — keeps Jumio API credentials in localStorage for a limited
// time so the Studio can call /api/session without re-entering credentials on every reload.

const STORAGE_KEY = "jumio-smartdemo-credentials";

/** Default credential lifetime, in milliseconds. Adjustable per-call via saveCredentials(). */
export const DEFAULT_TTL_MS = 15 * 60 * 1000; // 5 minutes for demo purposes

/** Persist { apiKey, apiSecret, region } with an expiry timestamp. */
export function saveCredentials(
  { apiKey, apiSecret, region },
  ttlMs = DEFAULT_TTL_MS,
) {
  const record = { apiKey, apiSecret, region, expiresAt: Date.now() + ttlMs };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

/** Returns { apiKey, apiSecret, region, expiresAt }, or null if missing/expired (auto-clears). */
export function getCredentials() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  let record;
  try {
    record = JSON.parse(raw);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }

  if (!record.expiresAt || record.expiresAt <= Date.now()) {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }

  return record;
}

export function clearCredentials() {
  localStorage.removeItem(STORAGE_KEY);
}

/** Milliseconds remaining before the stored credentials expire (0 if absent/expired). */
export function getRemainingMs() {
  const record = getCredentials();
  if (!record) return 0;
  return Math.max(0, record.expiresAt - Date.now());
}
