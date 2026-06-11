import axios from "axios";

export const aiSearchToolAllCats = async () => {
  const result = await axios.get("http://localhost:3000/api/cats");
  return result.data;
};
