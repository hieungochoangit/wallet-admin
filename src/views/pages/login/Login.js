import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormText,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useState } from "react";
import userApi from "src/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../userSlice";
import { useEffect } from "react";
import Loading from "src/components/loading/Loading";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const isLogin = useSelector((state) => state.user.isLogin);

    useEffect(() => {
        if (isLogin) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    }, [isLogin]);

    const onSubmit = async () => {
        setLoading(true);
        const data = {
            username: watch("username"),
            password: watch("password"),
        };

        const response = await userApi.login(data);

        if (response.statusCode === 0) {
            dispatch(setCurrentUser(response.data.token));

            if (isLogin) {
                navigate("/dashboard");
            } else {
                navigate("/login");
            }
        } else {
            toast(response.data.message);
            setLoading(false);
        }
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit(onSubmit)}>
                                        <h1>????ng nh???p</h1>
                                        <p className="text-medium-emphasis">????ng nh???p v??o h??? th???ng c???a b???n</p>
                                        <CInputGroup className="mb-2">
                                            <CInputGroupText>
                                                <CIcon icon={cilUser} />
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder="T??i kho???n"
                                                autoComplete="username"
                                                {...register("username", { required: true, minLength: 6 })}
                                            />
                                        </CInputGroup>
                                        {errors.username?.type === "required" && (
                                            <CFormText style={{ color: "red" }} className="help-block mb-2">
                                                Vui l??ng nh???p t??i kho???n c???a b???n
                                            </CFormText>
                                        )}
                                        {errors.username?.type === "minLength" && (
                                            <CFormText style={{ color: "red" }} className="help-block mb-2">
                                                T??i kho???n t???i thi???u 6 k?? t???
                                            </CFormText>
                                        )}

                                        <CInputGroup className="mb-2">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type="password"
                                                placeholder="M???t kh???u"
                                                autoComplete="current-password"
                                                {...register("password", { required: true, minLength: 6 })}
                                            />
                                        </CInputGroup>
                                        {errors.password?.type === "required" && (
                                            <CFormText style={{ color: "red" }} className="help-block mb-2">
                                                Vui l??ng nh???p m???t kh???u
                                            </CFormText>
                                        )}
                                        {errors.password?.type === "minLength" && (
                                            <CFormText style={{ color: "red" }} className="help-block mb-2">
                                                M???t kh???u t???i thi???u 6 k?? t???
                                            </CFormText>
                                        )}

                                        <CRow>
                                            <CCol xs={6}>
                                                {loading ? (
                                                    <Loading />
                                                ) : (
                                                    <CButton color="primary" className="px-4" type="submit">
                                                        Login
                                                    </CButton>
                                                )}
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;
