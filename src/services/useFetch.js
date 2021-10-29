export async function getList() {
  const data = await fetch("http://localhost:4000/posts");
  return await data.json();
}

export async function setItem(title) {
  const data = await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  return await data.json();
}
