import  { exec } from 'child_process'
import { cpuUsage, memoryUsage } from 'process';
 
 
export function processesstate(){
    console.log("=== Estado de procesos ===");
 
    //obteniendo infromarcion del proceso actual
    console.log(`ID del proceso: ${process.pid}`);
    console.log(`memory usage: ${JSON.stringify(process.memoryUsage(),null, '\t')}`);
    console.log(`CPU time: ${JSON.stringify(process.cpuUsage(), null, '\t')}`);
 
 
//evento del proceso
//evento close
process.on('exit', (code) => {
    console.log(`➡️ proceso finaliza con el codigo  ${code}`)
});
 
 
}
 