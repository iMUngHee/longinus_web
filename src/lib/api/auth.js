import client from "./client";

export const login = ({ password }) =>
  client.post("/api/auth/login", { password });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
