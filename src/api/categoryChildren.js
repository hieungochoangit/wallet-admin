import axiosClient from "./axiosClient";

const categoryChildrenApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category-children/create", data);
    },
};

export default categoryChildrenApi;
