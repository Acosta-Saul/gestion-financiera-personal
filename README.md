# Aplicación de Gestión de Finanzas Personales

## 📜 Descripción
La aplicación de gestión de finanzas personales permite a los usuarios llevar un mejor control de su dinero mediante una interfaz amigable e intuitiva. La plataforma está diseñada para facilitar el registro y seguimiento de entradas y salidas de dinero, brindando una visión clara de las finanzas personales para una mejor toma de decisiones económicas.

## 📝 Definición del Problema
El manejo inadecuado de las finanzas personales es común, especialmente entre los jóvenes, quienes a menudo no conocen cuánto ganan ni cuánto gastan al mes. Esta falta de control sobre sus finanzas genera problemas como la imposibilidad de ahorrar o invertir. La aplicación busca centralizar un histórico de los movimientos financieros para proporcionar claridad y fomentar un mejor manejo del dinero.

### 🎯 Público Objetivo
Esta aplicación está dirigida a personas entre 20 y 26 años que buscan mejorar el control de sus finanzas personales. La idea es ayudar a los jóvenes a visualizar, administrar y analizar su flujo de dinero para poder ahorrar o invertir de manera más eficiente.

## 🛠️ Tecnologías Utilizadas
- **Frontend**: React
- **Backend**: NestJS
- **Base de Datos**: PostgreSQL 17
- **Inteligencia Artificial**:
  1. Copilot (Código)
  2. Gemini (Imagenes y logo)
  3. V0 Vercel (Generación de frontend)
  4. ChatGPT (Generador de Readme)

## ⚙️ Funcionalidades Claves
- **Ingresar Asientos**: Permite registrar entradas de dinero o gastos.
- **Modificar Asientos**: Facilita la modificación de registros existentes.
- **Eliminar Asientos**: Permite eliminar registros erróneos o no deseados.
- **Búsqueda de Asientos**: Los usuarios pueden buscar registros por **Categoría**, **Monto** o **Descripción**.

## 🚧 Limitaciones
- Falta de conocimientos técnicos para desplegar base de datos postgres en la nube.
- Falta de conocimientos técnicos para incorporar librerías de estilos al proyecto.

## 🔧 Mejoras Futuras
- Realizar búsquedas más profundas y detalladas.
- Integración con una API externa para obtener la tasa del BCV y permitir el manejo de doble moneda.
- Protección de rutas para mejorar la seguridad de la aplicación.

## 🖥️ Instrucciones para Ejecutar Localmente

### ⚡ Backend
1. Ejecuta el siguiente comando para instalar las dependencias dentro de la carpeta Backend:
   ```bash
   npm install
2. Para iniciar el servicio de backend localmente:
   ```bash
   npm run start
### 🌐 Frontend
1. Para instalar dependencias dentro de la carpeta Frontend:
   ```bash
   npm install
2. Para iniciar el servicio de frontend localmente:
   ```bash
   npm run dev
   
## 🚀 Despliegue en Render

### Backend
1. Crear una nueva aplicación en **Render**.
2. Selecciona **Backend** y conectar repositorio de **NestJS**.
3. Configura los **environment variables** necesarias para **PostgreSQL**.
4. Habilitar el servicio de backend correctamente.

### Frontend
1. Crear una nueva aplicación en **Render** para el frontend.
2. Conecta repositorio de **React**.
3. Configura las variables de entorno, como la URL del backend si es necesario.
4. Despliega el servicio y asegúrate de que el frontend se conecta correctamente al backend.

## 📊 Despliegue de la Base de Datos en Render
 
1. Crear un Servicio de Base de Datos
3. Elige **PostgreSQL** como tipo de base de datos.
4. Configurar el nombre de la base de datos, el tamaño (plan gratuito) y la región donde alojar la base de datos.

5. Creado la base de datos, Render otorgara las crendenciales de la misma:
   - **Host**
   - **Database Name**
   - **Username**
   - **Password**
   - **Port**
6. Ir a la aplicación backend en **Render**.
7. En el menú de la izquierda, seleccionar **Environment**.
8. Añadir las siguientes variables de entorno con los valores proporcionados por Render:
   - `DB_HOST`: El host de la base de datos.
   - `DB_NAME`: El nombre de la base de datos.
   - `DB_USER`: El nombre de usuario de la base de datos.
   - `DB_PASSWORD`: La contraseña de la base de datos.
   - `DB_PORT`: El puerto de la base de datos (generalmente es `5432` para PostgreSQL).
