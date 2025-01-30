// api.js
export function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, nome: "João" }), 100);
  });
}
