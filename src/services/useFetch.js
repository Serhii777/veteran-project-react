export function getList() {
  return fetch("http://localhost:4000/posts").then((data) => data.json());
}

export function setItem(title) {
  return fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  }).then((data) => data.json());
}
