import { TYPEDOCUMENT } from "./typeDocument.enum";

export class Client {

    documentType = TYPEDOCUMENT;
    document = "";
    names = "";
    surnames = "";
    phone = "";
    fullAddress = "";


    constructor(documentType , documentPerson , names , surnames , phone , fullAddress) {
        this.documentType = documentType;
        this.document = documentPerson;
        this.names = names;
        this.surnames =surnames;
        this.phone = phone;
        this.fullAddress = fullAddress;
    }
}