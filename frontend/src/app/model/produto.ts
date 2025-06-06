export class Produto {
    id!: number;
    nome!: string;
    preco!: number;
    imagem!: string;
    origem!: string;
    descricao!: string;
    peso!: string;
    perfilSensorial!: {
      variedade: string;
      processo: string;
      altitude: string;
      torra: string;
      corpo: string;
      acidez: string;
      docura: string;
      idealPara: string;
    };
}
