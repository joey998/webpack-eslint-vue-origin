import request from "@/utils/request";

export default {};
export function findTreeBean() {
  return request({
    url: "/api/lane/findEasyuiTreeBean",
    method: "get",
  });
}
