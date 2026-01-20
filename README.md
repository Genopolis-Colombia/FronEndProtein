FrontEndProtein – Módulo Web de Proteínas

**Descripción**

Este proyecto corresponde al módulo frontend web del microservicio de proteínas del proyecto Genopolis.
El frontend permite crear y consultar proteínas mediante una interfaz web sencilla, consumiendo los servicios REST expuestos por el backend desarrollado con arquitectura hexagonal.
Este módulo se desarrolló como evidencia de la integración entre interfaz web y lógica de negocio, según los requerimientos del componente formativo Construcción de aplicaciones con Java.

**Tecnologías utilizadas**

- HTML5
- CSS3
- JavaScript (Fetch API)
- Backend REST (Spring Boot)

**Funcionalidades implementadas**

1. Crear proteína

Formulario web para ingresar los datos de una proteína:

- Nombre FASTA
- Secuencia FASTA
- Fuente
- Organismo
- Clasificación
- EC Clasificación
- Autores
- Envío de datos al backend mediante POST /proteins
- Visualización del ID generado al crear la proteína
- 
2. Consultar proteína 

- Campo para ingresar el ID (UUID) de la proteína
- Consumo del endpoint GET /proteins/{id}
- Visualización de los datos de la proteína en pantalla

**Flujo de funcionamiento**

1. El usuario abre la interfaz web (proteina.html)
2. Se crea una proteína mediante el formulario (POST)
3. El backend responde con el ID generado
4. El usuario consulta la proteína usando ese ID (GET)
5. Los datos se muestran en la interfaz web
6. Este flujo evidencia la correcta comunicación entre frontend y backend.

**Requisitos para la ejecución**

1. Backend de proteínas en ejecución
URL base: http://localhost:8080
Endpoints disponibles:
POST /proteins
GET /proteins/{id}
Navegador web moderno (Chrome, Zafari)

2. Cómo ejecutar el frontend
Iniciar el backend de proteínas
Abrir el archivo: FrontEndProtein/proteina.html
directamente en el navegador
Usar los formularios para crear y consultar proteínas