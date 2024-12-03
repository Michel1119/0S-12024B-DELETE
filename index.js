import { childprocesses as childprocesses } from "./projects/child-processes.js";
import { ipc as ipc } from "./projects/ipc.js";
import { processesstate as processesstate} from "./projects/processes-state.js";

console.log("🧵programa sobre procesos🧵"); 
let option = process.argv[2]; 

switch (option){
      case "1": 
               childprocesses(); 
    break; 

    case "2": 
              ipc(); 
    break; 

    case "3":
                processesstate();
    break;       
default: 
        console.log("opcion invalida");       

}



