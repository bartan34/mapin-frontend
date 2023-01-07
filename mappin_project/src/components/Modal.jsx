import React from "react";
import StyledModal from "../styles/Modal";

function Modal({ content, loginPage, setLoginPage, closable }) {
  return (
    <StyledModal open={loginPage} onClose={(e, backdropClick) => {closable ? setLoginPage(false) : ""}}>
      {content}
    </StyledModal>
  );
}

export default Modal;
