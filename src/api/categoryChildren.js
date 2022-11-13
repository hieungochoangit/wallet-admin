import axiosClient from "./axiosClient";

const categoryChildrenApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category-children/create", data);
    },
    deleteCategory(id) {
        return axiosClient.get(`/admin/category-children/delete/${id}`);
    },
};

export default categoryChildrenApi;
