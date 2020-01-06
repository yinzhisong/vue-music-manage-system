import {request} from '@/network/request.js';

export function getBanner (){
  return request({
    url: '/banner'
  });
}