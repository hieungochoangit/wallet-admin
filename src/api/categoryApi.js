import axiosClient from "./axiosClient";

const categoryApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category/create", data);
    },
    getListCategory() {
        return axiosClient.get("/admin/category/list");
    },
    getDetailCategory(id) {
        return axiosClient.get(`/admin/category/${id}`);
    },
    updateCategory(data) {
        return axiosClient.post("/admin/category/update", data);
    },
    deleteCategory(id) {
        return axiosClient.get(`/admin/category/delete/${id}`);
    },
};

export default categoryApi;
