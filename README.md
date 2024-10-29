# Test FrontEnd

Test FrontEnd, incluye Landing Page, Autenticación con usuario y contraseña en local, api que se ejecuta en local y tailwindcss para estilar

Bug detectado inesperado, no aparece la lista de la api en la modal, para solucionarlo, precionar Space, en el input de busqueda de la modal

## Clonar el repositorio

Para clonar este repositorio, ejecuta el siguiente comando en tu terminal:

```
git clone https://github.com/daviardev/test-frontend.git
```

## Requerimientos
- Versión de node recomendada, 20.18.0 LTS >=
- Tener GIT instalado
- Tener npm instalado

## Instalación y ejecución local

Sigue estos pasos para instalar las dependencias y ejecutar el proyecto en tu entorno local:

1. Navega al directorio del proyecto:
   ```
   cd test-frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Ejecuta el proyecto:
   ```
   npm run dev
   ```

El proyecto se ejecutará en `http://localhost:3000`.

## Ejecutar la API en local

Para iniciar la API en tu entorno local, ejecuta el siguiente comando:

```
npx json-server ./app/api/db.json --port 8000
```

La API se ejecutará en `http://localhost:8000`.

## Credenciales para el dashboard

Utiliza las siguientes credenciales para acceder al dashboard:

- Username: john
- Password: Admin123

## Generación de tokens secretos

Para generar los tokens secretos necesarios, sigue estos pasos:

1. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

   ```
   SECRET_KEY=
   JWT_SECRET=
   PORT=8000
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=
   ```

2. Para generar los valores de `SECRET_KEY`, `JWT_SECRET` y `NEXTAUTH_SECRET`, ejecuta el siguiente comando una vez por cada variable:

   ```
   openssl rand -base64 32
   ```

3. Copia el resultado de cada ejecución y asígnalo como valor a la variable correspondiente en el archivo `.env.local`.

## Información adicional

- Puerto de la API: 8000
- URL de la API: http://localhost:8000
- Puerto del proyecto: 3000
- URL del proyecto: http://localhost:3000
