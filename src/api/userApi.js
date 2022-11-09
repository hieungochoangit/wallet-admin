import axiosClient from "./axiosClient";

const userApi = {
    login(data) {
        return axiosClient.post("/admin/login", data);
    },
};

export default userApi;