9. Asegúrar que la aplicación **NestJS** tienes configurado el ORM TypeORM para conectarse a la base de datos.
10. Utilizar las variables de entorno previas configuradas en el paso anterior para establecer la conexión en el archivo de configuración.
11. Reiniciar el servicio de backend en **Render** para que los cambios tomen efecto.
12. En el panel de **Render**, seleccionar la base de datos y acceder a la sección de **Logs**.
13. Verificar que no haya errores relacionados con la conexión y el backend esté interactuando correctamente con la base de datos.
14. Conexion lista para trabajar.

## 🤖 Uso de Inteligencias Artificiales en el Proyecto

### 1. **Copilot (Código)**
**Cómo ayudó:**
- **Autocompletado y sugerencias de código**: Durante el desarrollo del proyecto, **GitHub Copilot** ayudó a acelerar la escritura del código al proporcionar sugerencias de autocompletado en tiempo real y generar fragmentos de código para tareas repetitivas, como configuraciones de servidores, manejo de rutas, y validaciones de datos.
- **Solución de problemas**: Cuando surgieron bloqueos o dudas sobre la implementación de ciertas funciones, Copilot proporcionó soluciones y enfoques alternativos, optimizando tiempos de desarrollo.

**Impacto:**
- **Aceleración del desarrollo**: Gracias a las sugerencias automáticas y la ayuda para escribir código más eficiente, se redujeron considerablemente los tiempos de desarrollo del backend y el frontend.
- **Mejora en la calidad del código**: Las recomendaciones de Copilot contribuyeron a evitar errores comunes y garantizar una estructura de código más limpia y mantenible.

### 2. **Gemini (Imágenes y Logo)**
**Cómo ayudó:**
- **Generación de imágenes**: **Google Gemini** fue utilizado para crear imágenes, gráficos y elementos visuales como el logo y representaciones gráficas para el proyecto, ayudando a definir la identidad visual de la aplicación.
- **Optimización de diseño**: Gemini ayudó a generar prototipos visuales que fueron fácilmente integrados en el frontend, mejorando la estética general de la plataforma.

**Impacto:**
- **Fortalecimiento de la identidad de marca**: El uso de imágenes generadas por Gemini contribuyó a que la aplicación tuviera una estética atractiva y moderna, lo cual es importante para atraer al público objetivo de jóvenes entre 20-26 años.
- **Mayor atractivo visual**: La calidad y coherencia visual de los elementos generados mejoraron la experiencia del usuario, haciendo que la aplicación fuera más atractiva e intuitiva.

### 3. **V0 Vercel (Generación de Frontend)**
**Cómo ayudó:**
- **Generación rápida del frontend**: **V0 Vercel** facilitó la creación rápida de interfaces frontend utilizando su capacidad para generar componentes automáticamente y optimizar el diseño para dispositivos móviles y escritorios.
- **Optimización del rendimiento**: Al aprovechar las capacidades de Vercel, se mejoró la velocidad de carga de la aplicación y la eficiencia del frontend, asegurando que la experiencia del usuario fuera ágil y sin interrupciones.

**Impacto:**
- **Mejora en la experiencia de usuario**: La generación automática de componentes y la optimización del frontend con Vercel resultó en una interfaz rápida y sin errores, lo cual es crucial para mantener a los usuarios interesados y comprometidos con la aplicación.
- **Despliegue eficiente**: Vercel permitió realizar un despliegue más sencillo y eficiente, reduciendo la complejidad y los errores comunes durante el proceso de lanzamiento de nuevas funcionalidades.

### 4. **ChatGPT (Generador de Readme)**
**Cómo ayudó:**
- **Generación de documentación**: **ChatGPT** fue utilizado para generar el README del proyecto, facilitando la redacción y estructuración de toda la documentación técnica de manera coherente y clara.
- **Asistencia en explicaciones y detalles**: ChatGPT proporcionó ejemplos de uso, instrucciones de instalación y despliegue, lo que permitió crear una guía fácil de seguir tanto para desarrolladores como usuarios finales.

**Impacto:**
- **Documentación profesional**: La capacidad de generar documentación precisa y bien estructurada en poco tiempo ayudó a mejorar la calidad del proyecto, asegurando que otros desarrolladores y usuarios pudieran entender fácilmente cómo interactuar con la aplicación.
- **Reducción de tiempo en la escritura de documentación**: ChatGPT permitió que el equipo ahorrara tiempo en la creación de contenido técnico, dejando más espacio para el desarrollo de nuevas funcionalidades y mejoras.

## 🏆 Impacto General de las Inteligencias Artificiales
El uso de estas herramientas de **inteligencia artificial** tuvo un impacto significativo en la eficiencia, la calidad y la estética del proyecto. **GitHub Copilot** aceleró la escritura de código, **Google Gemini** mejoró el diseño visual, **V0 Vercel** optimizó el frontend y **ChatGPT** facilitó la creación de documentación, permitiendo que el proyecto fuera entregado más rápido y con una calidad superior.

