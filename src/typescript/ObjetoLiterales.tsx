
interface Persona{
    nombre: string;
    apellidos: string;
    edad: number;
    dirección: Direccion;
}

interface Direccion{
    país: string;
    región: string;
}

export const ObjetoLiterales = () => {
const persona: Persona ={
    nombre: 'Francisco',
    apellidos: 'Monzon Gallegos',
    edad: 25,
    dirección: {
        país: 'Mexico',
        región: '239 Mz:41 lt:29'
    }
}

  return (
  <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
        {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
  </>
  );
};
//{JSON.stringify(persona)}