export async function GET(e: string) {
  "use server";
  fetch("http://localhost:5000/api/user/dashboard", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: e,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });
}
