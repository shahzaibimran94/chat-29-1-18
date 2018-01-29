var fs = require('fs');

var options = {
    key: fs.readFileSync('/etc/nginx/ssl/twodegrees.key'),
    cert: fs.readFileSync('/etc/nginx/ssl/twodegrees.io.chained.crt')
};

//const express = require('express');
const path = require('path');
var http = require('https');
var app = require('https').createServer(options);
var io = require('socket.io').listen(app);
var xmpp = require('node-xmpp');

//const app = express();
const port = process.env.PORT || 4200;

//app.use(express.static(path.join(__dirname, 'dist')));

// http.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

var sockets = {};
var connectedUsers = [];
var clientsHandles = {};

function setChatSocket(socket, data) {
    sockets["chat-user-" + socket] = data;
}

function getChatSocket(socket) {
    return sockets["chat-user-" + socket];
}

function deleteChatSocket(socket) {
    delete sockets["chat-user-" + socket];
}

function reconnect(userId,name){
    let connection = new xmpp.Client({
        jid: userId + '@testing.twodegrees.io',
        password: userId,
        host: 'testing.twodegrees.io',
        port: 5222,
        reconnect: true
    }, function (err) {
        if (err) throw (err);
        console.log('connection error', err);
    });
    
    connection.on('error', (err) => { console.log(err); });
    
    connection.on('online', () => {  
        console.log(name +' is online');              
        connection.send(new xmpp.Element('presence', {type: 'available'}).c('show').t('chat'));            
    });
}

//const server = http.createServer(options);

//const io = socketIO.listen(server);

io.on('connection', (socket) => {

    socket.on('user_online',(userId,name) => {
        
        socket.soketid = userId;
        setChatSocket(userId, socket);
        if(connectedUsers.length > 0){
            var found = false;

            for(var i=0;i < connectedUsers.length;i++){
                if(connectedUsers[i].chat_id == userId){
                    found = true;
                    break;
                }
            }
            if(!found) {
                const data = { chat_id : userId };
                connectedUsers.push(data);
            }
        }else{
            const data = { chat_id : userId }
            connectedUsers.push(data);
        }
        
        console.log(connectedUsers);

        io.emit('users-status',connectedUsers);

        let jid = userId + '@testing.twodegrees.io';
        let connection = new xmpp.Client({
            jid: userId + '@testing.twodegrees.io',
            password: userId,
            host: 'testing.twodegrees.io',
            port: 5222
        }, function (err) {
            if (err) throw (err);
            console.log('connection error', err);
        });
        
        connection.on('error', (err) => { console.log(err); });
        
        connection.on('offline', (e) => {
            console.log(name +' is offline');
            console.log(e);
            io.emit('disconnect');
            reconnect(userId,name);
        });
        
        connection.on('online', () => {  
            console.log(name +' is online');              
            connection.send(new xmpp.Element('presence', {type: 'available'}).c('show').t('chat'));            
        });
        //returns current online users
        // connection.on('stanza', function (stanza) {        
        //     if (stanza.is('presence') && (stanza.attrs.type !== 'error')) {
        //         console.log(stanza.attrs.type,stanza.attrs.from);
        //         io.emit('users-status', {
        //             status: stanza.attrs.type,
        //             user_id: stanza.attrs.from,
        //             users_chat_id:JSON.stringify(connectedUsers) 
        //         });
        //     }
        // });
        //name,msg,to,msg_id
        socket.on('send-message', (data) => {
            console.log(data.sname,":",data.message)
            var message_data = {
                        "mediaURL": data.mediaURL, 
                        "messageId": 1,
                        "isHTML": false,
                        "serverMsgts": data.msgts,
                        "msgts": data.msgts,
                        "rid": data.rid,
                        "sname": data.sname,
                        "text": data.message,
                        "sid": data.sid,
                        "type": data.type,
                        "rname": data.rname,
                        "imgName": data.image_url
                };
            var message = JSON.stringify(message_data);

            var stanza = new xmpp.Element('message', {to: data.rid + '@testing.twodegrees.io', type: 'chat', id: data.rid}).
            c('body').t(message);
            var msg_stat = connection.send(stanza);
            console.log('Message send from server');
            io.emit('new-message', message_data);
        });

        socket.on('disconnect', () => {
             if(connectedUsers.length > 0){
                for(var i=0;i<connectedUsers.length;i++){
                     if(connectedUsers[i].chat_id === userId) connectedUsers.splice(i,1);
                }
             }
             io.emit('users-status',connectedUsers);
        });

        // socket.on('presencestatus', function (messages) {
        //     var jid = messages + '@testing.twodegrees.io';
        //     connection.send(jid, 'Hello test');
        // });
    });

});

var listener = app.listen(port, () => {
    console.log(listener.address());
    console.log(listener.address().address);
    console.log(`Server running on port ${port}`);
});