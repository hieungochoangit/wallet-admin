import axiosClient from "./axiosClient";

const categoryApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category/create", data);
    },
    getListCategory(params) {
        return axiosClient.get("/admin/category/list", { params });
    },
    getDetailCategory(id) {
        return axiosClient.get(`/admin/category/${id}`);
    },
};

export default categoryApi;
