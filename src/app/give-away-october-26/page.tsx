'use client'
import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";

const Page = () => {
    return <>
        <Box className="text-white bg-lsblack pt-5 pb-5">
            <Container maxWidth="lg">
                <Typography variant="h5" paragraph>
                    Rifa Octubre 2026
                </Typography>
            </Container>
        </Box>
        <br />
        <Box className="mx-2 md:container">
            <Typography variant="body1">Participa en la rifa de un Pedi-Spa completamente gratis qué Lovely Studio tiene para ti.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Como participar</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - Déjanos una reseña en Google Maps contándonos qué es lo que más te gusta de
                    nuestro servicio. Usa el siguiente enlace: <a className="text-blue-600 underline hover:text-blue-800" href="https://g.page/r/CVk-adzuy-zgEBM/review" target="_blank">Escribir reseña</a>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Comparte una captura de pantalla de tu reseña mediante Whatsapp al <a
                        href="https://api.whatsapp.com/send/?phone=5212251038236"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        225-103-8236
                    </a> junto con tu nombre completo para participar.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Recibirás una confirmación con el número asignado para participar en nuestra rifa.
                </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Boleto ganador</Typography>
            <Typography variant="body1">Para garantizar total transparencia e imparcialidad, el ganador se definirá utilizando el Sorteo Zodiaco Especial de la Lotería Nacional Mexicana, que se celebrará el día domingo 25 de octubre de 2026 a las 20:00 horas. El boleto ganador de nuestra rifa será aquel que coincida estrictamente con las ÚLTIMAS DOS CIFRAS del Premio Mayor publicado esa misma noche. Por ejemplo, si el Premio Mayor oficial resulta ser el número 45,782, el ganador de nuestro premio será el poseedor del boleto número 82.</Typography>
            <Typography variant="body1">Si las últimas dos cifras del Premio Mayor corresponden a un número de boleto que no fue asignado, el premio se asignará al participante que tenga el número que coincida estrictamente con las últimas dos cifras del Primer Premio Secundario de esa misma lista oficial de la Lotería Nacional Mexicana. Si ese tampoco estuviera asignado, se recorrerá sucesivamente a los siguientes premios secundarios de la lista oficial hasta encontrar un número que sí haya sido asignado a algún participante.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Premio y entrega</Typography>
            <Typography variant="body1">El feliz ganador se llevará un servicio de Pedi-Spa. Para reclamar su premio, deberá presentar su comprobante digital con el número asignado, junto con una identificación oficial vigente. El servicio se entregará exclusivamente asistiendo a su cita entre el 26 y 30 de octubre de 2026. El ganador tendrá como fecha límite el 29 de octubre de 2026 para agendar su espacio, el cual quedará estrictamente sujeto a la disponibilidad de horarios de la sucursal.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Restricciones</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - La rifa está destinada para clientes que hayan asistido a cita al menos una vez para cualquier de nuestros servicios.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - El premio es personal e intransferible, con la única excepción de que el ganador de manera expresa solicite cederlo a favor de sus padres, hijos, cónyuge o concubino(a) debidamente acreditados. Queda estrictamente prohibida la transferencia a cualquier otro familiar (como hermanos, tíos o primos) o terceros.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Para conocer las restricciones complementarias consulte nuestros <a className="text-blue-600 underline hover:text-blue-800" href="https://lovelystudio.mx/terms-and-conditions">Términos y Condiciones</a>. Lo dispuesto en dicho documento complementa la presente cláusula y es de cumplimiento obligatorio.
                </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Descargo de responsabilidad</Typography>
            <Typography variant="body1">Aclaramos que este es un evento estrictamente privado y de carácter interno. La Lotería Nacional Mexicana se utiliza únicamente como un validador numérico de la suerte debido a su transparencia pública, por lo que dicha institución no avala, organiza, ni tiene responsabilidad alguna sobre el desarrollo de esta rifa o la entrega de sus premios.</Typography>
            <br />
            <br />
        </Box>
    </>
}

export default Page;