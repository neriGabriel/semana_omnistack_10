const socketio = require('socket.io');
const parseStringAsArray = require('./Utils/parseStringAsArray');
const getDistanceFromLatLonInKm = require('./Utils/calculateDistance');
const connections = [];

let io;
exports.setUpWebSocket = (server) => {
   io = socketio(server);
   io.on('connection', socket => {
       const {latitude, longitute, techs} = socket.handshake.query;

       connections.push({
           id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitute: Number(longitute)
            },
            techs: parseStringAsArray(techs)
       });
   });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return getDistanceFromLatLonInKm(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.include(item))
    });
 };

 exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
 };