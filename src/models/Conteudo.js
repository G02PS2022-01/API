import mongoose from "mongoose";
const { Schema } = mongoose;

const ConteudoSchema = new Schema({
  titulo: String, 
  conteudo: String
})

export const Conteudo = mongoose.model('Conteudo', ConteudoSchema);