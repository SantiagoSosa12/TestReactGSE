import React, { useRef } from 'react';
import { Client } from '../models/client.class';
import { TYPEDOCUMENT } from '../models/typeDocument.enum';
import { fetchPetition } from '../petitions/sendData';

const RegisterClient = () => {

    const typeDocumentPerson = useRef(TYPEDOCUMENT.CC);
    const documentPerson = useRef('');
    const names = useRef('');
    const surnames = useRef('');
    const phone = useRef('');
    const fullAddress = useRef('');

    

    const sendForm = (e) => {
        e.preventDefault();
        const clientToSend = new Client(
            typeDocumentPerson.current.value,
            documentPerson.current.value,
            names.current.value,
            surnames.current.value,
            phone.current.value,
            fullAddress.current.value,
        );
        console.log(JSON.stringify(clientToSend));
        fetchPetition(clientToSend);
    }

    return (
        <div>
        <h1>Registro Cliente</h1>
        <br/>
        <form onSubmit={sendForm} className='d-flex justify-content-center aling-items-center mb4'>
            <div className='form-outline flex-fill'>
                <label htmlFor='typeDocumentPerson' className='sr-only'>Tipo Documento</label> <br/>
                <select ref={typeDocumentPerson} defaultValue={TYPEDOCUMENT.CITIZENID} id='typeDocumentPerson'>
                    <option value={TYPEDOCUMENT.CITIZENID}> Cedula de ciudadania </option>
                    <option value={TYPEDOCUMENT.PASSPORT}> Pasaporte </option>
                    <option value={TYPEDOCUMENT.TAXIDENTIFICATIONNUMBER}> Numero Identificacion Tributaria </option>
                </select> 
                <br/>
                <label htmlFor='documentPerson' className='sr-only'>Documento</label>
                <br/>    
                <input ref={documentPerson} id='documentPerson' type='text' minLength={4} maxLength={10}
                className='form-control from-control-lg' required autoFocus/>
                <label htmlFor='names' className='sr-only'>Nombres</label>
                <br/>
                <input ref={names} id='names' type='text' minLength={2} maxLength={35}
                className='form-control from-control-lg' required autoFocus/>
                <label htmlFor='surnames' className='sr-only'>Apellidos</label>
                <br/>
                <input ref={surnames} id='surnames' type='text' minLength={2} maxLength={35}
                className='form-control from-control-lg' required autoFocus/>
                <label htmlFor='phone' className='sr-only'>Telefono</label>
                <br/>
                <input ref={phone} id='phone' type='tel' placeholder='10 digitos numericos'
                className='form-control from-control-lg' required pattern="[0-9]{10}" autoFocus/>
                <label htmlFor='fullAddress' className='sr-only'>Direccion</label>
                <br/>
                <input ref={fullAddress} id='fullAddress' type='text' minLength={5} maxLength={40}
                className='form-control from-control-lg' required autoFocus/>
                <br/>
            <button type='submit' className='btn btn-success btn-lg ms-2'> Registrar </button>
            </div>
        </form>
        </div>
    );
};


RegisterClient.propTypes = {

};


export default RegisterClient;
