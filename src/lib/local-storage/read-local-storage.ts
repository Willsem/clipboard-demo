export function readLocalStorage<T>(key: string): T | undefined {
  const data = localStorage.getItem(key);
  if (data === null) {
    return;
  }

  try {
    const parsed = JSON.parse(data);
    return parsed;
  } catch {
    return;
  }
}
