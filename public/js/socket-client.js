
const socket= io();

socket.on('connect',()=>{
    console.log('Connected',socket.id);

})
const payload={
    mensaje: "Hello World",
    uid:123,
    fecha:'nov 22,2022'
}
socket.emit('mensaje-de-cliente',
    payload,
    (data)=>{
        console.log('Respuesta a tu mensaje',data);
});
socket.on('mensaje-de-server',(payload)=>{
    console.log(payload);
})
socket.on('disconnect',()=>{
    console.log('Disconnected');
})
