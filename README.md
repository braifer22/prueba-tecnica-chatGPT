# Prueba Técnica: Dashboard de Usuarios

## Objetivo:

Crear una pequeña aplicación que permita ver, buscar y filtrar usuarios de una API pública.

## Requisitos:

### 1. Consumo de API

Utiliza la siguiente API gratuita para obtener datos de usuarios:  
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

-   **Fetch Data:**
    -   Al cargar la aplicación, obtén los usuarios y muéstralos en pantalla.

### 2. Funcionalidad Requerida

-   **Lista de usuarios:**  
    Muestra los nombres y correos electrónicos de los usuarios en una tabla o lista.

-   **Búsqueda:**  
    Agrega un campo de entrada para buscar usuarios por nombre.

-   **Filtrado:**  
    Agrega un botón para filtrar usuarios que pertenezcan a una ciudad específica (usa el campo `address.city` de la API).

### 3. Diseño y Responsividad

-   **Diseño limpio y funcional:**

    -   Usa HTML y CSS para que la lista sea clara y legible.
    -   La interfaz debe ser responsiva y funcionar en dispositivos móviles y de escritorio.

-   **Opcional:**  
    Si tienes tiempo, agrega estilos personalizados con librerías como TailwindCSS o Bootstrap.

### 4. Uso de React (Opcional)

Si estás cómodo con React, implementa:

-   **Estados:**
    -   Maneja la lista de usuarios, el texto de búsqueda y los filtros.
-   **Componentes:**
    -   Divide la app en componentes como `UserList`, `SearchBar`, y `FilterButton`.

## Extensiones Avanzadas (Opcional)

-   **Paginación:**  
    Divide la lista de usuarios en páginas con 5 usuarios por página.

-   **Estado de carga y errores:**

    -   Muestra un mensaje mientras los datos se cargan.
    -   Maneja errores si la API no responde correctamente.

-   **Eliminar usuario:**  
    Agrega un botón para eliminar un usuario de la lista (solo localmente).

## Entrega

1. **Sube tu código a GitHub**.
2. Incluye un archivo `README.md` con instrucciones para ejecutar la aplicación.
3. Opcional: Sube el proyecto a un hosting gratuito como Vercel o Netlify.

## Evaluación:

Esta prueba evalúa:

1. **Conocimientos básicos:** HTML, CSS, JS, React (si lo usas).
2. **Consumo de API:** Habilidad para manejar datos externos.
3. **Resolución de problemas:** Cómo implementas funcionalidades comunes como búsqueda y filtrado.

¡Buena suerte!
