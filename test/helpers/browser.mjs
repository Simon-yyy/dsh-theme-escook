import vm from 'node:vm';

export function browserFixture() {
  const styles = [];
  const attributes = new Map();
  const storage = new Map();
  const head = {
    appendChild(element) { styles.push(element); element.parentNode = head; },
    removeChild(element) { styles.splice(styles.indexOf(element), 1); element.parentNode = null; }
  };
  const document = {
    head,
    getElementById: (id) => styles.find((element) => element.id === id) ?? null,
    querySelectorAll: () => [],
    createElement: () => ({ id: '', textContent: '', parentNode: null }),
    documentElement: {
      setAttribute: (key, value) => attributes.set(key, value),
      removeAttribute: (key) => attributes.delete(key)
    }
  };
  const window = {};
  const context = vm.createContext({
    window, document,
    localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    console: { info() {} }
  });
  return { context, window, document, styles, attributes, storage };
}
