import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';

const PORT = 4007;
const server = express();

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json() , graphqlExpress({schema}));

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const shutdownServerProperly = (code) => {
    console.log("Received signal code : ", code);
    if(server !== undefined){
        //server.close();
    }
}

process.on('exit', shutdownServerProperly);