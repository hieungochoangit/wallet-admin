import axiosClient from "./axiosClient";

const categoryChildrenApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category-children/create", data);
    },
    deleteCategory(id) {
        return axiosClient.get(`/admin/category-children/delete/${id}`);
    },
    getDetailCategoryChildren(id) {
        return axiosClient.get(`/admin/category-children/detail/${id}`);
    },
    updateCategory(data) {
        return axiosClient.post("/admin/category-children/update", data);
    },
};

export default categoryChildrenApi;
