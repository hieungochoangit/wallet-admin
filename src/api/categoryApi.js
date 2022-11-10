import axiosClient from "./axiosClient";

const categoryApi = {
    createCategory(data) {
        return axiosClient.post("/admin/category/create", data);
    },
};

export default categoryApi;
