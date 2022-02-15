
export const TiposBasicos = () => {

    const nombre: string= 'Francisco';
    const edad: number = 25;
    const estaActivo: boolean= false;
    const poderes: string[]= ['Velocidad', 'Fuerte', 'Cazador de vampiros']

    return (
        <>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'En linea' : 'Fuera de linea'}
            <br />
            {poderes.join(', ')}
        </>
    )
}





