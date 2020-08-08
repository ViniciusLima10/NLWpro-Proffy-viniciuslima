import express from 'express'
import cors from 'cors'
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//get : buscar ou listar informa;ao
//post : Criar alguma nova informa;ao dentro do backend
//put : atualizar informa;ao no backend
//delete : deletar informa;oes do backend

// corpo (request body) : cria;ao ou atualiza;ao de um registro
//route params: Identificar qual recurso eu quero atualizar ou deletar 
//query params: pagina;ao, filtros, ordena;ao 


app.listen(3333);
