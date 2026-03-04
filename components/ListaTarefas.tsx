import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

export interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
}

export default function ListaTarefas({
  tarefas,
  onToggle,
}: ListaTarefasProps) {
  const [filtro, setFiltro] =
    useState<"todas" | "pendentes" | "concluidas">("todas");

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <View>
      {/* Botões de Filtro */}
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <TouchableOpacity onPress={() => setFiltro("todas")}>
          <Text style={{ marginRight: 10 }}>Todas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFiltro("pendentes")}>
          <Text style={{ marginRight: 10 }}>Pendentes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFiltro("concluidas")}>
          <Text>Concluídas</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tarefas */}
      {tarefasFiltradas.map((tarefa) => (
        <TouchableOpacity
          key={tarefa.id}
          onPress={() => onToggle(tarefa.id)}
        >
          <Text
            style={{
              textDecorationLine: tarefa.concluida
                ? "line-through"
                : "none",
              marginBottom: 5,
            }}
          >
            {tarefa.titulo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
