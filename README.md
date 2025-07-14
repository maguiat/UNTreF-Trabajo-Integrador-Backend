# 🛍️ API REST de Productos - Catálogo de api/productos 

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)](https://www.mongodb.com/)

API RESTful para gestión de catálogo de api/productos, desarrollada como trabajo integrador para el curso de Backend de UNTreF.

## 📚 Índice 
- [🛍️ API REST de Productos - Catálogo de api/productos](#️-api-rest-de-productos---catálogo-de-apiproductos)
  - [📚 Índice](#-índice)
  - [✨ Características](#-características)
  - [✅ Lista de Tareas](#-lista-de-tareas)
  - [🗂️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
  - [⚙️ Instalación](#️-instalación)
    - [1. Clonar el repositorio](#1-clonar-el-repositorio)
    - [2. Instalar dependencias](#2-instalar-dependencias)
    - [3. Configurar variables de entorno](#3-configurar-variables-de-entorno)
    - [4. Iniciar la aplicación](#4-iniciar-la-aplicación)
  - [📡 Endpoints](#-endpoints)
    - [🎯 CRUD Básico](#-crud-básico)
    - [🔍 Endpoints Adicionales](#-endpoints-adicionales)
  - [🧪 Pruebas con REST Client](#-pruebas-con-rest-client)
  - [💻 Tecnologías](#-tecnologías)
    - [Backend](#backend)
    - [Base de Datos](#base-de-datos)
    - [Herramientas de Desarrollo](#herramientas-de-desarrollo)
    - [Dependencias principales](#dependencias-principales)
  - [👥 Autores](#-autores)


## ✨ Características
- **Gestión Completa de Productos**: Implementación de todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
- **Endpoints Avanzados**: Búsquedas por nombre, filtrado por categoría y rango de precios.
- **Carga Masiva**: Endpoint para agregar múltiples productos en una sola petición.
- **Base de Datos NoSQL**: Persistencia de datos utilizando MongoDB.
- **Configuración Segura**: Manejo de datos sensibles (como la URI de la base de datos) a través de variables de entorno.
- **Pruebas Simplificadas**: Incluye un archivo api.http para testear los endpoints fácilmente con la extensión REST Client.

## ✅ Lista de Tareas
- [x] Elegir un archivo .json del directorio /data como catálogo (api/productos.json).
- [x] Conectar la aplicación a una base de datos de MongoDB.
- [x] Utilizar un archivo .env para gestionar variables de entorno.
- [x] Crear un Schema de Mongoose que se corresponda con la estructura de datos.
- [ ] Implementar una lógica para poblar la base de datos una única vez.
- [x] Implementar los endpoints del CRUD Básico.
- [x] Implementar los 4 endpoints adicionales de filtrado y búsqueda.
- [x] Incluir el archivo api.http para facilitar las pruebas.
- [x] Asegurar que .env y node_modules estén correctamente ignorados en .gitignore.

## 🗂️ Arquitectura del Proyecto 

```
UNTREF-Trabajo-Integrador-Backend/
├── 📄 app.js                      # Punto de entrada principal
├── 📄 api.http                    # Pruebas HTTP
├── ⚙️  config/
│   └── 📄 database.js             # Configuración de MongoDB
├── 🎮 controllers/
│   ├── 📄 producController.js     # Controladores
├── 📊 data/
│   └── 📄 (varios archivos .json) # Datos de ejemplo
├── 🏗️ models/
│   └── 📄 producto.js             # Modelo de Mongoose
├── 🛣️ routes/
│   └── 📄 productRoutes.js        # Definición de rutas
├── 📋 package.json                # Dependencias y scripts
└── 📚 README.md                   # Documentación
```

## ⚙️ Instalación
> [!IMPORTANT]  
> Asegúrate de tener **Node.js** (versión 18 o superior) y **MongoDB** instalados en tu sistema.

<details>
<summary><strong>📝 Pasos de instalación detallados</strong></summary>

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd "TP integrador - Backend"
```

### 2. Instalar dependencias
> [!TIP]  
> Este proyecto utiliza **pnpm**, si no lo tienes instalado, puedes instalarlo con `npm install -g pnpm`.
```bash
# Usando pnpm (recomendado)
pnpm install

# O usando npm
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
MONGODB_URI = 'mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority'
PORT =
```
La aplicación se ejecuta por defecto en el puerto **3000**.

### 4. Iniciar la aplicación
```bash
# Modo desarrollo (con hot reload)
pnpm dev

# Modo producción
pnpm start
```

</details>

---
## 📡 Endpoints

### 🎯 CRUD Básico

| Método | Endpoint                      | Descripción                                      |
|--------|-------------------------------|--------------------------------------------------|
| **GET**    | `/api/productos`              | Devuelve una lista de todos los productos        | 
| **GET**    | `/api/productos/:codigo`      | Busca y devuelve un producto por su código       | 
| **POST**   | `/api/productos`              | Crea un nuevo producto en la base de datos       | 
| **PUT**    | `/api/productos/:codigo`      | Actualiza un producto existente                  | 
| **DELETE** | `/api/productos/:codigo`      | Elimina un producto                              | 

### 🔍 Endpoints Adicionales

| Método | Endpoint                          | Descripción                                  | Ejemplo|
|--------|-----------------------------------|----------------------------------------------|----------------
| **GET**   | `/api/productos/buscar?q=query`         | Búsqueda por nombre o descripción            |http://localhost:3000/api/productos/buscar?q=pantalón
| **GET**   | `/api/productos/categoria/:nombre`      | Filtra por categoría                         |http://localhost:3000/api/productos/categoria/Jeans
| **GET**   | `/api/productos/precio/:min-:max`       | Filtra por rango de precios                  |http://localhost:3000/api/productos/precio/0-100
| **POST**  | `/api/productos/masivo`                 | Carga masiva de api/productos (array JSON)   ||


## 🧪 Pruebas con REST Client
Para probar los endpoints de forma sencilla, puedes usar la extensión REST Client para Visual Studio Code.
1. Abre el archivo `api.http` que se encuentra en la raíz del proyecto.
2. Verás un texto `Send Request` encima de cada una de las peticiones definidas.
3. Haz clic ahí para ejecutar la petición y ver la respuesta del servidor en una nueva pestaña.

## 💻 Tecnologías
<details>
<summary><strong>🛠️ Stack tecnológico utilizado</strong></summary>

### Backend
- **[Node.js](https://nodejs.org/)** - Runtime de JavaScript
- **[Express.js](https://expressjs.com/)** - Framework web minimalista
- **[Mongoose](https://mongoosejs.com/)** - ODM para MongoDB

### Base de Datos
- **[MongoDB](https://www.mongodb.com/)** - Base de datos NoSQL

### Herramientas de Desarrollo
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes eficiente
- **Node --watch** - Hot reload nativo de Node.js

### Dependencias principales
```json
{
  "express": "^5.1.0",
  "mongoose": "^8.16.0"
}
```

</details>

---

## 👥 Autores 

-   [Magalí Terenzi](https://github.com/maguiat)
-   [Juan Nebbia](https://github.com/JuanNebbia)
-   [Fabio Driz Zt](https://github.com/FabioDrizZt)