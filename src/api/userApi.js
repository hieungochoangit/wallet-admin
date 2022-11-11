import axiosClient from "./axiosClient";

const userApi = {
    login(data) {
        return axiosClient.post("/admin/login", data);
    },
    getUser() {
        return axiosClient.get("/admin/detail");
    },
};

export default userApi;
