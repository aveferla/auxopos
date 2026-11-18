// BLOQUE DE PREGUNTAS: EXAMEN 2023 (Orden SAN/1812/2022)
const EXAM_2023_DATA = [
  {
    id: "2023_01", exam: "2023", tema: "Tema 5 · Prevención de Riesgos Laborales",
    textAdap: "Según el art. 4 de la Ley 31/1995, de Prevención de Riesgos Laborales, se entenderá como «equipo de trabajo»:",
    optsAdap: { A: "Actividades o medidas adoptadas para evitar o disminuir riesgos.", B: "Cualquier equipo destinado a proteger la seguridad o salud individual.", C: "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo." },
    correctAdap: "C",
    textOrig: "Según el art. 4 de la Ley 31/1995, de Prevención de Riesgos Laborales, se entenderá como «equipo de trabajo»:",
    optsOrig: { a: "El conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo.", b: "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo.", c: "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo.", d: "Ninguna de las anteriores es correcta." },
    correctOrig: "c",
    norma: "Ley 31/1995, art. 4.6º."
  },
  {
    id: "2023_02", exam: "2023", tema: "Tema 22 · Documentación Clínica (Ley 41/2002)",
    textAdap: "¿Cómo define el art. 3 de la Ley 41/2002 la «documentación clínica»?",
    optsAdap: { A: "El conjunto de documentos e informaciones sobre la evolución clínica del paciente.", B: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial.", C: "Todo dato que permite adquirir conocimientos sobre el estado de salud de una persona." },
    correctAdap: "B",
    textOrig: "¿Cómo define el art. 3 de la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, la «documentación clínica»?",
    optsOrig: { a: "El conjunto de documentos que contienen los datos, valoraciones e informaciones de cualquier índole sobre la situación y la evolución clínica de un paciente a lo largo del proceso asistencial.", b: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial.", c: "Todo dato, cualquiera que sea su forma, clase o tipo, que permite adquirir o ampliar conocimientos sobre el estado físico y la salud de una persona.", d: "Ninguna es correcta." },
    correctOrig: "b",
    norma: "Ley 41/2002, art. 3."
  },
  {
    id: "2023_03", exam: "2023", tema: "Tema 7 · Estatuto Marco (Ley 55/2003)",
    textAdap: "Conforme al art. 9 de la Ley 55/2003 (Estatuto Marco, modificado por RDL 12/2022), ¿qué supuesto da lugar al nombramiento de personal estatutario interino?",
    optsAdap: { A: "Plaza vacante cuando no sea posible su cobertura por personal fijo (máx. 3 años).", B: "Programas temporales o exceso/acumulación de tareas.", C: "Ambas respuestas son correctas." },
    correctAdap: "C",
    textOrig: "Sobre el personal interino en el Estatuto Marco (Ley 55/2003, redacción actualizada):",
    optsOrig: { a: "La existencia de plaza vacante cuando no sea posible su cobertura por personal estatutario fijo, durante un plazo máximo de tres años.", b: "La ejecución de programas de carácter temporal o exceso/acumulación de tareas.", c: "Ambas respuestas son correctas.", d: "Ninguna es correcta." },
    correctOrig: "c",
    norma: "Ley 55/2003, art. 9 (RDL 12/2022)."
  },
  {
    id: "2023_04", exam: "2023", tema: "Tema 1 · Estructura Orgánica Consejería y SACYL",
    textAdap: "Conforme al organigrama vigente de Sacyl en 2026 (Decreto 42/2016 modificado por Decreto 20/2026), ¿cuál de los siguientes es un órgano directivo central de la Gerencia Regional de Salud?",
    optsAdap: { A: "La Dirección General de Cuidados y Humanización.", B: "La Dirección General de Salud Pública.", C: "La Secretaría General de la Consejería de Sanidad." },
    correctAdap: "A",
    textOrig: "Conforme a la estructura orgánica de la Gerencia Regional de Salud de Castilla y León:",
    optsOrig: { a: "La Dirección General de Cuidados y Humanización.", b: "La Dirección General de Salud Pública.", c: "La Secretaría General de la Consejería de Sanidad.", d: "Ninguna es correcta." },
    correctOrig: "a",
    norma: "Decreto 42/2016 modificado por Decreto 20/2026."
  }
];

// Añadimos las preguntas de 2023 al banco global de la aplicación
QUESTION_BANK.push(...EXAM_2023_DATA);