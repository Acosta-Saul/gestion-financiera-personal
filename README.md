# Aplicación de Gestión de Finanzas Personales

## 📜 Descripción
La aplicación de gestión de finanzas personales permite a los usuarios llevar un mejor control de su dinero mediante una interfaz amigable e intuitiva. La plataforma está diseñada para facilitar el registro y seguimiento de entradas y salidas de dinero, brindando una visión clara de las finanzas personales para una mejor toma de decisiones económicas.

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

## 📝 Definición del Problema
El manejo inadecuado de las finanzas personales es común, especialmente entre los jóvenes, quienes a menudo no conocen cuánto ganan ni cuánto gastan al mes. Esta falta de control sobre sus finanzas genera problemas como la imposibilidad de ahorrar o invertir. La aplicación busca centralizar un histórico de los movimientos financieros para proporcionar claridad y fomentar un mejor manejo del dinero.

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
