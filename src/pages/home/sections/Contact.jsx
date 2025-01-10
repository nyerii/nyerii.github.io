import React, { useState } from 'react';
import { Input, Checkbox, Typography, Textarea, Button, Alert } from "@material-tailwind/react";

export const Contact = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        organizacion: '',
        asunto: '',
        mensaje: '',
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success'); // 'success' o 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setAlertMessage('Debes aceptar las políticas de privacidad y los términos y condiciones.');
            setAlertType('error');
            return;
        }

        const mailtoLink = `mailto:contacto@tuempresa.com?subject=${encodeURIComponent(formData.asunto)}&body=${encodeURIComponent(
            `Nombre: ${formData.nombre} ${formData.apellidos}
Correo: ${formData.correo}
Teléfono: ${formData.telefono}
Organización: ${formData.organizacion}

Mensaje:
${formData.mensaje}`
        )}`;

        window.location.href = mailtoLink;
        setAlertMessage('El cliente de correo se abrió correctamente.');
        setAlertType('success');
    };

    return (
        <section className="py-14 bg-black-50 px-4">
            <div>
                <h1 className="text-3xl md:text-center font-inter text-black-950 font-bold">Contacta con nosotros</h1>
            </div>


            <div className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 gap-8 mt-8'>

                <div className='relative order-2 md:order-1 rounded-xl overflow-hidden'>
                    <iframe className='absolute w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2940.9084938068713!2d-2.451897049104979!3d36.83929503881507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1736506519297!5m2!1ses!2ses" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 order-1 md:order-2">
                    <div className="flex items-center md:flex-nowrap flex-wrap gap-4">
                        <Input required label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                        <Input required label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
                    </div>

                    <div className="flex items-center gap-4 md:flex-nowrap flex-wrap">
                        <Input required label="Correo electrónico" name="correo" type="mail" value={formData.correo} onChange={handleChange} />
                    </div>

                    <div className="flex items-center gap-4 md:flex-nowrap flex-wrap">
                        <Input label="Organización" name="organizacion" value={formData.organizacion} onChange={handleChange} />
                        <Input required label="Asunto" name="asunto" value={formData.asunto} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col">
                        <Textarea required label="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} />
                    </div>

                    <div className='flex items-center gap-4 md:flex-nowrap flex-wrap'>
                        <Checkbox label={
                                <Typography color="blue-gray" className="flex font-medium text-wrap">
                                    Acepto las{" "} <Typography as="a" href="/politica-de-privacidad/" color="blue" className="font-medium transition-colors hover:text-blue-700">&nbsp;Políticas de privacidad</Typography>.
                                </Typography>
                            } checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                        <div className="flex mt-1 flex-1">
                            <Button className='w-full' type="submit">Enviar</Button>
                        </div>
                    </div>

                    {alertMessage && (
                        <div className="lg:w-[60%] md:w-[70%] w-full mx-auto">
                            <Alert
                                color={alertType === 'success' ? 'green' : 'red'}
                                onClose={() => setAlertMessage('')} // Cierra la alerta al hacer clic en el botón de cierre
                            >
                                {alertMessage}
                            </Alert>
                        </div>
                    )}
                </form>
            </div>
        
        </section>
    );
};
