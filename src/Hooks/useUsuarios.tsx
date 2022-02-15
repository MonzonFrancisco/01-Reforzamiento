import { useEffect, useRef, useState } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { resResApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

        useEffect (() => {
        //Llamando la API
        cargarUsuarios();
        }, []);

        const cargarUsuarios = async () =>{
        const resp = await resResApi.get<ReqResListado>('/users',{
            params:{
            page: paginaRef.current
            }
        })
        if (resp.data.data.length>0) {
            setUsuarios(resp.data.data);
        }
        else{
            paginaRef.current --;
            alert('No hay mas registro :c');
        }
        }

        const paginaSiguiente = () => {
            paginaRef.current ++;
            cargarUsuarios();
        }

        const paginaAnterior = () =>{
            if (paginaRef.current > 1) {
                paginaRef.current --;
                cargarUsuarios();
            }
        }

        return{
            usuarios,
            paginaAnterior,
            paginaSiguiente,
          }
};