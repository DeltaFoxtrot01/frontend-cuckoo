import store from "tools/redux/Store";
import { standardSetHome } from "standard/reducer/StandardActions";


/**
 * Sets the screen to load
 */
export function setHome(){
  store.dispatch(
    standardSetHome()
  );
}
