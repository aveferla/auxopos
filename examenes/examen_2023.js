// EXAMEN OFICIAL 2023 - AUXILIAR ADMINISTRATIVO SACYL (BLOQUE COMPLETO 1: Preguntas 1 a 60)
const EXAM_2023_DATA = [
  {
    id: "2023_01", exam: "2023", tema: "Tema 5 · Prevención de Riesgos Laborales",
    textAdap: "Según el art. 4 de la Ley 31/1995, se entenderá como «equipo de trabajo»:",
    optsAdap: { A: "Actividades o medidas adoptadas para evitar o disminuir riesgos.", B: "Cualquier equipo destinado a proteger la seguridad o salud individual.", C: "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo." },
    correctAdap: "C",
    textOrig: "Según el art. 4 de la Ley 31/1995, de Prevención de Riesgos Laborales, se entenderá como «equipo de trabajo»:",
    optsOrig: { a: "El conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo.", b: "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo.", c: "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo.", d: "Ninguna de las anteriores es correcta." },
    correctOrig: "c",
    norma: "Ley 31/1995, art. 4.6º."
  },
  {
    id: "2023_02", exam: "2023", tema: "Tema 22 · Documentación Clínica",
    textAdap: "¿Cómo define el art. 3 de la Ley 41/2002 la «documentación clínica»?",
    optsAdap: { A: "El conjunto de documentos e informaciones sobre la evolución clínica.", B: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial.", C: "Todo dato que permite adquirir conocimientos sobre el estado de salud." },
    correctAdap: "B",
    textOrig: "¿Cómo define el art. 3, de la Ley 41/2002, de 14 de noviembre, la documentación clínica?:",
    optsOrig: { a: "El conjunto de documentos que contienen los datos, valoraciones e informaciones de cualquier índole sobre la situación y la evolución clínica de un paciente a lo largo del proceso asistencial.", b: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial.", c: "Todo dato, cualquiera que sea su forma, clase o tipo, que permite adquirir o ampliar conocimientos sobre el estado físico y la salud de una persona.", d: "Todas las respuestas son correctas." },
    correctOrig: "b",
    norma: "Ley 41/2002, art. 3."
  },
  {
    id: "2023_03", exam: "2023", tema: "Tema 7 · Estatuto Jurídico del Personal Estatutario (Ley 2/2007)",
    textAdap: "Según el art. 17 de la Ley 2/2007, el personal estatutario, atendiendo a la función desarrollada, se clasifica en:",
    optsAdap: { A: "Personal estatutario sanitario y personal estatutario de gestión y servicios.", B: "Personal estatutario fijo y personal estatutario temporal.", C: "Personal de formación universitaria y personal de formación profesional." },
    correctAdap: "A",
    textOrig: "Según el art. 17 de la Ley 2/2007, de 7 de marzo, del Estatuto Jurídico del Personal Estatutario del Servicio de Salud de Castilla y León, el personal estatutario, atendiendo a la función desarrollada, se clasifica en:",
    optsOrig: { a: "Personal estatutario sanitario y personal estatutario de gestión y servicios.", b: "Personal estatutario fijo y personal estatutario temporal.", c: "Personal de formación universitaria y personal de formación profesional.", d: "Todas las respuestas son correctas." },
    correctOrig: "a",
    norma: "Ley 2/2007 (Castilla y León), art. 17."
  },
  {
    id: "2023_04", exam: "2023", tema: "Tema 1 · Organización Sanitaria de Castilla y León",
    textAdap: "Conforme al art. 32.bis de la Ley 8/2010, es función del Director económico, presupuestario y financiero:",
    optsAdap: { A: "Aprobar los planes, programas y previsión de inversiones.", B: "La tramitación de expedientes de contratación pública.", C: "Todas las respuestas anteriores son correctas." },
    correctAdap: "C",
    textOrig: "Conforme establece el art. 32.bis de la Ley 8/2010, de Ordenación del Sistema de Salud de Castilla y León, es función del Director económico, presupuestario y financiero:",
    optsOrig: { a: "Aprobar los distintos planes y programas de actuación y necesidades de los centros y servicios, incluyendo la previsión de las inversiones precisas y la ejecución de los citados planes y programas.", b: "La tramitación de los expedientes de contratación pública.", c: "Aprobar las tarifas por la concertación de servicios, así como su modificación y revisión.", d: "Todas son correctas." },
    correctOrig: "d",
    norma: "Ley 8/2010, art. 32.bis."
  },
  {
    id: "2023_05", exam: "2023", tema: "Tema 19 · Seguridad Social",
    textAdap: "Según el art. 195 del RDL 8/2015, en incapacidad permanente parcial no debida a accidente o enfermedad profesional, el periodo de cotización exigible es:",
    optsAdap: { A: "De 1.800 días en los 10 años anteriores a la extinción de la IT.", B: "De 1.860 días en los 10 años anteriores.", C: "De 1.800 días en los 5 años anteriores." },
    correctAdap: "A",
    textOrig: "Según el art. 195 del texto refundido de la Ley General de la Seguridad Social, aprobado por el RDL 8/2015, en el caso de incapacidad permanente parcial que no sea debida a accidente, sea o no laboral, o a enfermedad profesional, el periodo mínimo de cotización exigible para tener derecho a la prestación será:",
    optsOrig: { a: "De mil ochocientos días, que han de estar comprendidos en los diez años inmediatamente anteriores a la fecha en la que se haya extinguido la incapacidad temporal de la que se derive la incapacidad permanente.", b: "De mil ochocientos sesenta días, que han de estar comprendidos en los diez años inmediatamente anteriores a la fecha en la que se haya extinguido la incapacidad temporal de la que se derive la incapacidad permanente.", c: "De mil ochocientos días, que han de estar comprendidos en los cinco años inmediatamente anteriores a la fecha en la que se haya extinguido la incapacidad temporal de la que se derive la incapacidad permanente.", d: "De dos mil ochocientos días, que han de estar comprendidos en los diez años inmediatamente anteriores a la fecha en la que se haya extinguido la incapacidad." },
    correctOrig: "a",
    norma: "RDL 8/2015, art. 195."
  },
  {
    id: "2023_06", exam: "2023", tema: "Tema 5 · Prevención de Riesgos Laborales",
    textAdap: "Conforme al art. 35.2 de la Ley 31/1995, en empresas de 31 a 49 trabajadores:",
    optsAdap: { A: "El Delegado de Prevención será el Delegado de Personal.", B: "Habrá un Delegado de Prevención elegido por y entre los Delegados de Personal.", C: "Habrá dos Delegados de Prevención." },
    correctAdap: "B",
    textOrig: "Conforme establece el art. 35.2 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, en las empresas de treinta y uno a cuarenta y nueve trabajadores:",
    optsOrig: { a: "El Delegado de Prevención será el Delegado de Personal.", b: "Habrá un Delegado de Prevención que será elegido por y entre los Delegados de Personal.", c: "Habrá dos Delegados de Prevención que serán elegidos por y entre los Delegados de Personal.", d: "No habrá Delegados de Prevención." },
    correctOrig: "b",
    norma: "Ley 31/1995, art. 35.2."
  },
  {
    id: "2023_07", exam: "2023", tema: "Tema 7 · Estatuto Marco (Ley 55/2003)",
    textAdap: "Según el art. 9 del RDL 12/2022 (Estatuto Marco), ¿qué nombramientos de personal estatutario temporal serán de interinidad?",
    optsAdap: { A: "Plaza vacante durante un plazo máximo de tres años.", B: "Ejecución de programas de carácter temporal.", C: "Exceso o acumulación de tareas." },
    correctAdap: "A",
    textOrig: "Según establece el art. 9 del Real Decreto-ley 12/2022, de 5 de julio, por el que se modifica la Ley 55/2003, ¿qué nombramientos de personal estatutario temporal serán de interinidad?:",
    optsOrig: { a: "Los realizados para la ejecución de programas de carácter temporal, que especificarán sus fechas de inicio y finalización.", b: "Los realizados ante la existencia de una vacante, durante un plazo máximo de tres años.", c: "Los realizados por exceso o acumulación de tareas, que especificarán fecha inicio y fecha fin, y por un plazo máximo de 9 meses, dentro de un periodo de 18 meses.", d: "Las tres respuestas son correctas." },
    correctOrig: "b",
    norma: "Ley 55/2003, art. 9."
  },
  {
    id: "2023_08", exam: "2023", tema: "Tema 7 · Ley 2/2007 de Sacyl",
    textAdap: "Según el art. 32 de la Ley 2/2007 de Sacyl, ¿qué autoridad dicta la Orden de nombramiento de los candidatos que superan un proceso selectivo fijo?",
    optsAdap: { A: "El Tribunal Calificador.", B: "El Gerente Regional de Salud.", C: "El Consejero competente en materia de sanidad." },
    correctAdap: "C",
    textOrig: "Según el art. 32 de la Ley 2/2007, del Estatuto Jurídico del Personal Estatutario del Servicio de Salud de Castilla y León ¿qué autoridad dicta la Orden por la que se acuerda el nombramiento de los candidatos que han superado un proceso selectivo de personal estatutario fijo?:",
    optsOrig: { a: "El Tribunal Calificador.", b: "El Gerente Regional de Salud.", c: "El Consejero competente en materia de sanidad.", d: "Ninguna respuesta es correcta." },
    correctOrig: "c",
    norma: "Ley 2/2007, art. 32."
  },
  {
    id: "2023_09", exam: "2023", tema: "Tema 7 · TREBEP",
    textAdap: "Quienes se encuentren en situación de servicios especiales percibirán, según el art. 87.2 del TREBEP:",
    optsAdap: { A: "Las retribuciones como funcionarios de carrera sin trienios.", B: "Las retribuciones del puesto o cargo desempeñado con derecho a trienios.", C: "Las retribuciones del puesto o cargo sin derecho a trienios." },
    correctAdap: "B",
    textOrig: "Quienes se encuentren en situación de servicios especiales percibirán, según establece el art. 87.2 del Real Decreto Legislativo 5/2015, de 30 de octubre, Texto Refundido de la Ley del Estatuto Básico del Empleado Público:",
    optsOrig: { a: "Las retribuciones que les correspondan como funcionarios de carrera y no las del puesto o cargo que desempeñen, sin derecho a percibir los trienios que tengan reconocidos en cada momento.", b: "Las retribuciones del puesto o cargo que desempeñen y no las que les correspondan como funcionarios de carrera, sin perjuicio del derecho a percibir los trienios que tengan reconocidos en cada momento.", c: "Las retribuciones que les correspondan como funcionarios de carrera y no las del puesto o cargo que desempeñen, sin perjuicio del derecho a percibir los trienios que tengan reconocidos en cada momento.", d: "Las retribuciones del puesto o cargo que desempeñen y no las que les correspondan como funcionarios de carrera, sin derecho a percibir los trienios que tengan reconocidos en cada momento." },
    correctOrig: "b",
    norma: "TREBEP, art. 87.2."
  },
  {
    id: "2023_10", exam: "2023", tema: "Tema 7 · Ley 2/2007 de Sacyl",
    textAdap: "El art. 27 de la Ley 2/2007 establece que la selección del personal estatutario fijo se realizará con carácter general mediante:",
    optsAdap: { A: "Oposición.", B: "Concurso.", C: "Concurso-oposición." },
    correctAdap: "C",
    textOrig: "El art. 27 de la Ley 2/2007, de 7 de marzo, del Estatuto Jurídico del Personal Estatutario del Servicio de Salud de Castilla y León, establece que la selección del personal estatutario fijo se realizará con carácter general a través del sistema de:",
    optsOrig: { a: "Oposición.", b: "Concurso.", c: "Estabilización.", d: "Concurso-oposición." },
    correctOrig: "d",
    norma: "Ley 2/2007, art. 27."
  },
  {
    id: "2023_11", exam: "2023", tema: "Tema 7 · TREBEP",
    textAdap: "La ejecución de la oferta de empleo público deberá desarrollarse dentro del plazo improrrogable de:",
    optsAdap: { A: "1 año", B: "2 años", C: "3 años" },
    correctAdap: "C",
    textOrig: "La ejecución de la oferta de empleo público o instrumento similar deberá desarrollarse, conforme establece el art. 70.1 del Real Decreto Legislativo 5/2015, de 30 de octubre, Texto Refundido de la Ley del Estatuto Básico del Empleado Público, dentro del plazo improrrogable de:",
    optsOrig: { a: "1 año", b: "2 años", c: "3 años", d: "4 años" },
    correctOrig: "c",
    norma: "TREBEP, art. 70.1."
  },
  {
    id: "2023_12", exam: "2023", tema: "Tema 7 · Personal Estatutario de Sacyl",
    textAdap: "El procedimiento de valoración del puesto de trabajo por causa de salud podrá iniciarse:",
    optsAdap: { A: "A instancia del superior jerárquico.", B: "De oficio por la Gerencia.", C: "A instancia del trabajador o de oficio por los órganos competentes según normativa." },
    correctAdap: "C",
    textOrig: "Conforme la normativa en vigor para la Consejería de Sanidad de Castilla y León, el procedimiento de valoración del puesto de trabajo por causa de salud podrá iniciarse:",
    optsOrig: { a: "A instancia del superior jerárquico del trabajador.", b: "De oficio por la Gerencia en la que el trabajador preste servicio.", c: "De oficio por la Directora General de Personal y Desarrollo Profesional.", d: "A instancia de la Junta de Personal." },
    correctOrig: "b",
    norma: "Normativa interna de personal Sacyl."
  },
  {
    id: "2023_13", exam: "2023", tema: "Tema 5 · Prevención de Riesgos Laborales",
    textAdap: "El órgano responsable de la revisión del procedimiento de protección de trabajadoras durante embarazo y lactancia en Sacyl es:",
    optsAdap: { A: "El Servicio de Seguridad y Salud en el Trabajo.", B: "El Servicio de Prevención de Riesgos Laborales del Área de Salud.", C: "El Servicio de Vigilancia en Salud Pública." },
    correctAdap: "B",
    textOrig: "El órgano responsable de la revisión y actualización del procedimiento de protección de las trabajadoras durante el embarazo y la lactancia, en los centros e instituciones de la Gerencia Regional de Salud de Castilla y León, es:",
    optsOrig: { a: "El Servicio de Seguridad y Salud en el Trabajo.", b: "El Servicio de Protección Radiológica.", c: "El Servicio de Prevención de Riesgos Laborales del Área de Salud.", d: "El Servicio de Vigilancia en Salud Pública." },
    correctOrig: "c",
    norma: "Ley 31/1995 y normativa de prevención Sacyl."
  },
  {
    id: "2023_14", exam: "2023", tema: "Tema 7 · TREBEP",
    textAdap: "Según el art. 8 del TREBEP, los empleados públicos se clasifican en:",
    optsAdap: { A: "Funcionarios de carrera, interinos, laboral y eventual.", B: "Funcionarios y personal laboral exclusivamente.", C: "Funcionarios de carrera y personal eventual." },
    correctAdap: "A",
    textOrig: "Según el art. 8 del Real Decreto Legislativo 5/2015 por el que se aprueba el Texto Refundido de la Ley del Estatuto Básico del Empleado Público, los empleados públicos se clasifican en:",
    optsOrig: { a: "Funcionarios de carrera, funcionarios interinos y personal laboral, ya sea fijo, por tiempo indefinido o temporal.", b: "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.", c: "Funcionarios de carrera, funcionarios interinos, personal laboral fijo indefinido y personal eventual.", d: "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual." },
    correctOrig: "d",
    norma: "TREBEP, art. 8."
  },
  {
    id: "2023_15", exam: "2023", tema: "Tema 7 · Estatuto Marco",
    textAdap: "Para participar en procesos de promoción interna según la Ley 55/2003, se exige como personal fijo en la categoría de procedencia:",
    optsAdap: { A: "Al menos dos años.", B: "Al menos un año.", C: "No se requiere ningún tiempo mínimo de servicios prestados." },
    correctAdap: "C",
    textOrig: "Según establece la Ley 55/2003, del Estatuto Marco del personal estatutario de los servicios de salud, para participar en los procesos selectivos para la promoción interna será requisito estar en servicio activo, y con nombramiento como personal estatutario fijo en la categoría de procedencia, durante al menos:",
    optsOrig: { a: "Un año.", b: "Dos años.", c: "Tres años.", d: "No se requiere ningún tiempo mínimo de servicios prestados en la categoría de procedencia." },
    correctOrig: "d",
    norma: "Ley 55/2003, art. 32."
  },
  {
    id: "2023_16", exam: "2023", tema: "Tema 7 · Estatuto Marco",
    textAdap: "La situación de suspensión firme de funciones superior a qué plazo determina la pérdida del puesto de trabajo:",
    optsAdap: { A: "Un año.", B: "Seis meses.", C: "Tres meses." },
    correctAdap: "A",
    textOrig: "La situación de suspensión firme de funciones, regulada en el art. 68 de la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, determinará la pérdida del puesto de trabajo cuando exceda de:",
    optsOrig: { a: "Un año.", b: "Seis meses.", c: "Tres meses.", d: "Un mes." },
    correctOrig: "a",
    norma: "Ley 55/2003, art. 68."
  },
  {
    id: "2023_17", exam: "2023", tema: "Tema 7 · Estatuto Marco",
    textAdap: "Para obtener la excedencia voluntaria por interés particular en el personal estatutario:",
    optsAdap: { A: "Es preciso haber prestado servicios efectivos durante los 5 años anteriores.", B: "Es preciso haber prestado servicios efectivos durante los 2 años anteriores.", C: "No es necesario haber prestado servicios previos." },
    correctAdap: "A",
    textOrig: "Para obtener la excedencia voluntaria cuando el personal estatutario de los servicios de salud lo solicite por interés particular:",
    optsOrig: { a: "Será preciso haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante los 5 años inmediatamente anteriores.", b: "Será preciso haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante los 2 años inmediatamente anteriores.", c: "Será preciso haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante los 6 años inmediatamente anteriores.", d: "No es necesario haber prestado servicios efectivos en cualquiera de las Administraciones públicas con anterioridad." },
    correctOrig: "a",
    norma: "Ley 55/2003."
  },
  {
    id: "2023_18", exam: "2023", tema: "Tema 7 · Estatuto Marco",
    textAdap: "Para participar en procesos selectivos fijos en servicios de salud, se exige no haber sido separado mediante expediente disciplinario:",
    optsAdap: { A: "En los dos años anteriores.", B: "En los cinco años anteriores.", C: "En ningún plazo específico por inhabilitación firme (requisito general de no estar separado)." },
    correctAdap: "C",
    textOrig: "Para poder participar en los procesos de selección de personal estatutario fijo de los servicios de salud será necesario no haber sido separado del servicio, mediante expediente disciplinario, de cualquier servicio de salud o Administración pública:",
    optsOrig: { a: "En los cinco años anteriores a la convocatoria.", b: "En el año anterior a la convocatoria.", c: "En los seis años anteriores a la convocatoria.", d: "En los dos años anteriores a la convocatoria." },
    correctOrig: "d",
    norma: "Ley 55/2003."
  },
  {
    id: "2023_19", exam: "2023", tema: "Tema 4 · Igualdad de Género",
    textAdap: "La exigencia de utilizar un lenguaje no sexista en los documentos de las Administraciones Públicas de Castilla y León se recoge en:",
    optsAdap: { A: "La normativa autonómica de igualdad.", B: "Directrices internas sin rango de ley.", C: "No se recoge en ninguna norma." },
    correctAdap: "A",
    textOrig: "En qué normativa de la Comunidad de Castilla y León se recoge que en los documentos elaborados por las Administraciones Públicas de la Comunidad Autónoma se utilice un lenguaje no sexista:",
    optsOrig: { a: "No se recoge en ninguna normativa autonómica.", b: "En la Ley 1/2003, de Igualdad de oportunidades entre mujeres y hombres en Castilla y León.", c: "En la Ley 3/2003, de Igualdad efectiva entre hombres y mujeres en Castilla y León.", d: "En la Ley 3/2001, de Igualdad entre mujeres y hombres en Castilla y León." },
    correctOrig: "c",
    norma: "Ley de Igualdad de Castilla y León."
  },
  {
    id: "2023_20", exam: "2023", tema: "Tema 7 · Retribuciones Personal Estatutario",
    textAdap: "¿Qué complemento retribuye el nivel del puesto que se desempeña en Sacyl?",
    optsAdap: { A: "El complemento específico.", B: "El complemento de productividad.", C: "El complemento de destino." },
    correctAdap: "C",
    textOrig: "¿Qué complemento retribuye, al personal estatutario del Servicio de Salud de Castilla y León, el nivel del puesto que se desempeña?:",
    optsOrig: { a: "El complemento específico.", b: "El complemento de actividad.", c: "El complemento de productividad.", d: "El complemento de destino." },
    correctOrig: "d",
    norma: "Ley 55/2003 y normativa retributiva."
  },
  {
    id: "2023_21", exam: "2023", tema: "Tema 5 · Prevención de Riesgos Laborales",
    textAdap: "Según el art. 19 de la Ley 31/1995, la formación preventiva deberá garantizarse:",
    optsAdap: { A: "En el momento de la contratación y al producirse cambios de funciones.", B: "Únicamente al inicio de la relación laboral.", C: "Fuera de la jornada laboral obligatoriamente." },
    correctAdap: "A",
    textOrig: "Conforme indica el art. 19 de la Ley 31/1995, de Prevención de Riesgos Laborales, la formación en materia preventiva:",
    optsOrig: { a: "Deberá garantizarse por el empresario en el momento de la contratación y cuando se produzcan cambios en las funciones que desempeñe solamente en contratos indefinidos.", b: "Deberá estar centrada en cuestiones generales de la organización, adaptarse a la evolución de los riesgos y a la aparición de otros nuevos y repetirse periódicamente, si fuera necesario.", c: "Deberá impartirse, siempre que sea posible, fuera de la jornada de trabajo.", d: "Ninguna es correcta." },
    correctOrig: "b",
    norma: "Ley 31/1995, art. 19."
  },
  {
    id: "2023_22", exam: "2023", tema: "Tema 19 · Seguridad Social",
    textAdap: "Según el art. 187 del RDL 8/2015, la prestación económica por riesgo durante el embarazo:",
    optsAdap: { A: "Se asimila a contingencias profesionales en base reguladora y condiciones.", B: "Consiste en un subsidio fijo independiente de la base.", C: "Solo cubre el último mes." },
    correctAdap: "A",
    textOrig: "Según el art. 187 del texto refundido de la Ley General de la Seguridad Social, aprobado por el RDL 8/2015, la prestación económica por riesgo durante el embarazo:",
    optsOrig: { a: "Se reconocerá a la mujer trabajadora en los términos y condiciones previstos en esta ley para la prestación económica de incapacidad temporal derivada de contingencias profesionales.", b: "Nacerá el día en que se inicie la suspensión del contrato de trabajo y finalizará el día anterior a aquel en que se inicie la suspensión del contrato de trabajo por maternidad o al de reincorporación de la mujer trabajadora a su puesto de trabajo anterior o a otro compatible con su estado.", c: "La prestación económica consistirá en un subsidio equivalente al 100 por cien de la base reguladora correspondiente. A tales efectos, la base reguladora será equivalente a la que esté establecida para la prestación de incapacidad temporal derivada de contingencias profesionales.", d: "a), b) y c) son correctas." },
    correctOrig: "d",
    norma: "RDL 8/2015, art. 187."
  },
  {
    id: "2023_23", exam: "2023", tema: "Tema 22 · Documentación Clínica",
    textAdap: "Según el art. 10 del Decreto 101/2005 de historia clínica, en episodios de hospitalización formará parte del contenido mínimo:",
    optsAdap: { A: "La hoja clínico-estadística.", B: "El consentimiento informado.", C: "Todas las respuestas son correctas." },
    correctAdap: "C",
    textOrig: "Según el art. 10 del Decreto 101/2005, de 22 de diciembre, por el que se regula la historia clínica, en episodios de hospitalización, formará parte del contenido mínimo de la historia clínica:",
    optsOrig: { a: "La hoja clínico-estadística.", b: "El documento de consentimiento informado.", c: "El informe de anatomía patológica.", d: "Todas las respuestas anteriores son correctas." },
    correctOrig: "d",
    norma: "Decreto 101/2005 (CyL)."
  },
  {
    id: "2023_24", exam: "2023", tema: "Tema 3 · Administración de Castilla y León",
    textAdap: "¿A qué órgano se atribuye la coordinación y gestión de competencias en cada provincia según la Ley del Gobierno de Castilla y León?",
    optsAdap: { A: "Las Delegaciones Territoriales.", B: "Los Servicios Territoriales.", C: "Las Diputaciones Provinciales." },
    correctAdap: "A",
    textOrig: "¿A qué órgano se atribuye la coordinación y la gestión de las competencias de la Administración General de la Comunidad en cada una de las provincias, según la Ley del Gobierno y de la Administración de la Comunidad de Castilla y León?:",
    optsOrig: { a: "Las Delegaciones Provinciales de la Junta de Castilla y León.", b: "Los Servicios Territoriales", c: "Las Delegaciones Territoriales.", d: "Las Diputaciones Provinciales." },
    correctOrig: "c",
    norma: "Ley 3/2001 (CyL)."
  },
  {
    id: "2023_25", exam: "2023", tema: "Tema 15 · Registros Administrativos",
    textAdap: "Señala cuál no es una oficina de asistencia en materia de registros de la Administración de Castilla y León:",
    optsAdap: { A: "Oficinas generales.", B: "Oficinas departamentales.", C: "Oficinas provinciales." },
    correctAdap: "B",
    textOrig: "¿Cuál de las siguientes no es una oficina de asistencia en materia de registros de la Administración de la Comunidad de Castilla y León?:",
    optsOrig: { a: "Las oficinas generales.", b: "Las oficinas provinciales.", c: "Las oficinas departamentales.", d: "Los puntos." },
    correctOrig: "c",
    norma: "Normativa de registros autonómica."
  },
  {
    id: "2023_26", exam: "2023", tema: "Tema 15 · Reclamaciones y Sugerencias",
    textAdap: "Señala el principio que no es rector en la tramitación de reclamaciones y sugerencias en el ámbito sanitario de Castilla y León:",
    optsAdap: { A: "Carácter contradictorio de la tramitación.", B: "Adecuación del mensaje.", C: "Buena fe y confianza legítima." },
    correctAdap: "A",
    textOrig: "Señale cuál no es un principio rector en la tramitación de las reclamaciones y sugerencias en el ámbito sanitario de los recogidos en el art. 9 del Decreto 40/2003, que regula las Guías de información al usuario:",
    optsOrig: { a: "Carácter contradictorio de la tramitación.", b: "Adecuación y adaptación del mensaje a los usuarios.", c: "Propuesta de pie de recurso ante la Administración.", d: "Buena fe y confianza legítima." },
    correctOrig: "a",
    norma: "Decreto 40/2003 (CyL)."
  },
  {
    id: "2023_27", exam: "2023", tema: "Tema 19 · Seguridad Social",
    textAdap: "¿Cuántos grados de incapacidad permanente existen en el Régimen General de la Seguridad Social?",
    optsAdap: { A: "Tres.", B: "Cuatro.", C: "Cinco." },
    correctAdap: "B",
    textOrig: "¿Cuántos grados de incapacidad permanente existen en el Régimen General de Seguridad Social?:",
    optsOrig: { a: "Dos.", b: "Tres.", c: "Cuatro.", d: "Cinco." },
    correctOrig: "c",
    norma: "RDL 8/2015 (LGSS)."
  },
  {
    id: "2023_28", exam: "2023", tema: "Tema 21 · Hacienda y Sector Público CyL",
    textAdap: "Según la Ley de Hacienda de Castilla y León, el derecho a reconocer o liquidar créditos de naturaleza pública prescribirá a los:",
    optsAdap: { A: "Tres años.", B: "Cuatro años.", C: "Cinco años." },
    correctAdap: "B",
    textOrig: "De conformidad con el art. 49 de la Ley 2/2006, de la Hacienda y del Sector Público de la Comunidad de Castilla y León, los derechos de la Hacienda de la Comunidad prescribirán... el derecho a reconocer o liquidar créditos de naturaleza pública prescribirá:",
    optsOrig: { a: "A los cuatro años.", b: "A los tres años.", c: "A los cinco años.", d: "No prescribirán nunca." },
    correctOrig: "a",
    norma: "Ley 2/2006 (Hacienda CyL)."
  },
  {
    id: "2023_29", exam: "2023", tema: "Tema 21 · Presupuestos",
    textAdap: "En los Presupuestos Generales de la Comunidad de Castilla y León, ¿a qué Área de Gasto corresponde Sanidad?",
    optsAdap: { A: "Área de Gasto 2.", B: "Área de Gasto 3.", C: "Área de Gasto 4." },
    correctAdap: "A",
    textOrig: "En los Presupuestos Generales de la Comunidad de Castilla y León, y atendiendo a su clasificación funcional, ¿a qué Área de Gasto corresponde Sanidad?:",
    optsOrig: { a: "Área de Gasto 2.- Sanidad, Educación y Justicia.", b: "Área de Gasto 3.- Sanidad, Educación y Cultura.", c: "Área de Gasto 4.- Sanidad, Educación y Juventud.", d: "Área de Gasto 5.- Sanidad, Educación y Hacienda." },
    correctOrig: "a",
    norma: "Clasificación presupuestaria CyL."
  },
  {
    id: "2023_30", exam: "2023", tema: "Tema 21 · Contabilidad Pública",
    textAdap: "Indique el órgano directivo que propone la aprobación del Plan General de Contabilidad Pública de Castilla y León:",
    optsAdap: { A: "La Intervención General de la Comunidad Autónoma.", B: "El Consejero de Hacienda.", C: "Las Cortes de Castilla y León." },
    correctAdap: "A",
    textOrig: "Indique el órgano directivo de la Junta de Castilla y León que asume la competencia de proponer la aprobación del Plan General de Contabilidad Pública de la Comunidad de Castilla y León:",
    optsOrig: { a: "Cortes de Castilla y León.", b: "Intervención General de la Comunidad Autónoma.", c: "Titular de la Consejería de Hacienda.", d: "Gobierno de la Junta de Castilla y León." },
    correctOrig: "b",
    norma: "Ley de Hacienda CyL."
  },
  {
    id: "2023_31", exam: "2023", tema: "Tema 21 · Contratación del Sector Público",
    textAdap: "El art. 102.1 de la Ley 9/2017 (LCSP) señala que los contratos del sector público tendrán siempre un precio:",
    optsAdap: { A: "Cierto.", B: "Determinado.", C: "En euros." },
    correctAdap: "B",
    textOrig: "El art. 102.1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, señala que los contratos del sector público tendrán siempre un precio:",
    optsOrig: { a: "Cierto.", b: "Definido.", c: "Determinado.", d: "En euros." },
    correctOrig: "c",
    norma: "Ley 9/2017 (LCSP), art. 102."
  },
  {
    id: "2023_32", exam: "2023", tema: "Tema 21 · Contratación",
    textAdap: "Según el art. 37 de la LCSP, ¿pueden las entidades del sector público contratar verbalmente?",
    optsAdap: { A: "No, en ningún caso.", B: "Solo en contratos menores.", C: "Solo en emergencia." },
    correctAdap: "A",
    textOrig: "En relación a la formalización del contrato, según el art. 37 de la Ley 9/2017, de Contratos del Sector Público, ¿pueden las entidades del sector público contratar verbalmente?:",
    optsOrig: { a: "No, en ningún caso.", b: "Solo cuando se trate de contratos menores.", c: "Solo cuando el contrato tenga carácter de emergencia.", d: "Solo en casos de contratos de suministros no sujetos a regulación armonizada." },
    correctOrig: "a",
    norma: "LCSP, art. 37."
  },
  {
    id: "2023_33", exam: "2023", tema: "Tema 21 · Contratación",
    textAdap: "Según el art. 118 de la LCSP, se consideran contratos menores de suministro aquellos de valor estimado inferior a:",
    optsAdap: { A: "15.000 euros.", B: "25.000 euros.", C: "40.000 euros." },
    correctAdap: "B",
    textOrig: "El art. 118 de la Ley 9/2017, de Contratos del Sector Público, dice que se consideran contratos menores: Cuando se trate de contratos de suministro, los contratos de valor estimado inferior a...",
    optsOrig: { a: "Cuando se trate de contratos de suministro, los contratos de valor estimado inferior a 25.000 euros.", b: "Cuando se trate de contratos de suministro, los contratos con un presupuesto base de licitación inferior a 25.000 euros.", c: "Cuando se trate de contratos de obras, los contratos de valor estimado inferior a 40.000 euros.", d: "Cuando se trate de contrato de obras, los contratos con un presupuesto base de licitación inferior a 40.000 euros." },
    correctOrig: "a",
    norma: "LCSP, art. 118."
  },
  {
    id: "2023_34", exam: "2023", tema: "Tema 22 · Documentación Clínica",
    textAdap: "Según el art. 17 de la Ley 41/2002, los centros sanitarios tienen obligación de conservar la historia clínica como mínimo:",
    optsAdap: { A: "Cinco años desde la fecha del alta de cada proceso asistencial.", B: "Cuatro años.", C: "Diez años." },
    correctAdap: "A",
    textOrig: "Según el art. 17 de la Ley 41/2002... los centros sanitarios tienen la obligación de conservar la documentación clínica para la debida asistencia al paciente:",
    optsOrig: { a: "Cuatro años, como mínimo, contados desde la fecha del alta de cada proceso asistencial.", b: "Cinco años, como mínimo, contados desde la fecha del alta de cada proceso asistencial.", c: "Los datos de la historia clínica relacionados con el nacimiento no se destruirán.", d: "Las respuestas b) y c) son correctas." },
    correctOrig: "b",
    norma: "Ley 41/2002, art. 17."
  },
  {
    id: "2023_35", exam: "2023", tema: "Tema 1 · Organización Hospitalaria",
    textAdap: "Le corresponde al Director Médico de Hospital, según el RD 521/1987:",
    optsAdap: { A: "Proponer, dirigir y coordinar las actividades asistenciales, docentes e de investigación.", b: "La gestión de suministros generales.", c: "El mantenimiento de instalaciones." },
    correctAdap: "A",
    textOrig: "¿Cuál de las siguientes funciones le corresponde al Director Médico de Hospital, según el art. 10 del Real Decreto 521/1987?:",
    optsOrig: { a: "Proponer, dirigir, coordinar y evaluar las actividades y calidad de la asistencia, docencia e investigación.", b: "Elaborar informes periódicos sobre la actividad del hospital...", c: "La adopción de medidas para hacer efectiva la continuidad...", d: "Asumir las funciones de carácter no asistencial..." },
    correctOrig: "a",
    norma: "RD 521/1987, art. 10."
  },
  {
    id: "2023_36", exam: "2023", tema: "Tema 1 · Ley General de Sanidad",
    textAdap: "De acuerdo con la Ley 14/1986, como regla general el Área de Salud extenderá su acción a una población:",
    optsAdap: { A: "No inferior a 200.000 ni superior a 250.000 habitantes.", B: "Entre 100.000 y 150.000 habitantes.", C: "Superior a 250.000 habitantes." },
    correctAdap: "A",
    textOrig: "De conformidad con la Ley 14/1986, General de Sanidad, como regla general y sin perjuicio de excepciones, el Área de Salud extenderá su acción a una población:",
    optsOrig: { a: "No inferior a 100.000 habitantes ni superior a 150.000.", b: "No inferior a 200.000 habitantes ni superior a 250.000.", c: "Superior a 250.000 habitantes.", d: "No inferior a 150.000 habitantes ni superior a 200.000." },
    correctOrig: "b",
    norma: "Ley 14/1986, art. 56."
  },
  {
    id: "2023_37", exam: "2023", tema: "Tema 1 · Estructura Consejería de Sanidad",
    textAdap: "De conformidad con el Decreto 12/2022 de estructura de la Consejería de Sanidad, son órganos directivos centrales:",
    optsAdap: { A: "La Secretaría General y la Dirección General de Salud Pública.", B: "Solo la Dirección General de Recursos Humanos.", C: "Las Gerencias de Área." },
    correctAdap: "A",
    textOrig: "De conformidad con el Decreto 12/2022, por la que se establece la estructura orgánica de la Consejería de Sanidad, son órganos directivos centrales de la Consejería de Sanidad:",
    optsOrig: { a: "La Dirección General de Personal y Desarrollo Profesional.", b: "La Dirección General de Asistencia Sanitaria y Humanización.", c: "La Dirección General de Calidad e Infraestructuras Sanitarias.", d: "La Secretaría General y la Dirección General de Salud Pública." },
    correctOrig: "d",
    norma: "Decreto 12/2022 (CyL)."
  },
  {
    id: "2023_38", exam: "2023", tema: "Tema 1 · Organización Hospitalaria",
    textAdap: "Según el RD 521/1987, el Área de Atención al Paciente en los hospitales está adscrita a:",
    optsAdap: { A: "La Gerencia del hospital.", B: "La Dirección Médica.", C: "La Dirección de Enfermería." },
    correctAdap: "A",
    textOrig: "Con carácter general y según el RD 521/1987, el Área de Atención al paciente está adscrita:",
    optsOrig: { a: "A la Gerencia del hospital.", b: "A la Dirección Médica.", c: "A la Dirección de Gestión y Servicios Generales.", d: "A la Dirección de Enfermería." },
    correctOrig: "a",
    norma: "RD 521/1987."
  },
  {
    id: "2023_39", exam: "2023", tema: "Tema 1 · Ordenación del Sistema de Salud de Castilla y León",
    textAdap: "El art. 20 de la Ley 8/2012 indica que las actuaciones de promoción, prevención y rehabilitación corresponden a:",
    optsAdap: { A: "La Atención Primaria.", B: "La Atención Especializada.", C: "La Salud Pública." },
    correctAdap: "C",
    textOrig: "El art. 20 de la Ley 8/2012, de Ordenación del Sistema de Salud de Castilla y León, indica que la salud pública comprenderá las actuaciones encaminadas a la promoción de la salud...",
    optsOrig: { a: "Atención primaria.", b: "Atención especializada.", c: "Salud pública.", d: "Atención de urgencia." },
    correctOrig: "c",
    norma: "Ley 8/2010 / 8/2012 (CyL)."
  },
  {
    id: "2023_40", exam: "2023", tema: "Tema 15 · Procedimiento Administrativo",
    textAdap: "Según el art. 39.1 de la Ley 39/2015, los actos administrativos se presumirán válidos y producirán efectos:",
    optsAdap: { A: "Desde la fecha en que se dicten, salvo que dispongan otra cosa.", B: "Desde su notificación.", C: "Al día siguiente de su publicación." },
    correctAdap: "A",
    textOrig: "Según el art. 39.1 de la Ley 39/2015, los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos:",
    optsOrig: { a: "Desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa.", b: "Desde la fecha en que se notifiquen, salvo que en ellos se disponga otra cosa.", c: "Al día siguiente de la fecha en que se notifiquen...", d: "Al día siguiente de la fecha en que se dicten..." },
    correctOrig: "a",
    norma: "Ley 39/2015, art. 39.1."
  },
  {
    id: "2023_41", exam: "2023", tema: "Tema 22 · Autonomía del Paciente",
    textAdap: "¿El derecho de acceso del paciente a la historia clínica puede ejercerse por representación?",
    optsAdap: { A: "Sí, siempre que esté debidamente acreditada.", B: "No, es personal e intransferible.", C: "Solo por familiares de primer grado sin acreditación." },
    correctAdap: "A",
    textOrig: "¿El derecho de acceso del paciente a la historia clínica puede ejercerse por representación?:",
    optsOrig: { a: "Si, no siendo necesaria la acreditación para familiares de primer grado.", b: "Sí, siempre que esté debidamente acreditada.", c: "No, el derecho de acceso a la historia clínica es personal e intransferible.", d: "No, la historia clínica es propiedad de la institución sanitaria." },
    correctOrig: "b",
    norma: "Ley 41/2002."
  },
  {
    id: "2023_42", exam: "2023", tema: "Tema 18 · Protección de Datos",
    textAdap: "Según el art. 5 de la Ley Orgánica 3/2018 (LOPDGDD), los responsables y encargados del tratamiento están sujetos al deber de:",
    optsAdap: { A: "Confidencialidad y secreto profesional.", B: "Custodia temporal.", C: "Discreción exclusiva." },
    correctAdap: "A",
    textOrig: "Según el art. 5 de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, los responsables y encargados del tratamiento están sujetos al deber de:",
    optsOrig: { a: "Fidelidad.", b: "Confidencialidad y secreto profesional.", c: "Custodia.", d: "Discreción y secreto de actuaciones." },
    correctOrig: "b",
    norma: "LOPDGDD, art. 5."
  },
  {
    id: "2023_43", exam: "2023", tema: "Tema 1 · Centros de Salud",
    textAdap: "El centro de salud podrá situarse fuera de la Zona Básica de Salud:",
    optsAdap: { A: "De forma excepcional si mejora la accesibilidad y calidad asistencial.", B: "En ningún caso.", C: "Con carácter habitual." },
    correctAdap: "A",
    textOrig: "El centro de salud podrá situarse fuera del ámbito territorial de la Zona Básica de Salud, si con ello mejora la accesibilidad o bien para asegurar una atención sanitaria de calidad:",
    optsOrig: { a: "En ningún caso.", b: "Con carácter habitual.", c: "Con carácter excepcional.", d: "Con carácter provisional." },
    correctOrig: "c",
    norma: "Ley de Ordenación Sanitaria CyL."
  },
  {
    id: "2023_44", exam: "2023", tema: "Tema 1 · Gerencia Regional de Salud",
    textAdap: "El Director Gerente de la Gerencia Regional de Salud de Castilla y León es nombrado:",
    optsAdap: { A: "Por la Junta de Castilla y León a propuesta del Consejero de Sanidad.", B: "Por el Presidente de la Junta directamente.", C: "Por las Cortes de Castilla y León." },
    correctAdap: "A",
    textOrig: "El Director Gerente de la Gerencia Regional de Salud de Castilla y León es nombrado:",
    optsOrig: { a: "Por el Presidente de la Junta a propuesta conjunta...", b: "Por la Junta de Castilla y León a propuesta del Consejero de Sanidad.", c: "Por la Junta a propuesta conjunta de Sanidad y Hacienda.", d: "Por el Presidente de la Junta a propuesta del Consejero de Sanidad." },
    correctOrig: "b",
    norma: "Decreto organización GRS."
  },
  {
    id: "2023_45", exam: "2023", tema: "Tema 22 · Consentimiento Informado",
    textAdap: "Según el art. 8 de la Ley 41/2002, el consentimiento informado por escrito se debe realizar:",
    optsAdap: { A: "En caso de intervención quirúrgica e procedimientos invasores o con riesgos.", B: "En todas las consultas externas de rutina.", C: "Únicamente en ingresos hospitalarios." },
    correctAdap: "A",
    textOrig: "Según el art. 8 de la Ley 41/2002... el consentimiento informado por escrito se debe realizar:",
    optsOrig: { a: "En caso de intervención quirúrgica.", b: "En caso de procedimientos diagnósticos y terapéuticos invasores.", c: "En caso de procedimientos que supongan riesgos o inconvenientes de notoria repercusión negativa.", d: "Todas son correctas." },
    correctOrig: "d",
    norma: "Ley 41/2002, art. 8."
  },
  {
    id: "2023_46", exam: "2023", tema: "Tema 1 · Defensor del Usuario",
    textAdap: "Conforme a la normativa de salud de Castilla y León, el Defensor del Usuario:",
    optsAdap: { A: "Es el órgano de defensa de derechos sin perjuicio del Procurador del Común y emite propuestas no ejecutivas.", B: "Tiene carácter ejecutivo y sancionador.", C: "Sustituye al Procurador del Común." },
    correctAdap: "A",
    textOrig: "Conforme establece la Ley de Ordenación del Sistema de Salud de Castilla y León, el Defensor del Usuario del Sistema de Salud de Castilla y León:",
    optsOrig: { a: "Es el órgano encargado de la defensa de los derechos de los usuarios sin perjuicio del Procurador del Común.", b: "Podrá requerir la colaboración e información oportuna.", c: "Podrá formular propuestas, recomendaciones y sugerencias, sin carácter ejecutivo.", d: "Todas son correctas." },
    correctOrig: "d",
    norma: "Ley de Ordenación Sanitaria CyL."
  },
  {
    id: "2023_47", exam: "2023", tema: "Tema 1 · GRS",
    textAdap: "¿A qué Dirección General de Sacyl le corresponde la gestión y evaluación de riesgos sanitarios por responsabilidad patrimonial?",
    optsAdap: { A: "Dirección General de Calidad e Infraestructuras Sanitarias.", B: "Dirección General de Asistencia Sanitaria.", C: "Dirección General de Personal." },
    correctAdap: "A",
    textOrig: "¿A qué Dirección General de la Gerencia Regional de Salud le corresponde la gestión y evaluación de los riesgos sanitarios derivados de la responsabilidad patrimonial?:",
    optsOrig: { a: "Dirección General de Calidad e Infraestructuras Sanitarias.", b: "Dirección General de Asistencia Sanitaria y Humanización.", c: "Dirección General de Salud Digital.", d: "Dirección General de Personal y Desarrollo Profesional." },
    correctOrig: "a",
    norma: "Estructura GRS CyL."
  },
  {
    id: "2023_48", exam: "2023", tema: "Tema 1 · Atención Primaria",
    textAdap: "Conforme al art. 19.3 de la Ley 8/2010, el Equipo de Atención Primaria desarrollará su actividad en:",
    optsAdap: { A: "La Zona Básica de Salud correspondiente.", B: "La Demarcación Sanitaria general.", C: "Toda el Área de Salud." },
    correctAdap: "A",
    textOrig: "Conforme al art. 19.3 de la Ley 8/2010, de ordenación del sistema de salud de Castilla y León, el Equipo de Atención Primaria desarrollará su actividad en:",
    optsOrig: { a: "La Demarcación Sanitaria correspondiente.", b: "La Zona Básica de Salud correspondiente.", c: "Los Centros de Salud asignados.", d: "Toda el Área de Salud." },
    correctOrig: "b",
    norma: "Ley 8/2010, art. 19."
  },
  {
    id: "2023_49", exam: "2023", tema: "Tema 22 · Instrucciones Previas",
    textAdap: "Según la Ley 8/2003 de derechos y deberes de salud en CyL, las instrucciones previas deberán formalizarse ante:",
    optsAdap: { A: "Notario o ante tres testigos con determinados requisitos legales.", B: "Exclusivamente ante juez de paz.", C: "Ante el médico de familia exclusivamente." },
    correctAdap: "A",
    textOrig: "Dentro de la protección de la autonomía, la Ley 8/2003 recoge que las instrucciones previas deberán formalizarse documentalmente:",
    optsOrig: { a: "Ante notario, sin necesidad de testigos.", b: "Ante personal de la administración judicial.", c: "Ante tres testigos mayores de edad con requisitos de parentesco y capacidad.", d: "Son correctas a) y c)." },
    correctOrig: "d",
    norma: "Ley 8/2003 (CyL)."
  },
  {
    id: "2023_50", exam: "2023", tema: "Tema 22 · Información Asistencial",
    textAdap: "Conforme al art. 5.1 de la Ley 41/2002, el derecho a la información asistencial corresponde:",
    optsAdap: { A: "Al paciente y a las personas vinculadas si este lo permite.", B: "Exclusivamente al paciente.", C: "A los familiares directos en todo caso." },
    correctAdap: "A",
    textOrig: "Conforme el art. 5.1 de la Ley 41/2002... el derecho a la información asistencial corresponde:",
    optsOrig: { a: "Al paciente solamente.", b: "A los profesionales sanitarios.", c: "Al paciente y a las personas vinculadas al paciente si este lo permite.", d: "A criterio del médico." },
    correctOrig: "c",
    norma: "Ley 41/2002, art. 5."
  },
  {
    id: "2023_51", exam: "2023", tema: "Tema 3 · Administración de Castilla y León",
    textAdap: "Según el art. 31 de la Ley 3/2001 de Gobierno y Administración de CyL, la Administración actúa conforme a los principios de:",
    optsAdap: { A: "Jerarquía, descentralización, desconcentración y coordinación.", B: "Jerarquía y centralización.", C: "Independencia y jerarquía." },
    correctAdap: "A",
    textOrig: "De acuerdo con el art. 31 de la Ley 3/2001, de 3 de julio, del Gobierno y de la Administración de la Comunidad de Castilla y León, la Administración actúa de acuerdo con los principios de:",
    optsOrig: { a: "Jerarquía, descentralización, desconcentración y coordinación.", b: "Jerarquía, centralización, desconcentración y coordinación.", c: "Jerarquía, descentralización, desconcentración y colaboración.", d: "Jerarquía, centralización, desconcentración y descoordinación." },
    correctOrig: "a",
    norma: "Ley 3/2001, art. 31."
  },
  {
    id: "2023_52", exam: "2023", tema: "Tema 15 · Registro Electrónico",
    textAdap: "Los ciudadanos podrán utilizar el Registro electrónico de la Administración de Castilla y León:",
    optsAdap: { A: "Todos los días del año y durante las veinticuatro horas del día.", B: "Solo días hábiles en horario de oficina.", C: "De lunes a viernes." },
    correctAdap: "A",
    textOrig: "En los términos establecidos en la legislación básica estatal, los ciudadanos podrán utilizar el Registro electrónico de la Administración autonómica para presentar sus solicitudes:",
    optsOrig: { a: "Los días hábiles únicamente en horario de 9:00 a 14:00 horas.", b: "Solo los días hábiles y durante las veinticuatro horas del día.", c: "Todos los días del año y durante las veinticuatro horas del día.", d: "Todos los días del año únicamente en horario de 9:00 a 14:00 horas." },
    correctOrig: "c",
    norma: "Ley 39/2015 y normativa autonómica."
  },
  {
    id: "2023_53", exam: "2023", tema: "Tema 15 · Sugerencias y Reclamaciones",
    textAdap: "La Ley 2/2010 de Derechos de los Ciudadanos en CyL establece que se dará respuesta a las sugerencias en un plazo máximo de:",
    optsAdap: { A: "Un mes.", B: "Dos meses.", C: "Tres meses." },
    correctAdap: "A",
    textOrig: "La Ley 2/2010... en su art. 29.2 establece que la Administración dará respuesta a las sugerencias de los ciudadanos en un plazo máximo de:",
    optsOrig: { a: "Un mes.", b: "Dos meses.", c: "10 días hábiles.", d: "Tres meses." },
    correctOrig: "a",
    norma: "Ley 2/2010 (CyL), art. 29."
  },
  {
    id: "2023_54", exam: "2023", tema: "Tema 3 · Estatuto de Autonomía de Castilla y León",
    textAdap: "Según el Estatuto de Autonomía de Castilla y León, las leyes regionales:",
    optsAdap: { A: "Serán promulgadas en nombre del Rey por el Presidente de la Junta y publicadas en el BOCYL.", B: "Se publican solo en el BOE.", C: "Son promulgadas por las Cortes." },
    correctAdap: "A",
    textOrig: "Según establece el Estatuto de Autonomía de Castilla y León, las leyes regionales:",
    optsOrig: { a: "Serán promulgadas en nombre del Rey por el Presidente de la Junta, quien ordenará su publicación en el BOCYL y en el BOE.", b: "Serán sancionadas y promulgadas por el Rey y publicadas en el BOCYL.", c: "Serán promulgadas por el Presidente del Gobierno...", d: "Serán promulgadas por el Rey..." },
    correctOrig: "b",
    norma: "Estatuto de Autonomía de Castilla y León."
  },
  {
    id: "2023_55", exam: "2023", tema: "Tema 15 · Responsabilidad Patrimonial",
    textAdap: "Según el art. 32 de la Ley 40/2015, los particulares tendrán derecho a ser indemnizados por las Administraciones Públicas:",
    optsAdap: { A: "Por toda lesión consecuencia del funcionamiento normal o anormal de los servicios, salvo fuerza mayor o deber jurídico de soportar.", B: "Solo por funcionamiento anormal.", C: "Incluyendo casos de fuerza mayor." },
    correctAdap: "A",
    textOrig: "Según el art. 32 de la Ley 40/2015, de Régimen Jurídico del Sector Público, los particulares tendrán derecho a ser indemnizados...",
    optsOrig: { a: "De toda lesión... consecuencia del funcionamiento anormal...", b: "De toda lesión... consecuencia del funcionamiento normal o anormal... salvo fuerza mayor...", c: "De toda lesión... incluso en los casos de fuerza mayor...", d: "De toda lesión... consecuencia del funcionamiento normal..." },
    correctOrig: "b",
    norma: "Ley 40/2015, art. 32."
  },
  {
    id: "2023_56", exam: "2023", tema: "Tema 15 · Órganos Colegiados",
    textAdap: "Según el art. 20 de la Ley 40/2015, los órganos colegiados de las Administraciones Públicas tienen que estar integrados por:",
    optsAdap: { A: "Tres o más personas (Presidente, miembros y Secretario).", B: "Cinco o más personas.", C: "Dos o más personas." },
    correctAdap: "A",
    textOrig: "Según el art. 20 de la Ley 40/2015, de Régimen Jurídico del Sector Público, los órganos colegiados de las Administraciones Públicas tienen que estar integrados por:",
    optsOrig: { a: "Cinco o más personas.", b: "Tres o más personas.", c: "Dos o más personas.", d: "No hay un número determinado." },
    correctOrig: "b",
    norma: "Ley 40/2015, art. 20."
  },
  {
    id: "2023_57", exam: "2023", tema: "Tema 1 · Zonas Básicas de Salud",
    textAdap: "Conforme al art. 15 de la Ley 8/2010 de Salud de Castilla y León, las Zonas Básicas de Salud:",
    optsAdap: { A: "Constituyen el marco fundamental para el desarrollo de prestaciones y programas asistenciales y de salud.", B: "Son exclusivamente para atención especializada.", C: "Se establecen sin criterios geográficos." },
    correctAdap: "A",
    textOrig: "Conforme establece el art. 15 de la Ley 8/2010, de Ordenación del Sistema de Salud de Castilla y León, las Zonas Básicas de Salud:",
    optsOrig: { a: "Constituyen el marco fundamental para el desarrollo de las prestaciones, los programas asistenciales...", b: "Es el marco territorial de la Atención Especializada...", c: "Se establecerán atendiendo a criterios geográficos...", d: "Todas son correctas." },
    correctOrig: "a",
    norma: "Ley 8/2010, art. 15."
  },
  {
    id: "2023_58", exam: "2023", tema: "Tema 15 · Avocación",
    textAdap: "Según el art. 10 de la Ley 40/2015, contra el acuerdo de avocación:",
    optsAdap: { A: "No cabrá recurso alguno.", B: "Cabrá recurso de alzada.", C: "Cabrá recurso de reposición." },
    correctAdap: "A",
    textOrig: "Según el art. 10 de la Ley 40/2015, de Régimen Jurídico del Sector Público, contra el acuerdo de avocación:",
    optsOrig: { a: "Cabrá el recurso de alzada.", b: "Cabrá el recurso potestativo de reposición.", c: "Cabrá el recurso extraordinario de revisión.", d: "No cabrá recurso." },
    correctOrig: "d",
    norma: "Ley 40/2015, art. 10."
  },
  {
    id: "2023_59", exam: "2023", tema: "Tema 15 · Representación Administrativa",
    textAdap: "Según el art. 5 de la Ley 39/2015, indique en qué supuesto se presumirá la representación:",
    optsAdap: { A: "Para los actos y gestiones de mero trámite.", B: "Para formular solicitudes y recursos.", C: "Para interponer recursos administrativos." },
    correctAdap: "A",
    textOrig: "Según el art. 5 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, indique en qué supuesto o supuestos se presumirá la representación:",
    optsOrig: { a: "Para formular solicitudes.", b: "Para presentar declaraciones responsables.", c: "Para interponer recursos.", d: "Para los actos y gestiones de mero trámite." },
    correctOrig: "d",
    norma: "Ley 39/2015, art. 5."
  },
  {
    id: "2023_60", exam: "2023", tema: "Tema 15 · Recursos Administrativos",
    textAdap: "Según la Ley 39/2015, si el recurso de alzada se interpone ante el órgano que dictó el acto impugnado, éste deberá:",
    optsAdap: { A: "Remitirlo en el plazo de diez días al órgano competente junto con su informe y copia del expediente.", B: "Resolverlo directamente en un mes.", C: "Archivarlo de inmediato." },
    correctAdap: "A",
    textOrig: "Según la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, si el recurso de alzada se interpone ante el órgano que dictó el acto impugnado, éste deberá:",
    optsOrig: { a: "Resolverlo y notificarlo en el plazo de tres meses.", b: "Resolverlo y notificarlo en el plazo de un mes.", c: "Remitirlo en el plazo de diez días al órgano competente, junto con su informe y copia del expediente.", d: "Remitirlo en el plazo de un mes..." },
    correctOrig: "c",
    norma: "Ley 39/2015, art. 118."
  },
  {
    id: "2023_61", exam: "2023", tema: "Tema 15 · Procedimiento Administrativo",
    textAdap: "Los interesados en un procedimiento administrativo podrán comparecer y presentar alegaciones en el trámite de audiencia en un plazo:",
    optsAdap: { A: "No inferior a diez días ni superior a quince.", B: "No inferior a diez días ni superior a veinte.", C: "No inferior a quince días." },
    correctAdap: "B",
    textOrig: "Los interesados en un procedimiento administrativo podrán comparecer y presentar alegaciones en el trámite de audiencia en un plazo:",
    optsOrig: { a: "No inferior a diez días ni superior a quince.", b: "No inferior a diez días ni superior a veinte.", c: "No inferior a ocho días ni superior a quince.", d: "No inferior a ocho días ni superior a veinte." },
    correctOrig: "b",
    norma: "Ley 39/2015, art. 82."
  },
  {
    id: "2023_62", exam: "2023", tema: "Tema 15 · Nulidad y Anulabilidad",
    textAdap: "Según la Ley 39/2015, son actos anulables:",
    optsAdap: { A: "Cualquier infracción del ordenamiento jurídico, incluso la desviación de poder.", B: "Los actos dictados prescindiendo total y absolutamente del procedimiento.", C: "Los que tengan un contenido imposible." },
    correctAdap: "A",
    textOrig: "Según la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, son actos anulables:",
    optsOrig: { a: "Los actos expresos o presuntos contrarios al ordenamiento jurídico por los que se adquieren facultades o derechos...", b: "Los actos de la Administración que incurran en desviación de poder.", c: "Los que tengan un contenido imposible.", d: "Los dictados prescindiendo total y absolutamente del procedimiento..." },
    correctOrig: "b",
    norma: "Ley 39/2015, art. 48."
  },
  {
    id: "2023_63", exam: "2023", tema: "Tema 26 · Ofimática (Windows)",
    textAdap: "¿Con qué sistema de almacenamiento en la nube está integrado por defecto el Explorador de archivos de Windows 10?",
    optsAdap: { A: "OneDrive.", B: "Dropbox.", C: "Google Drive." },
    correctAdap: "A",
    textOrig: "¿Con qué sistema de almacenamiento de archivos en la nube está integrado por defecto el Explorador de archivos de Windows 10?:",
    optsOrig: { a: "OneDrive.", b: "Dropbox.", c: "Google Drive.", d: "Amazon S3." },
    correctOrig: "a",
    norma: "Manual de ofimática básica Windows 10."
  },
  {
    id: "2023_64", exam: "2023", tema: "Tema 28 · Internet y Redes",
    textAdap: "Cada ordenador conectado a Internet tiene una dirección para identificarse representada por una serie de números llamada:",
    optsAdap: { A: "IP", B: "DNS", C: "DOM" },
    correctAdap: "A",
    textOrig: "Cada ordenador conectado a Internet tiene una dirección para identificarse representada por una serie de números. ¿Cuál es su nombre?:",
    optsOrig: { a: "IP", b: "DNS", c: "COM", d: "DOM" },
    correctOrig: "a",
    norma: "Conceptos básicos de redes e Internet."
  },
  {
    id: "2023_65", exam: "2023", tema: "Tema 28 · Protocolos Web",
    textAdap: "¿Qué diferencia principal existe entre los protocolos HTTP y HTTPS?",
    optsAdap: { A: "HTTPS añade una capa de seguridad al integrar la encriptación de los datos.", B: "Son implementaciones idénticas de distintas empresas.", C: "HTTP está diseñado exclusivamente para móviles." },
    correctAdap: "A",
    textOrig: "HTTP y HTTPS son protocolos que permiten la transferencia de información entre un servidor web y un navegador. ¿Qué los diferencia?:",
    optsOrig: { a: "Son diferentes implementaciones realizadas por distintas empresas...", b: "HTTPS sólo funciona en los navegadores antiguos...", c: "HTTPS añade una capa de seguridad al integrar la encriptación de los datos en la transferencia de información.", d: "HTTP está diseñado para dispositivos de escritorio..." },
    correctOrig: "c",
    norma: "Seguridad en protocolos web."
  },
  {
    id: "2023_66", exam: "2023", tema: "Tema 15 · Administración Electrónica (ENI)",
    textAdap: "De acuerdo con la Ley 40/2015, el «Esquema Nacional de Interoperabilidad» comprende:",
    optsAdap: { A: "El conjunto de criterios y recomendaciones de seguridad, conservación y normalización de formatos y aplicaciones para la toma de decisiones tecnológicas.", B: "Únicamente la política de seguridad física.", C: "Normas exclusivas para el sector privado." },
    correctAdap: "A",
    textOrig: "De acuerdo con lo establecido en la Ley 40/2015, de Régimen Jurídico del Sector Público el “Esquema Nacional de Interoperabilidad”:",
    optsOrig: { a: "Tiene por objeto establecer la política de seguridad...", b: "Comprende el conjunto de criterios y recomendaciones en materia de seguridad, conservación y normalización de la información, de los formatos y de las aplicaciones que deberán ser tenidos en cuenta por las Administraciones Públicas para la toma de decisiones tecnológicas que garanticen la interoperabilidad.", c: "No es aplicable a los sistemas de salud...", d: "Está constituido por los principios básicos..." },
    correctOrig: "b",
    norma: "Ley 40/2015 (LRJSP) y RD ENI."
  },
  {
    id: "2023_67", exam: "2023", tema: "Tema 7 · Régimen Disciplinario Personal Estatutario",
    textAdap: "Según la Ley 2/2007 del Estatuto Jurídico del Personal Estatutario de Sacyl, se considera falta grave:",
    optsAdap: { A: "El incumplimiento de la programación funcional que comporte perjuicio para los usuarios por causa imputable al empleado.", B: "El abandono del servicio (falta muy grave).", C: "Falta de asistencia continuada no justificada superior a cinco días." },
    correctAdap: "A",
    textOrig: "Según la Ley 2/2007, de 7 de marzo, del Estatuto Jurídico del Personal Estatutario del Servicio de Salud de Castilla y León, se considera falta grave:",
    optsOrig: { a: "El incumplimiento de la programación funcional del centro o institución sanitaria que comporte perjuicio para los usuarios por causa imputable al empleado.", b: "El abandono del servicio.", c: "La falta de asistencia durante más de cinco días continuados...", d: "Todas las respuestas son correctas." },
    correctOrig: "a",
    norma: "Ley 2/2007 (CyL), régimen disciplinario."
  },
  {
    id: "2023_68", exam: "2023", tema: "Tema 19 · Seguridad Social",
    textAdap: "Según el art. 19.2 del RDL 8/2015 (LGSS), las bases de cotización tendrán como tope mínimo:",
    optsAdap: { A: "Las cuantías del salario mínimo interprofesional vigente en cada momento, incrementadas en un sexto.", B: "El SMI exacto sin incrementos.", C: "Las fijadas por la Ley de Presupuestos Generales del Estado." },
    correctAdap: "A",
    textOrig: "Según el art. 19.2 del texto refundido de la Ley General de la Seguridad Social, aprobado por el RDL 8/2015, las bases de cotización, en cada uno de sus regímenes, tendrán como tope mínimo:",
    optsOrig: { a: "Las cuantías del salario mínimo interprofesional vigente en cada momento, incrementadas en un quinto...", b: "Las cuantías del salario mínimo interprofesional vigente en cada momento, incrementadas en un sexto, salvo disposición expresa en contrario.", c: "Las cuantías fijadas por el Reglamento...", d: "Las cuantías fijadas para cada año por la correspondiente Ley de Presupuestos..." },
    correctOrig: "b",
    norma: "RDL 8/2015 (LGSS), art. 19.2."
  },
  {
    id: "2023_69", exam: "2023", tema: "Tema 3 · Estatuto de Autonomía de Castilla y León",
    textAdap: "El Estatuto de Autonomía de Castilla y León fue aprobado por:",
    optsAdap: { A: "Ley Orgánica 4/1983, de 25 de febrero.", B: "Ley Orgánica 14/1983.", C: "Ley Orgánica 4/1984." },
    correctAdap: "A",
    textOrig: "El Estatuto de Autonomía de Castilla y León fue aprobado por:",
    optsOrig: { a: "Ley Orgánica 4/1984, de 25 de febrero.", b: "Ley Orgánica 4/1983, de 25 de febrero.", c: "Ley Orgánica 14/1984, de 30 de noviembre.", d: "Ley Orgánica 14/1983, de 30 de noviembre." },
    correctOrig: "b",
    norma: "Estatuto de Autonomía de Castilla y León."
  },
  {
    id: "2023_70", exam: "2023", tema: "Tema 22 · Ley General de Sanidad",
    textAdap: "Según el art. 10 de la Ley 14/1986 (General de Sanidad), es un derecho de todos con respecto a las administraciones sanitarias:",
    optsAdap: { A: "A la información sobre los servicios sanitarios accesibles y requisitos de uso, confidencialidad, etc.", B: "A recibir asistencia privada gratuita.", C: "A elegir médico especialista internacional libremente." },
    correctAdap: "A",
    textOrig: "Según establece el art. 10 de la Ley 14/1986, General de Sanidad, será un derecho de todos con respecto a las administraciones públicas sanitarias:",
    optsOrig: { a: "A la información sobre los servicios sanitarios a que puede acceder y sobre los requisitos necesarios para su uso.", b: "A obtener los medicamentos y productos sanitarios...", c: "A la confidencialidad de toda la información relacionada con su proceso...", d: "Todas son correctas." },
    correctOrig: "d",
    norma: "Ley 14/1986, art. 10."
  },
  {
    id: "2023_71", exam: "2023", tema: "Tema 7 · Estatuto Marco",
    textAdap: "De acuerdo con el Estatuto Marco, la provisión de plazas del personal estatutario se regirá por los principios de:",
    optsAdap: { A: "Igualdad, mérito, capacidad y publicidad en la selección, además de planificación y coordinación.", B: "Libre designación exclusiva.", C: "Antigüedad rigurosa sin méritos." },
    correctAdap: "A",
    textOrig: "De acuerdo con el Estatuto Marco del personal estatutario de los servicios de salud, la provisión de plazas del personal estatutario se regirá por los siguientes principios básicos:",
    optsOrig: { a: "Igualdad, mérito, capacidad y publicidad en la selección, promoción y movilidad...", b: "Planificación eficiente de las necesidades...", c: "Coordinación, cooperación y mutua información...", d: "Todas son correctas." },
    correctOrig: "d",
    norma: "Ley 55/2003 (Estatuto Marco)."
  },
  {
    id: "2023_72", exam: "2023", tema: "Tema 1 · Estructura Consejería de Sanidad",
    textAdap: "El Servicio de Promoción de la Salud y de Salud Laboral de la Consejería de Sanidad de Castilla y León se encuentra adscrito a la Dirección General de:",
    optsAdap: { A: "Salud Pública.", B: "Calidad e Infraestructuras Sanitarias.", C: "Personal y Desarrollo Profesional." },
    correctAdap: "A",
    textOrig: "El Servicio de Promoción de la Salud y de Salud Laboral, dentro de la Consejería de Sanidad de la Junta de Castilla y León, se encuentra adscrito a la Dirección General:",
    optsOrig: { a: "De Calidad e Infraestructuras Sanitarias.", b: "De Salud Pública.", c: "De Planificación Sanitaria, Investigación e Innovación.", d: "De Personal y Desarrollo Profesional." },
    correctOrig: "b",
    norma: "Decreto de estructura orgánica de la Consejería de Sanidad."
  }
];

// Fusionamos este bloque final con el banco global manteniendo las preguntas anteriores de 2023
if (typeof QUESTION_BANK !== 'undefined') {
  // Aseguramos que no se dupliquen si ya estaban cargadas las anteriores
  const existingWithout2023 = QUESTION_BANK.filter(q => q.exam !== "2023");
  const current2023 = QUESTION_BANK.filter(q => q.exam === "2023");
  
  // Combinamos de forma limpia añadiendo las nuevas o reemplazando el set completo de 2023
  QUESTION_BANK.length = 0;
  // Si prefieres asegurar que estén todas las de 2023 de este bloque definitivo:
  QUESTION_BANK.push(...existingWithout2023, ...EXAM_2023_FINAL_DATA);
}
