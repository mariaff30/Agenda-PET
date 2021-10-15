const custoExpress = require('./config/custoExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro =>{
	if(erro){
		console.log("ta indo mas n complet")
		console.log(erro)
	}else{
		console.log("conectado com sucesso")

		Tabelas.init(conexao)
		
		const app = custoExpress()

		app.listen(8081,function(){
			console.log("Servidor rodando amei");
		})
	}
})

