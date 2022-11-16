import axios from "axios";

export async function getFavoriteTutors(id: number) {
  const res = await axios.get(`http://localhost:3000/api/favoriteTutors/${id}`)
  return res.data
}