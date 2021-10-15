const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimentos{
    adiciona(atendimento,res){
        const dataCriacao = moment('2021-10-12').format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5
       /* const validacoes = [
            {
                nome:'data',
                valido: dataValida,
                mensagem:'Data deve ser maior ou igual que a data atual'
            },
            {
                nome:'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter no minimo 5 caracteres'
            }
        ]

       // const erros = validacoes.filter(campo => !campo.valido)*/
        //const existemErros = erros.length

        
            const atendimentoDatado = {...atendimento,dataCriacao,data}
        
            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado,(erro,resultados)=>{
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(resultados)
                }
            })
        
        
    }

    lista(res){
        const sql = 'SELECT *FROM Atendimentos'
        conexao.query(sql,(erro,resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {

        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
    
        conexao.query(sql, (erro, resultados) => { 
            const atendimento = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
    
        })
    }

    altera(id,valores, res,atendimento){
        if(valores.data){
            valores.data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql,[valores,id],(erro,resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    deleta(id,res){
        const sql = 'DELETE FROM Atendimentos  WHERE id=?'

        conexao.query(sql,id,(erro,resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
     
}

module.exports = new Atendimentos