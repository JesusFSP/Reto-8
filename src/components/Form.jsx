import { useState } from "react";

const Form = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    petName: '',
    ownerName: '',
    date: '',
    hour: '',
    symptoms: ''
  });
  const [appointments, setAppointments] = useState([]);

  const { petName, ownerName, date, hour, symptoms } = appointmentForm;

  const handleFormInput = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      appointmentForm
    ]);
    setAppointmentForm({
      petName: '',
      ownerName: '',
      date: '',
      hour: '',
      symptoms: ''
    });
  };

  return (
    <>
      <section className="form">
        <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
          <div className="formulario g-layout g-layout--center gap-md">
            <h1>Reserve su Cita</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="g-layout g-layout--center gap-md">
                <input type="text" name="petName" className="form-control" id="petName" placeholder="Nombre de la mascota" value={petName} onInput={handleFormInput} />
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="ownerName" className="form-control" id="ownerName" placeholder="Nombre del propietario" value={ownerName} onInput={handleFormInput} />
              </div>
              <div className="form-floating mb-3">
                <input type="date" name="date" className="form-control" id="date" placeholder="Fecha" value={date} onInput={handleFormInput} />
              </div>
              <div className="form-floating mb-3">
                <input type="time" name="hour" className="form-control" id="hour" placeholder="Hora" value={hour} onInput={handleFormInput} />
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="symptoms" className="form-control" id="symptoms" placeholder="Síntomas" value={symptoms} onInput={handleFormInput} />
              </div>
              <button className="btn btn-primary w-100">Registrar</button>
            </form>
          </div>
          <div className="citas">
            <h3>🐶 Citas 🐶</h3>
            <ul className="list-group">
              {appointments.map((element, index) => {
                const { petName, date, hour, symptoms, ownerName } = element;
                return (
                  <li
                    key={index}
                    className="list-group-item list-group-item-action"
                    aria-current="false"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Mascota: {petName} 🐾</h5>
                      <small>📆 {date} 🕤 {hour}</small>
                    </div>
                    <p className="mb-1">Síntomas: {symptoms} 🩺</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small>Dueño: {ownerName} 🤗</small>
                      <a href={`https://api.whatsapp.com/send?phone=51924112585&text=Mascota: ${petName}; ${date} ${hour}; Síntomas: ${symptoms}; Dueño: ${ownerName}`} target="_blank" rel="noopener noreferrer" className="button button--primary">Confirmar</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;