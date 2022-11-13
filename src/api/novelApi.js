// import {post,get} from "./service"
import axios from "./service";

// 根据novel.id查询章节列表
export function novelChapterListByIdApi(id) {
  return axios.get(`/novel/NovelChappterList/${id}`);
}
// 根据novel_chapter.chapter_num 查询章节内容
export function findByNovelChapterApi(id) {
  return axios.get(`/novel/findByNovelChapter/${id}`);
}

// 根据novel.id查询
export function novelByIdApi(id) {
  return axios.get(`/novel/${id}`);
}

export function novelListApi() {
  return axios.get('/novel');
}
  
export function search(params) {
  return axios.get('/search', { params });
}


// export const novelListApi=data=>{
//     return get({
//         url:"/novel",
//         data    
//     })
// }

// export const novelByIdApi=data=>{
//     return get({
//         url:"/novel/${id}",
//         params:{},
//         data    
//     })
// }