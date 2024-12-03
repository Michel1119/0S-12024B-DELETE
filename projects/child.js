process.on('message', (message) =>{
    console.log(`📩🎅➡️👶: ${message.message}`)
 //respondemos mensaje del padre
 process.send({message : ' 🎄 and a happy new year 🎄'});  
 }); 
 