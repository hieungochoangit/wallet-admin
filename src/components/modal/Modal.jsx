import React from "react";
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from "@coreui/react";

const BaseModal = (props) => {
    const { visible, setVisible, children, onClickAccess } = props;

    return (
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>
                    <div className="text-danger">Chú ý</div>
                </CModalTitle>
            </CModalHeader>
            <CModalBody>{children}</CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Đóng
                </CButton>
                <CButton color="primary" onClick={() => onClickAccess()}>
                    Đồng ý
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

export default BaseModal;
