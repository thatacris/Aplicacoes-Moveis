// ======================================
// Exercício 1: Calcular IMC
// ======================================
export function calcularIMC(
  peso: number,
  altura: number
): number {
  return peso / (altura * altura);
}

// ======================================
// Exercício 2: Formatar Nome Completo
// ======================================
export function formatarNome(
  nome: string,
  sobrenome?: string
): string {
  return sobrenome ? `${nome} ${sobrenome}` : nome;
}

// ======================================
// Exercício 3: Verificar Maioridade
// ======================================
export function verificarMaioridade(
  idade: number
): boolean {
  return idade >= 18;
}

// ======================================
// Exercício 4: Interface Produto
// ======================================
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
}

export function formatarProduto(produto: Produto): string {
  return `Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(
    2
  )}${produto.descricao ? ` | Descrição: ${produto.descricao}` : ""}`;
}

// ======================================
// Exercício 5: Filtrar Números Pares
// ======================================
export function filtrarPares(
  numeros: number[]
): number[] {
  return numeros.filter((numero) => numero % 2 === 0);
}

// ======================================
// Exercício 6: Converter Temperatura
// ======================================
export type UnidadeTemperatura = "celsius" | "fahrenheit";

export function converterTemperatura(
  valor: number,
  unidade: UnidadeTemperatura
): number {
  if (unidade === "celsius") {
    // Celsius -> Fahrenheit
    return (valor * 9) / 5 + 32;
  } else {
    // Fahrenheit -> Celsius
    return ((valor - 32) * 5) / 9;
  }
}

// ======================================
// Exercício 7: Contar Ocorrências (Genérico)
// ======================================
export function contarOcorrencias<T>(
  array: T[],
  elemento: T
): number {
  return array.filter((item) => item === elemento).length;
}

// ======================================
// Exercício 8: Interface Aluno + Média
// ======================================
export interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

export function calcularMedia(aluno: Aluno): number {
  if (aluno.notas.length === 0) return 0;

  const soma = aluno.notas.reduce(
    (acc, nota) => acc + nota,
    0
  );

  return soma / aluno.notas.length;
}

// ======================================
// Exercício 9: ApiResponse + buscarUsuarios
// ======================================
export type ApiResponse<T> = {
  sucesso: boolean;
  dados: T | null;
  erro: string | null;
};

export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export function buscarUsuarios(): ApiResponse<Usuario[]> {
  const usuarios: Usuario[] = [
    { id: 1, nome: "João Silva", email: "joao@email.com" },
    { id: 2, nome: "Maria Souza", email: "maria@email.com" },
  ];

  return {
    sucesso: true,
    dados: usuarios,
    erro: null,
  };
}

