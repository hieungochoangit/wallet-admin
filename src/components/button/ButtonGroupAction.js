import React from "react";
import { Link } from "react-router-dom";
import { CButton, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSearch, cilPen, cilTrash } from "@coreui/icons";

const ButtonGroupAction = ({ actions, id, canDelete }) => {
    return (
        <>
            <CTooltip content="Xem">
                <CButton onClick={() => actions("view", id)} color="primary" size="sm">
                    <CIcon icon={cilSearch} size="sm" />
                </CButton>
            </CTooltip>
            <CTooltip content="Sửa">
                <CButton onClick={() => actions("edit", id)} color="info" size="sm">
                    <CIcon icon={cilPen} size="sm" />
                </CButton>
            </CTooltip>
            {canDelete && (
                <CTooltip content="Xoá">
                    <CButton onClick={() => actions("delete", id)} color="dark" size="sm">
                        <CIcon icon={cilTrash} size="sm" />
                    </CButton>
                </CTooltip>
            )}
        </>
    );
};

export default ButtonGroupAction;
