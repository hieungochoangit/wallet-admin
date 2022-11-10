import React from "react";
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

const CategoryTable = (props) => {
    const { data } = props;

    return (
        <div>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light" className="text-center">
                    <CTableRow>
                        <CTableHeaderCell>ID</CTableHeaderCell>
                        <CTableHeaderCell>Danh mục</CTableHeaderCell>
                        <CTableHeaderCell>Đường dẫn</CTableHeaderCell>
                        <CTableHeaderCell>Mô tả danh mục</CTableHeaderCell>
                        <CTableHeaderCell>Loại</CTableHeaderCell>
                        <CTableHeaderCell>Tùy chọn</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody className="text-center">
                    {data.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>{item.id}</CTableDataCell>
                            <CTableDataCell>{item.categoryName}</CTableDataCell>
                            <CTableDataCell>{item.categorySlug}</CTableDataCell>
                            <CTableDataCell>{item.categoryDesc}</CTableDataCell>
                            <CTableDataCell>{item.categoryType}</CTableDataCell>
                            <CTableDataCell className="d-flex justify-content-center gap-2">
                                <CButton size="sm" color="primary">
                                    Sửa
                                </CButton>
                                <CButton size="sm" color="danger">
                                    Xóa
                                </CButton>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    );
};

export default CategoryTable;
