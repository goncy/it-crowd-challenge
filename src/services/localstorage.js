export function persist(results) {
  localStorage.setItem("results", JSON.stringify(results));
}

export function load() {
  return JSON.parse(localStorage.getItem("results") || "[]");
}
