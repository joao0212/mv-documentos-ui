export class Pessoa {
    id: number;
    nome: string;
    documentos = new Array<Documentos>()
    estado = new Estado();
}

export class Documentos {
    id: number;
    tipo: string;
    numero: string;
}

export class Estado {
    id: number;
    uf: string;
    nome: string;
}