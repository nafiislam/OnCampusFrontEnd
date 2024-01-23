export async function POST(e: string) {
  "use server";
  fetch("http://localhost:5000/api/user/lol", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: e,
    },
    body: JSON.stringify({
      username: "test",
      password: "test",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });
}
