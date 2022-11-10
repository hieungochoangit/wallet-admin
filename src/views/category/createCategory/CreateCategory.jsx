import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CFormSelect,
} from "@coreui/react";
import { Link } from "react-router-dom";

const CreateCategory = () => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <Link to="/category">
                    <CButton className="mb-4">Quay lại</CButton>
                </Link>
            </div>
            <CCard className="mb-4">
                <CCardHeader>
                    <h1>Tạo danh mục</h1>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Tên danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput type="text" placeholder="tên danh mục" />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Slug</CFormLabel>
                            <CFormInput type="text" disabled placeholder="slug" />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Mô tả danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput type="text" placeholder="mô tả danh mục" />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Loại danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormSelect aria-label="Default select example">
                                <option value="1">VIP</option>
                                <option value="2">NORMAL</option>
                            </CFormSelect>
                        </div>
                        <CButton>Tạo</CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
};

export default CreateCategory;
