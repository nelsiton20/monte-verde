# Monte Verde
Estos son los pasos para que logres ejecutar el proyecto.

## Instalación
1. Clona el repositorio:
    ```
    git clone <URL_DEL_REPOSITORIO>
    cd monte-verde
    ```

2. Crea y activa un entorno virtual
    ```
    python -m venv env
    env\Scripts\activate  # esto activa el entorno virtual
    ```

3. Instala las dependencias
    ```
    pip install -r requeriments.txt
    ```

4. Ejecuta el servidor de desarrollo
    ``` 
    cd monte_verde
    py manage.py runserver
    ```

5. Accede a la aplicación en `http://localhost:8000`