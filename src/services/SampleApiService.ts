import http from "@/http-common";

class SampleApiService {
  get(): Promise<any> {
    return http.get("/");
  }
  get_Hamabeminami(): Promise<any> {
    return http.get("/minami373hamabe");
  }

  get_Hashimotokanna(): Promise<any> {
    return http.get(`/H_KANNA_0203`);
  }

//   create(data: any): Promise<any> {
//     return http.post("/api/books", data);
//   }

//   update(id: any, data: any): Promise<any> {
//     return http.put(`/api/books/${id}`, data);
//   }

//   delete(id: any): Promise<any> {
//     return http.delete(`/api/books/${id}`);
//   }

//   deleteAll(): Promise<any> {
//     return http.delete(`/api/books`);
//   }

//   findByDescription(title: string): Promise<any> {
//     return http.get(`/api/books?title=${title}`);
//   }
}

export default new SampleApiService();