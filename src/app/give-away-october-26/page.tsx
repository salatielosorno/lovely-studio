import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rifa Octubre 2026",
  description: "Participa en la rifa de un Pedi-Spa gratis de Lovely Studio.",
};

const Page = () => (
  <article className="section">
    <header className="prose-ls mb-8">
      <h1 className="section-title">Rifa Octubre 2026</h1>
      
    </header>
    <div className="prose-ls">
            <p>Participa en la rifa de un Pedi-Spa completamente gratis qué Lovely Studio tiene para ti.</p>
            <h2>Como participar</h2>
            <ul>
                <li>Déjanos una reseña en Google Maps contándonos qué es lo que más te gusta de
                    nuestro servicio. Usa el siguiente enlace: <a href="https://g.page/r/CVk-adzuy-zgEBM/review" target="_blank" rel="noopener noreferrer">Escribir reseña</a>
                </li>
                <li>Comparte una captura de pantalla de tu reseña mediante Whatsapp al <a
                        href="https://api.whatsapp.com/send/?phone=5212251038236"
                        target="_blank" rel="noopener noreferrer"
                                               
                    >
                        225-103-8236
                    </a> junto con tu nombre completo para participar.
                </li>
                <li>Recibirás una confirmación con el número asignado para participar en nuestra rifa.
                </li>
            </ul>
            <h2>Boleto ganador</h2>
            <p>Para garantizar total transparencia e imparcialidad, el ganador se definirá utilizando el Sorteo Zodiaco Especial de la Lotería Nacional Mexicana, que se celebrará el día domingo 25 de octubre de 2026 a las 20:00 horas. El boleto ganador de nuestra rifa será aquel que coincida estrictamente con las ÚLTIMAS DOS CIFRAS del Premio Mayor publicado esa misma noche. Por ejemplo, si el Premio Mayor oficial resulta ser el número 45,782, el ganador de nuestro premio será el poseedor del boleto número 82.</p>
            <p>Si las últimas dos cifras del Premio Mayor corresponden a un número de boleto que no fue asignado, el premio se asignará al participante que tenga el número que coincida estrictamente con las últimas dos cifras del Primer Premio Secundario de esa misma lista oficial de la Lotería Nacional Mexicana. Si ese tampoco estuviera asignado, se recorrerá sucesivamente a los siguientes premios secundarios de la lista oficial hasta encontrar un número que sí haya sido asignado a algún participante.</p>
            <h2>Premio y entrega</h2>
            <p>El feliz ganador se llevará un servicio de Pedi-Spa. Para reclamar su premio, deberá presentar su comprobante digital con el número asignado, junto con una identificación oficial vigente. El servicio se entregará exclusivamente asistiendo a su cita entre el 26 y 30 de octubre de 2026. El ganador tendrá como fecha límite el 29 de octubre de 2026 para agendar su espacio, el cual quedará estrictamente sujeto a la disponibilidad de horarios de la sucursal.</p>
            <h2>Restricciones</h2>
            <ul>
                <li>La rifa está destinada para clientes que hayan asistido a cita al menos una vez para cualquier de nuestros servicios.
                </li>
                <li>El premio es personal e intransferible, con la única excepción de que el ganador de manera expresa solicite cederlo a favor de sus padres, hijos, cónyuge o concubino(a) debidamente acreditados. Queda estrictamente prohibida la transferencia a cualquier otro familiar (como hermanos, tíos o primos) o terceros.
                </li>
                <li>Para conocer las restricciones complementarias consulte nuestros <a href="/terms-and-conditions">Términos y Condiciones</a>. Lo dispuesto en dicho documento complementa la presente cláusula y es de cumplimiento obligatorio.
                </li>
            </ul>
            <h2>Descargo de responsabilidad</h2>
            <p>Aclaramos que este es un evento estrictamente privado y de carácter interno. La Lotería Nacional Mexicana se utiliza únicamente como un validador numérico de la suerte debido a su transparencia pública, por lo que dicha institución no avala, organiza, ni tiene responsabilidad alguna sobre el desarrollo de esta rifa o la entrega de sus premios.</p>
            </div>
  </article>
);

export default Page;
