import axios from "axios";

async function userSearch() {
  let results = {};
  await axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      results = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return results;
}

export default userSearch;
