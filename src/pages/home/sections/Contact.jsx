import React, { useState } from 'react';
import axios from 'axios';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isChecked) {
            setAlertMessage('Debes aceptar las políticas de privacidad y los términos y condiciones.');
            setAlertType('error');
            return;
        }

        try {
            const response = await axios.post(
                'https://api.brevo.com/v3/contacts',
                {
                    email: formData.correo,
                    attributes: {
                        NOM: formData.nombre,
                        APE: formData.apellidos,
                        TEL: formData.telefono,
                        ORGAN: formData.organizacion,
                        ASUNTO: formData.asunto,
                        MENSAJE: formData.mensaje,
                    },
                    listIds: [5], // ID de la lista de contactos de Brevo
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': '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', // Tu clave API de Brevo
                    },
                }
            );
            setAlertMessage('Formulario enviado correctamente.');
            setAlertType('success');
            setFormData({ nombre: '', apellidos: '', correo: '', telefono: '', organizacion: '', asunto: '', mensaje: '' }); // Limpiar formulario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setAlertMessage('Ocurrió un error al enviar el formulario.');
            setAlertType('error');
        }
    };

    return (
        <section className="py-20 bg-black-50 px-4">
            <div>
                <h1 className="text-3xl md:text-center font-inter text-black-950 font-bold">Contacta con nosotros</h1>
            </div>

            {alertMessage && (
                <div className="my-4 mb-8 lg:w-[60%] md:w-[70%] w-full mx-auto">
                    <Alert color={alertType === 'success' ? 'green' : 'red'}>{alertMessage}</Alert>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 lg:w-[40%] md:w-[70%] w-full mx-auto">
                <div className="flex items-center md:flex-nowrap flex-wrap gap-4">
                    <Input required label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                    <Input required label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
                </div>

                <div className="flex items-center gap-4 md:flex-nowrap flex-wrap">
                    <Input required label="Correo electrónico" name="correo" type="mail" value={formData.correo} onChange={handleChange} />
                    <Input maxLength={16} placeholder="Número de Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$" />
                </div>

                <div className="flex items-center gap-4 md:flex-nowrap flex-wrap">
                    <Input label="Organización" name="organizacion" value={formData.organizacion} onChange={handleChange} />
                    <Input required label="Asunto" name="asunto" value={formData.asunto} onChange={handleChange} />
                </div>

                <div className="flex flex-col items-center">
                    <Textarea required label="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} />
                    <Checkbox label={
                        <Typography color="blue-gray" className="flex font-medium text-wrap">
                            Acepto las{" "} <Typography as="a" href="/politica-de-privacidad/" color="blue" className="font-medium transition-colors hover:text-blue-700">&nbsp;Políticas de privacidad</Typography>.
                        </Typography>
                    } checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
                    <div className="flex mt-1 justify-center">
                        <Button type="submit">Enviar</Button>
                    </div>
                </div>
            </form>
        </section>
    );
};
