import sendRequest from "./axios";

export function homeData() {
  return sendRequest({
    url: '/home/multidata'
  })
}
