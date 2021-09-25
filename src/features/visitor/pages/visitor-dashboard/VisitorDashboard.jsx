import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";

import { AddAppointment } from "../../components/add-appointment/AddAppointment";
import { useForm } from "../../../../hooks/useForm";
import VisitorDataService from "../../../../services/visitor.service";
import { visitorLogin } from "../../../../store/auth/auth.actions";
import { toast } from "react-toastify";

export const VisitorDashboard = () => {
  /* Hooks */
  const [show, setShow] = useState(false);
  const [processing, setProcessing] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { visitor } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [{ name, lastName, card, securityCode }, handleInputChange] = useForm({
    name: visitor.name,
    lastName: visitor.lastName,
    card: "XXX-XXX-XXXXX",
    securityCode: "XXX",
  });
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [securityError, setSecurityError] = useState(false);

  const validateInputs = () => {
    name.trim().length > 0 ? setNameError(false) : setNameError(true);
    lastName.trim().length > 0
      ? setLastNameError(false)
      : setLastNameError(true);
    card.trim().length < 11 ? setCardError(true) : setCardError(false);
    securityCode.trim().length < 2
      ? setSecurityError(true)
      : setSecurityError(false);

    if (
      name.trim().length !== 0 &&
      lastName.trim().length !== 0 &&
      card.trim().length >= 11 &&
      securityCode.trim().length >= 3
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      setProcessing(true);

      VisitorDataService.setPaidStatus(visitor.id).then((res) => {
        setProcessing(false);
        toast.success("Pago procesado correctamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });

        dispatch(visitorLogin(res.data));
      });
    }
  };

  return (
    <main className="container mt-4">
      <div className="row">
        {/* If the paid hasn't been done */}
        {!visitor.isPaid && (
          <>
            <div className="col-12">
              <h2 className="text-center">
                Aun no ha sido dado de alta en la asociación, por favor realice
                el pago para poder solicitar citas.
              </h2>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center">
              <button
                className="btn btn-outline-success mt-4"
                onClick={handleShow}
              >
                Procesar pago
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Ingrese sus datos para el pago</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="row">
                  {/* First name input */}
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                      />

                      {nameError && (
                        <small className="error_msg">Requerido.</small>
                      )}
                    </div>
                  </div>
                  {/* #First name input */}

                  {/* Last name input */}
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John"
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                      />

                      {lastNameError && (
                        <small className="error_msg">Requerido.</small>
                      )}
                    </div>
                  </div>
                  {/* #Last name input */}

                  {/* Card number input */}
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Numero de tarjeta
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John"
                        value={card}
                        name="card"
                        onChange={handleInputChange}
                      />

                      {cardError && (
                        <small className="error_msg">
                          Mínimo 11 caracteres.
                        </small>
                      )}
                    </div>
                  </div>
                  {/* #Card number input */}

                  {/* Security code input */}
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Codigo de seguridad
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John"
                        value={securityCode}
                        name="securityCode"
                        onChange={handleInputChange}
                      />

                      {securityError && (
                        <small className="error_msg">
                          {" "}
                          Mínimo 3 caracteres.
                        </small>
                      )}
                    </div>
                  </div>
                  {/* #Security code input */}

                  {/* Spinner */}
                  {processing && (
                    <div className="col-12 d-flex justify-content-center my-3">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  )}
                  {/* #Spinner */}
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Procesar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
        {/* #If the paid hasn't been done */}

        {/* Waiting to be accepted */}
        {visitor.isPaid && !visitor.isActive && (
          <>
            <div className="col-12">
              <h2 className="text-center">
                Espere ser aceptado en la asociación para poder comenzar a
                tramitar citas.
              </h2>
            </div>
          </>
        )}
        {/* #Waiting to be accepted */}

        {/* Accepted visitor */}
        {visitor.isActive && <AddAppointment />}
        {/* #Accepted visitor */}
      </div>
    </main>
  );
};
