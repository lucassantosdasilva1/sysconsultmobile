import axios from "axios";

//ALTERE O IP BASE PARA O IP DA SUA MAQUINA
 const api = axios.create({ baseURL: "http://10.110.23.20:3333" });

export { api };
