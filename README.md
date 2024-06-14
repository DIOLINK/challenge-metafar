# Proyecto en React con Vite de API de cotizaciones de acciones

Se requiere que se le desarrolle una interfaz web para graficar la cotización de una acción en tiempo real. El detalle del proyecto se describe a continuación. La aplicación permite a los usuarios:

# Requerimientos
- Al ingresar al sitio, nos debe de mostrar una tabla que liste de manera paginada todas las acciones disponibles con las siguientes columnas: Símbolo, Nombre, Moneda y Tipo. El símbolo debe de ser un link que permita ver el detalle de dicha acción. Dicha tabla debe de contar con un buscado por nombre de acción y otro por símbolo.
  
- Página de Detalle de Acción: esta página, nos mostrará en la cabecera los datos de la acción seleccionada. Luego podremos seleccionar los parámetros para graficar la cotización de la acción.

  - *Parámetro Tiempo real*: 
    - Al seleccionar esta opción, vamos a tener que graficar la cotización en base a la fecha del día. Al graficar esta opción, el gráfico debe actualizarse en forma automática según el intervalo seleccionado (cada 1min/5min/15min, según corresponda). Es decir, luego de por ejemplo 1 minuto, se debería actualizar solo el gráfico.

  - *Parámetro Histórico*:
    - Al seleccionar esta opción vamos a tener que graficar la cotización en base a los parámetros fecha y hora desde – fecha y hora hasta ingresados.
  
  - *Parámetro Intervalo*: 
    - Este parámetro define el intervalo de tiempo para graficar la cotización, los valores posibles son 1min / 5min/ 15min.

## TO DO
- [X] Para realizar el grafico se puede utilizar la librería de https://www.highcharts.com.
  
- [X] Desarrollar una aplicación web, en un repositorio público, utilizando una herramienta de versionado como GitHub, que responda a los requisitos descriptos.
  
- [X] Incluir en el repositorio un readme.md con los pasos para levantar la aplicación.
  
## Notas Técnicas
- [X] La arquitectura de la aplicación tiene que contener un Frontend.
  
   ### El stack tecnológico deberá ser:
    - [X]  React >=18 utilizando hooks.
    - [X]  Typescript
  

### BONUS 
- [X] Alternar la combinación de colores entre el modo claro y el oscuro.
---

## Uso
Una vez que la aplicación esté en funcionamiento, puedes interactuar con ella para ver los países, buscar, filtrar y explorar detalles sobre cada país. Además, puedes cambiar entre los modos claro y oscuro y experimentar con la interfaz en diferentes tamaños de pantalla.

## Configuración

Ten en cuenta que debes tener acceso a la terminal de tu sistema operativo, ademas de tener installados [Git](https://git-scm.com/downloads) y [Node](https://nodejs.org/es/download).

---

1. Clona este [repositorio](https://github.com/DIOLINK/challenge-metafar) en tu máquina local con SSH o HTTPS con los siguientes comandos:

   - #### HTTPS:
      ```shell
      git clone https://github.com/DIOLINK/challenge-metafar.git
      ```

   - #### SSH:
      ```shell
      git clone git@github.com:DIOLINK/challenge-metafar.git
      ```

2. Navega al directorio del proyecto colonado:
    ```shell
   cd challenge-metafar
   ```

3. Instala las dependencies con cualquiera de los siguientes comandos:

   - ### npm
      ```shell
      npm install
      ```

   - ### pnpm
      ```shell
      pnpm install
      ```

4. En la raiz del proyecto encontraras un archivo con el nombre de `template.env` el cual deberas renombra a `.env`.
   
5. Inicia la aplicación en modo de desarrollo:
       
      - ### npm
        ```shell
        npm run dev
        ```

      - ### pnpm
        ```shell
        pnpm dev
        ```