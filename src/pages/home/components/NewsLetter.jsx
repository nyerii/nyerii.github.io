import React from "react";
import { Input, Button, Alert, Checkbox, Typography } from "@material-tailwind/react";
import axios from "axios";

export const NewsLetter = () => {
    const [email, setEmail] = React.useState("");
    const [isChecked, setIsChecked] = React.useState(false);
    const [alert, setAlert] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !isChecked) return;

        const data = {
            email: email,
            attributes: { FIRSTNAME: "Suscriptor" },
            listIds: [5],
        };

        try {
            const response = await axios.post(
                "https://api.brevo.com/v3/contacts",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": import.meta.env.VITE_BREVO_API_KEY,
                    },
                }
            );

            if (response.status === 201) {
                setAlert(
                    <Alert color="green" onClose={() => setAlert(null)}>
                        ¡Gracias por suscribirte! Revisa tu correo para más información.
                    </Alert>
                );
                setEmail("");
                setIsChecked(false); // Reiniciar checkbox después de suscribirse
            }

        } catch (error) {
            setAlert(
                <Alert color="red" onClose={() => setAlert(null)}>
                    Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.
                </Alert>
            );
        }
    };

    return (
        <div className="mt-4 block">
            <h1 className='text-3xl font-inter text-black-950 font-bold'>Actualidad</h1>
            <h2 className="text-xl font-inter text-black-600">Manténgase informado: Suscríbase para recibir actualizaciones exclusivas:</h2>
            <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
                <div className="relative flex w-full">
                    <Input type="email" label="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className="pr-32" required />
                    <Button type="submit" size="sm" color={email && isChecked ? "gray" : "blue-gray"} disabled={!email || !isChecked} className="!absolute right-1 top-1 rounded" >Suscribirse</Button>
                </div>
                <div>
                    <Checkbox label={ <Typography color="blue-gray" className="flex font-medium"> Acepto los{" "} 
                        <Typography as="a" href="/politica-de-privacidad/" color="blue" className="font-medium transition-colors hover:text-blue-700" > &nbsp;Política de Privacidad </Typography> . </Typography> } checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
                </div>
                {alert && <div className="mt-4 w-full">{alert}</div>}
            </form>
        </div>
    );
};
