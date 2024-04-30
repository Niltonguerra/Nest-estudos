import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO{


    @IsNotEmpty({message: "por favor preencha o campo nome"})
    @IsOptional()
    nome:string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
    @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
    @IsOptional()
    email: string;

    @MinLength(6,{message:"tamanho mínimo de 6 caracteres"})
    @IsOptional()
    senha:string;

    
}