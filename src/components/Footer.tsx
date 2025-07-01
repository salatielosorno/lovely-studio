import { Link } from "@mui/material"

const Footer = () => (
    <>
        <div className="chat-support__icons">
            <a
                className="chat-support__icon block mb-2"
                href="https://api.whatsapp.com/send/?phone=5212251107907"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/images/whats-icon.png" alt="whats-app-icon" />
            </a>
            {/* <div className="chat-support__icon"></div> */}
        </div>
        <div className="md:container md:mx-auto text-center text-[12px] pt-10">
            <Link underline="always" href="/terms-and-conditions">Términos y condiciones</Link>
        </div>
        <div className="md:container md:mx-auto text-center text-[12px] pt-2 pb-5">
            <p>Todos los derechos reservados 2025 - Lovely Studio</p>
        </div>
    </>
)

export { Footer }