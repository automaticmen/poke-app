/**En el fichero de las actions es donde declaramos como tal las acciones que seran llamadas desde los
 * componentes para echar a andar el mecanismo redux y setear los valores del estado. Este fichero lo 
 * creas tu mismo. Lo primero es importar createAction.
 * 
 * Luego debes improtar el Slice pero para que no te entre en conflicot con el nombre puedes ponerle el
 * sufijo Slice.
 * 
 * Luego utilizamos el metodo createAction. Recordar que el nombre es en MAYUSCULAS y utilizando "_" para
 * los espacios.
 * 
 * Luego se declara la funcion que será llamada para realizar los cambios de color en este caso.
 */
import { createAction } from "@reduxjs/toolkit";//Importar createAction

import {setThemeColor as setThemeColorSlice} from "../slices/theme";//Importar el slice con el sufijo para qu eno haya tema con el nombre.

/**Crear la accion. Recuerda mayusculas y "_" para espacios. Para que no haya lios utiliza el mismo nombre
 * que usaste para nombrar el reducer: setThemeColor.
 */
export const setThemeColor = createAction("SET_THEME_COLOR");

/** Ahora esta es la funcion coo tal que van a llamar desde los componentes. Le puedes poner el nombre
 * que quieras. En este caso para no confundirte trata de no ponerle el mismo nombre que le hayas puesto
 * a algun slice o reducer. En este caso fijate que recibe un parametro el color. En su interior se hacen
 * los dispatch. En este caso solo uno porque es sencilla pero puedn haber mas. Debes tratar de utilizar
 * try catch, es una buena practica.
 * 
 * Fijate en la estructura. primero parametros, luego (dispatch) y luego definicion de la funcion como tal.
 */
export const setColorForAll = (color) => (dispatch) => {
    /**Importante fijate que el color pasa como un objeto. Ademas fijate se llama el reduer importado al 
     * que le pusiste el sufijo Slice */
    dispatch(setThemeColorSlice({color}));
};