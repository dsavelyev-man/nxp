import axios from "axios";
import {getCookie} from "./helpers";

export async function RequestLogin(dt) {
  return await axios.post("/api/admin/login", dt)
}

export async function RequestCurrentUser() {
  return await axios.get("/api/admin/current-user")
}