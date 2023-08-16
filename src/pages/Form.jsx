import SolicitudCredito from "../components/SolicitudCredito";
import InformacionDeudor from "../components/InformacionDeudor";
import InformacionLaboralDeudor from "../components/InformacionLaboralDeudor";
import InformacionFinanciera from "../components/InformacionFinanciera";
import ReferenciasDeudor from "../components/ReferenciasDeudor";

const Form = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-6 bg-white border rounded-lg shadow-md">
      <SolicitudCredito />
      <InformacionDeudor />
      <InformacionLaboralDeudor />
      <InformacionFinanciera />
      <ReferenciasDeudor />
    </div>
  );
};

export default Form;
