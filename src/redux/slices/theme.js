/**En este caso estamos creando un Slice para llevar de manera reactiva el color de fondo de las diferentes
 * vistas de la aplicacion. Este color será seleccionado en la pantalla inicial y debe ser consultado y 
 * cambiado por el resto de pantallas de manera reactica.
 * 
 * Para crear estos Slices se recomienda haber creado primero una carpeta root con mobre redux, esto es para
 * mejor organizacion. En esta carpeta pondremos otra llamada Slices y en su interior podremos crear los 
 * diferentes slices. Los slices en este caso lo que nos estan permitiendo es simplificar el proceso de 
 * combinar los reducers con las actions para que todo sea mas facil.
 */
import { createSlice } from "@reduxjs/toolkit";//debes importar esto para poder crear el Slice

/**Para que tengas todo mas organizado se recomienda crear esta constante intialState que te va a permitir
 * establecer el estado inicial de los elementos que vas a manejar en el reducer. Unca cosa aqui es importante
 * y es que debes saber que estos elementos son los que podras acceder despues mediante el store. Es decir al
 * utilizar esto estas creando por decirlo de alguna manera los valores a los cuales peudes accedeer en el store.
 * Recuerda que el store tiene contexto global y puedes acceder desde cualquier elemento del DOM.
 */
const initialState = {
    color: "#82e884"
};

/**createSlice es lo que utilizamos para crearlo ;) . Entonces fijate que lo creamos como una constante
 * y el nombre se lo ponemos utilizando camelCase. Ahora la funcion createSlice recibe un objeto con las
 * siguientes caracteristicas:
 * name: el nombre del slice, recomiendo utilizar el mismo de las constante pero minusculas y - para espacios
 * initialState: el estado inicial. Esto lo definimos antes.
 * reducers: es un objeto con los reducers declarados. en este caso tenemos solo uno pero pueden haber mas.
 * los reducers son los que maneja nel estado. En este caso como solo cambiaremos un color pues con uno nos basta.
 * 
 */
const themeSlice = createSlice({
    name: "theme-slice",//nombre como la constante pero minuscula y "-" para espacios
    initialState,//estado incial declarado anteoriormente, esto es para mejor organizacion.
    reducers: {//En este caso solo un reducer para cambiar el color
        setThemeColor(state,action){//Definicion del reducer
            state.color=action.payload.color;//Seteando el color con el payload de la action. Aqui debes analizar siempre que viene en el payload para obtener la info que necesitas.
        }
    }
});

const {actions,reducer} = themeSlice;//Aqui haciendo object destructuring para quedarnos con actions y reducer.

/**EStableciendo el nombre de la action para exportarla. Recomiendo ponerle el mismo nombre que le pusiste
 * al reducer que declaraste en el slice.
*/
const {setThemeColor} = actions;

/** Exportando la action para qu ese pueda utilizar luego. */
export {setThemeColor};

/**Exportando el reducer por default. Este reducer es el que importas despues en el store cuando declaras
 * el uso de los reducers.
*/
export default reducer;

