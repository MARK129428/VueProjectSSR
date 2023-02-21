import  { http  }  from '../utils/http'

export function getRoomList() {
  return http.httpRequestGet("https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3", {})
}