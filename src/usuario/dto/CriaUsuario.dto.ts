import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO{


    @IsNotEmpty({message: "por favor preencha o campo nome"})
    nome:string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
    @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
    email: string;

    @MinLength(6,{message:"tamanho mínimo de 6 caracteres"})
    senha:string;

    
}