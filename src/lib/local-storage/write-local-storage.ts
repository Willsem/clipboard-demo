export function writeLocalStorage<T>(key: string, items: T) {
  localStorage.setItem(key, JSON.stringify(items));
}
