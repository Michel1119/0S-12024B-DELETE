import { fork } from  'child_process'
 
 
export function ipc(){
    console.log("=== comunicacion entre procesos ===");
 
 
    //creando un subproceso de node
    const child = fork('./projects/child.js');
 
    // 2 registrar eventos
    child.on('message',(message) => {
        console.log(` 📩👶➡️🎅: ${message.message}`)
    });
   
    //enviando un mnesaje al proceso hijo  
    child.send({message: 'merry christmas'});
 
}