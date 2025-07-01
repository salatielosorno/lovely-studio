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
                    - Solo se permite 1 acompañante para el cliente que recibirá el servicio en el momento de la cita. En ningún caso podrás ser un menor de edad menor a 12 años.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Cada área está destinada para la prestación de uno de los servicios que se ofrecen. Por lo cuál el acompañante solo podrá ocupar el área designada.
                </ListItem>
            </List>
            <Typography variant="body1">Nos reservamos el derecho de admisión y suspención del servicio ante la violación de cualquiera de los puntos arriba listados.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Agendamiento</Typography>
            <br />
            <Typography variant="body1">Con respecto al agendamiento ya sea in-situ, por teléfono o mediante nuestra página web oficial, el cliente se deberá apegar a lo siguiente:</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - En caso de no poder asistir a su cita programada. El cliente deberá avisar con al menos 2 hrs de anticipación sobre la cancelación de la misma. En caso de no avisar quedará por entendido la asistencia en la hora y día acordado.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - El cliente deberá prestar atención y sujetarse a los puntos contenidos dentro de la sección <p style={{ fontWeight: 'bold', display: 'inline-block' }}>Atención in-situ</p> en el momento de asistir a su cita.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - La programación de citas solo puede realizarse hasta 7 días en el futuro a partir de la fecha en que sea realizada. Aplica para aquellas citas realizadas in-situ o mediante la página web oficial.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - En algunas ocasiones se solicitará un adelanto del 50% sobre el monto total del servicio a realizar. En caso de no ser explícitamente solicitado al momento del agendamiento, quedará por entendido que el servicio en cuestión no entra dentro de la restricción de este punto.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Cada área está destinada para la prestación de uno de los servicios que se ofrecen. Por lo cuál el acompañante solo podrá ocupar el área designada.
                </ListItem>
            </List>
            <Typography variant="body1">Nos reservamos el derecho de admisión y suspensión del servicio ante la violación de cualquiera de los puntos arriba listados.</Typography>
            <br />
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">Garantía</Typography>
            <br />
            <Typography variant="body1">En caso de presentar algún defecto o desgaste durante el periodo siguiente al servicio deberá informar por teléfono y asistir al establecimiento para la valoración de nuestro personal técnico. En caso de aplicar, se realizará la corrección usando materiales de igual presentación y calidad en el entendido que es un defecto no propio del desgaste natural que pudiera ser la causa.</Typography>
            <br />
            <Typography variant="body1">Los pasos para hacer válida la garantía serían los siguientes:</Typography>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                    - Notificar por teléfono acerca del problema presentado lo más pronto posible para evitar perder la garantía sobre servicios fuera de tiempo.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Enviar material adjunto al reporte por medio de whatsapp. Estas pueden ser fotografías en donde muestre claramente el problema presentado.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    - Una vez que se confirme la posibilidad de hacer válida la garantía. Deberá asistir al establecimiento para el valoramiento por parte del personal técnico y de esta forma poder definir el curso de acción para solucionar su problema.
                </ListItem>
            </List>
            <br />
        </Box>
    </>
}

export default Page;