import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required("El nombre no puede estar vacío"),
    apellido: yup.string().required("El apellido no puede estar vacío"),
    telefono: yup.string().required("El teléfono no puede estar vacío"),
    email: yup.string().email("Formato de email incorrecto").required("El email es requerido"),
    edad: yup.number().integer("Debes ingresar un número entero").min(18, "La edad mínima debe ser 18").required("La edad es requerida"),
    pass: yup.string().min(4, "Debe contener al menos 4 caracteres").max(10, "Máximo 10 caracteres").required("La contraseña es requerida"),
    confirmPass: yup.string().oneOf([yup.ref("pass"), null], "La contraseña debe coincidir"),
});

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        localStorage.setItem("userRegistered", JSON.stringify(data));

        console.log("Usuario registrado:", data);
        navigate("/PantallaPrincipal");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nombre(s)" {...register("name")} />
                <p>{errors.name?.message}</p>

                <input type="text" placeholder="Apellidos" {...register("apellido")} />
                <p>{errors.apellido?.message}</p>

                <input type="number" placeholder="Edad" {...register("edad")} />
                <p>{errors.edad?.message}</p>

                <input type="text" placeholder="Teléfono" {...register("telefono")} />
                <p>{errors.telefono?.message}</p>

                <input type="email" placeholder="Email" {...register("email")} />
                <p>{errors.email?.message}</p>

                <input type="password" placeholder="Ingresa la contraseña" {...register("pass")} />
                <p>{errors.pass?.message}</p>

                <input type="password" placeholder="Debe coincidir con la contraseña" {...register("confirmPass")} />
                <p>{errors.confirmPass?.message}</p>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
