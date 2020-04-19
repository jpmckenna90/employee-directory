import axios from "axios";

async function userSearch() {
  let results = {};
  await axios
    .get("https://randomuser.me/api/?results=40nat=us")
    .then((res) => {
      results = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return results;
}

export default userSearch;
