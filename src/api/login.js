import request from "@/utils/request";

export default {};

export function login(data) {
  console.log(data);
  return request({
    url: "/api/account/login",
    method: "post",
    data,
  });
}

export function confirmLogin(data) {
  console.log(data);
  return request({
    url: "/api/account/confirmLogin",
    method: "post",
    data,
  });
}
