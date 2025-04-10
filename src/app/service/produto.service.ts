import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produto[] = [
    {
      id: 1,
      nome: 'Reserva Caramelo',
      preco: 48.00,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/ReservaCaramelo-removebg-preview.png?updatedAt=1744080352592',
      origem: 'Cerrado Mineiro - MG',
      descricao: 'Notas de toffee e castanhas. Corpo médio, finalização doce',
      peso: '250g',
      perfilSensorial: {
        variedade: '100% Arábica',
        processo: 'Natural',
        altitude: '1.100m',
        torra: 'Média',
        corpo: 'Médio',
        acidez: 'Baixa',
        docura: 'Alta',
        idealPara: 'Filtrado e prensa francesa'
      }
    },

    {
      id: 2,
      nome: 'Buldogue Bourbon',
      preco: 52.00,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/BuldogueBourbon-removebg-preview.png?updatedAt=1744080352995',
      origem: 'Sul de Minas – MG',
      descricao: 'Bourbon amarelo com acidez cítrica e aroma floral',
      peso: '250g',
      perfilSensorial: {
        variedade: 'Bourbon Amarelo',
        processo: 'Natural',
        altitude: '1.300m',
        torra: 'Média',
        corpo: 'Médio',
        acidez: 'Alta',
        docura: 'Média',
        idealPara: 'V60, Hario, métodos filtrados'
      }
    },

    {
      id: 3,
      nome: 'Cerrado Pastor',
      preco: 52,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/CerradoPastor-removebg-preview.png?updatedAt=1744080353145',
      origem: 'Cerrado Mineiro – MG',
      descricao: 'Notas de cacau e amêndoas, acidez equilibrada e corpo marcante',
      peso: '250g',
      perfilSensorial: {
        variedade: 'Arábica',
        processo: 'Natural',
        altitude: '1.200m',
        torra: 'Média-escura',
        corpo: 'Alto',
        acidez: 'Média',
        docura: 'Média',
        idealPara: 'Espresso'
      }
    },

    {
      id: 4,
      nome: 'Golden Sul de Minas',
      preco: 45.99,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/GoldenSulDeMinas-removebg-preview.png?updatedAt=1744080352452',
      origem: 'Sul de Minas – MG',
      descricao: 'Notas de mel, corpo suave e doçura natural',
      peso: '250g',
      perfilSensorial: {
        variedade: 'Arábica',
        processo: 'Natural',
        altitude: '1.150m',
        torra: 'Clara',
        corpo: 'Suave',
        acidez: 'Baixa',
        docura: 'Alta',
        idealPara: 'Coado'
      }
    },

    {
      id: 5,
      nome: 'Mogiana Labrador',
      preco: 45.99,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/MogianaLabrador-removebg-preview.png?updatedAt=1744080352857',
      origem: 'Alta Mogiana – SP',
      descricao: ' Aroma achocolatado, corpo cremoso e toque de frutas secas',
      peso: '250g',
      perfilSensorial: {
        variedade: 'Arábica',
        processo: 'Natural',
        altitude: '1.100m',
        torra: 'Média',
        corpo: 'Alto',
        acidez: 'Média',
        docura: 'Média',
        idealPara: 'Espresso e coado'
      }
    },

    {
      id: 6,
      nome: 'Terrier da Mantiqueira',
      preco: 50.00,
      imagem: 'https://ik.imagekit.io/liaMatsubara/Cafe%20Late/TerrierDaMantiqueira-removebg-preview.png?updatedAt=1744080352732',
      origem: 'Mantiqueira de Minas – MG',
      descricao: 'Blend frutado com notas de frutas vermelhas e chocolate ao leite',
      peso: '250g',
      perfilSensorial: {
        variedade: 'Arábica',
        processo: 'Natural',
        altitude: '1.200m',
        torra: 'Média-clara',
        corpo: 'Médio',
        acidez: 'Média-alta',
        docura: 'Alta',
        idealPara: 'Ideal para: Aeropress, métodos filtrados'
      }
    },
  ];

  constructor() { }

  public listar(): Produto[] {
    return this.produtos;
  }

  public buscarPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
