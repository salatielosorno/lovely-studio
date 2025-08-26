'use client'
import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";

const Page = () => {
    return <>
        <Box className="text-white bg-lsblack pt-5 pb-5">
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" paragraph>
                            Términos y condiciones
                        </Typography>
                        <Typography variant="body1">Última actualización 26 de agosto de 2025 | LovelyStudio</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <br />
        <Box className="mx-2 md:container">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Atención in-situ</Typography>
            <br />
            <Typography variant="body1">En Lovely nos esforzamos por brindarle el mejor servicio en la región. Es por ello que creemos fielmente en la necesidad de establecer una lista de lo que no se podrá considerar dentro de nuestros estándares.</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se permite el acceso de ningún tipo de alimento o bebida.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se permite el consumo de alimentos ni bebidas dentro de las instalaciones.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se permite el acceso con niños. Salvo que el servicio sea proporcionado al menor en cuestión y se encuentre en compañía de un adulto.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Solo se permite un acompañante para el cliente que recibirá el servicio en el momento de la cita. En ningún caso podrá ser un menor de edad menor a 12 años.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Cada área está destinada para la prestación de uno de los servicios que se ofrecen. Por lo cuál el acompañante solo podrá ocupar el área designada.
                </ListItem>
            </List>
            <Typography variant="body1">Nos reservamos el derecho de admisión y suspensión del servicio ante la violación de cualquiera de los puntos arriba listados.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Agendamiento</Typography>
            <br />
            <Typography variant="body1">Con respecto al agendamiento ya sea in-situ, por teléfono o mediante nuestra página web oficial, el cliente se deberá apegar a lo siguiente:</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - En caso de no poder asistir a su cita programada. El cliente deberá avisar con al menos 2 hrs de anticipación sobre la cancelación de la misma. En caso de no avisar quedará por entendido la asistencia en la hora y día acordado.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - El cliente deberá prestar atención y sujetarse a los puntos contenidos dentro de la sección <span style={{ fontWeight: 'bold' }}>Atención in-situ</span> en el momento de asistir a su cita.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - La programación de citas solo puede realizarse hasta 7 días en el futuro a partir de la fecha en que sea realizada. Aplica para aquellas citas realizadas in-situ, teléfono o mediante la página web oficial.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Todos los agendamientos deberán ser realizados con 24 hrs de anticipación a la fecha y hora solicitadas.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - El tiempo de tolerancia para presentarse a su cita será de 15 minutos a partir de la fecha y hora pactada. En caso de superar este límite, nos reservamos el derecho a negarle el servicio fuera del horario establecido.
                </ListItem>
            </List>
            <Typography variant="body1">Anticipos</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - Para citas de más de un servicio cuyo monto supere los $500.00 MXN (quinientos pesos mexicanos con cero centavos), se solicitará un <span style={{ fontWeight: 'bold' }}>anticipo del 50%</span> sobre el valor total de los servicios.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - En caso de que no se solicite un adelanto explícitamente al momento del agendamiento, quedará por entendido que el servicio en cuestión no entra dentro de la restricción del punto anterior.
                </ListItem>
            </List>
            <Typography variant="body1">Restricciones en servicios</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se realiza retoque de uñas cuando la aplicación original no haya sido realizada en nuestras instalaciones y/o por personal de Lovely Studio.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se permite el uso de productos externos a los que se encuentran en nuestras instalaciones. Si el producto que se utiliza no es parte de los productos que Lovely Studio posee y son parte de su inventario, no se hará válida garantía alguna sobre ningún servicio sin excepción. Cualquier daño sufrido por el cliente será responsabilidad del mismo desde el momento que autoriza su aplicación y uso.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - No se atenderá a clientes con hongos presentes en manos y/o pies para servicio.
                </ListItem>
            </List>
            <br />
            <Typography variant="body1">Nos reservamos el derecho de admisión y suspensión del servicio ante la violación de cualquiera de los puntos arriba listados.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Garantía</Typography>
            <br />
            <Typography variant="body1">En caso de presentar algún defecto o desgaste dentro de las primeras 24 horas posteriores al servicio deberá informar por teléfono y asistir al establecimiento para la valoración de nuestro personal técnico.</Typography>
            <br />
            <Typography>En caso de aplicar la garantía, se aclara lo siguiente:</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - Se utilizará material de la misma calidad.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Para la corrección en uñas se realizará el mismo diseño.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Se utilizarán los mismos colores que el servicio original.
                </ListItem>
            </List>
            <Typography variant="body1">Todo lo anterior en el entendido que se debe a un defecto no propio del desgaste natural que pudiera ser la causa.</Typography>
            <br/>
            <Typography variant="body1">Los pasos para hacer válida la garantía serían los siguientes:</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - Notificar por teléfono acerca del problema presentado <span style={{ fontWeight: 'bold' }}>dentro de las primeras 24 horas posteriores al servicio</span> para evitar perder la garantía.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Enviar material adjunto al reporte por medio de whatsapp. Estas pueden ser fotografías en donde muestre claramente el problema presentado.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Una vez que se confirme la posibilidad de hacer válida la garantía. Deberá asistir al establecimiento para el valoramiento por parte del personal técnico y de esta forma poder definir el curso de acción para solucionar su problema.
                </ListItem>
            </List>
            <Typography variant="body1">No se da garantía sobre trabajos que no se hayan realizado por el personal de Lovely Studio.</Typography>
            <br />
            <Typography variant="body1">Nos reservamos el derecho de cambiar, modificar o eliminar el contenido del Sitio y la presente sección de Términos y condiciones en cualquier momento o por cualquier motivo a nuestra entera discreción sin previo aviso.</Typography>
            <br />
            <br />
        </Box>
    </>
}

export default Page;