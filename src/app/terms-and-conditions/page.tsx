import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de servicio, agendamiento, anticipos y garantía de Lovely Studio.",
};

const Page = () => (
  <article className="section">
    <header className="prose-ls mb-8">
      <h1 className="section-title">Términos y condiciones</h1>
      <p className="mt-3 text-ls-muted">Última actualización 08 de septiembre de 2026 | Lovely Studio</p>
    </header>
    <div className="prose-ls">
            <h2>Atención in-situ</h2>
            <p>En Lovely nos esforzamos por brindarle el mejor servicio en la región. Es por ello que creemos fielmente en la necesidad de establecer una lista de lo que no se podrá considerar dentro de nuestros estándares.</p>
            <ul>
                <li>No se permite el acceso de ningún tipo de alimento o bebida.
                </li>
                <li>No se permite el consumo de alimentos ni bebidas dentro de las instalaciones.
                </li>
                <li>No se permite el acceso con niños. Salvo que el servicio sea proporcionado al menor en cuestión y se encuentre en compañía de un adulto.
                </li>
                <li>Solo se permite un acompañante para el cliente que recibirá el servicio en el momento de la cita. En ningún caso podrá ser un menor de edad menor a 12 años.
                </li>
                <li>Cada área está destinada para la prestación de uno de los servicios que se ofrecen. Por lo cuál el acompañante solo podrá ocupar el área designada.
                </li>
            </ul>
            <p>Nos reservamos el derecho de admisión y suspensión del servicio ante la violación de cualquiera de los puntos arriba listados.</p>
            <h2>Agendamiento</h2>
            <p>Con respecto al agendamiento ya sea in-situ, por teléfono o mediante nuestra página web oficial, el cliente se deberá apegar a lo siguiente:</p>
            <ul>
                <li>En caso de no poder asistir a su cita programada. El cliente deberá avisar con al menos 24 hrs de anticipación sobre la cancelación de la misma. En caso de no avisar quedará por entendido la asistencia en la hora y día acordado.
                </li>
                <li>En caso de requerir un cambio en su cita, este deberá notificarse con al menos 24 horas de anticipación y se permitirá por una única ocasión. La nueva fecha estará sujeta a la disponibilidad de ambas partes y deberá programarse dentro de los 7 días naturales posteriores a la fecha original.
                </li>
                <li>El cliente deberá prestar atención y sujetarse a los puntos contenidos dentro de la sección <strong>Atención in-situ</strong> en el momento de asistir a su cita.
                </li>
                <li>La programación de citas solo puede realizarse hasta 7 días en el futuro a partir de la fecha en que sea realizada. Aplica para aquellas citas realizadas in-situ, teléfono o mediante la página web oficial.
                </li>
                <li>Todos los agendamientos deberán ser realizados con 24 hrs de anticipación a la fecha y hora solicitadas.
                </li>
                <li>El tiempo de tolerancia para presentarse a su cita será de 15 minutos a partir de la fecha y hora pactada. En caso de superar este límite, nos reservamos el derecho a negarle el servicio fuera del horario establecido.
                </li>
            </ul>
            <h2>Anticipos</h2>
            <ul>
                <li>Para citas de servicio cuyo monto supere los $500.00 MXN (quinientos pesos mexicanos con cero centavos), se solicitará un <strong>anticipo del 50%</strong> sobre el valor total de los servicios.
                </li>
                <li>En caso de que no se solicite un adelanto explícitamente al momento del agendamiento, quedará por entendido que el servicio en cuestión no entra dentro de la restricción del punto anterior.
                </li>
                <li>Los anticipos no son reembolsables bajo ninguna circunstancia. No obstante, el cliente podrá solicitar la reprogramación de su cita por una única ocasión, siempre y cuando lo notifique con al menos 24 horas de anticipación; la nueva fecha quedará sujeta a disponibilidad y deberá agendarse dentro de los 7 días naturales posteriores a la fecha original. 
                </li>
            </ul>
            <h2>Restricciones en servicios</h2>
            <ul>
                <li>No se realiza retoque de uñas cuando la aplicación original no haya sido realizada en nuestras instalaciones y/o por personal de Lovely Studio.
                </li>
                <li>No se permite el uso de productos externos a los que se encuentran en nuestras instalaciones. Si el producto que se utiliza no es parte de los productos que Lovely Studio posee y son parte de su inventario, no se hará válida garantía alguna sobre ningún servicio sin excepción. Cualquier daño sufrido por el cliente será responsabilidad del mismo desde el momento que autoriza su aplicación y uso.
                </li>
                <li>No se atenderá a clientes con hongos presentes en manos y/o pies para servicio.
                </li>
            </ul>
            <p>Nos reservamos el derecho de admisión y suspensión del servicio ante la violación de cualquiera de los puntos arriba listados.</p>
            <h2>Garantía</h2>
            <p>En caso de presentar algún defecto o desgaste dentro de las primeras 24 horas posteriores al servicio deberá informar por teléfono y asistir al establecimiento para la valoración de nuestro personal técnico.</p>
            <p>En caso de aplicar la garantía, se aclara lo siguiente:</p>
            <ul>
                <li>Se utilizará material de la misma calidad.
                </li>
                <li>Para la corrección en uñas se realizará el mismo diseño.
                </li>
                <li>Se utilizarán los mismos colores que el servicio original.
                </li>
            </ul>
            <p>Todo lo anterior en el entendido que se debe a un defecto no propio del desgaste natural que pudiera ser la causa.</p>
            <p>Los pasos para hacer válida la garantía serían los siguientes:</p>
            <ul>
                <li>Notificar por teléfono acerca del problema presentado <strong>dentro de las primeras 24 horas posteriores al servicio</strong> para evitar perder la garantía.
                </li>
                <li>Enviar material adjunto al reporte por medio de whatsapp. Estas pueden ser fotografías en donde muestre claramente el problema presentado.
                </li>
                <li>Una vez que se confirme la posibilidad de hacer válida la garantía. Deberá asistir al establecimiento para el valoramiento por parte del personal técnico y de esta forma poder definir el curso de acción para solucionar su problema.
                </li>
            </ul>
            <p>No se da garantía sobre trabajos que no se hayan realizado por el personal de Lovely Studio.</p>
            <p>Nos reservamos el derecho de cambiar, modificar o eliminar el contenido del Sitio y la presente sección de Términos y condiciones en cualquier momento o por cualquier motivo a nuestra entera discreción sin previo aviso.</p>
            </div>
  </article>
);

export default Page;
