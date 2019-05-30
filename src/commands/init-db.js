module.exports = {
	name: 'init-db',
	description: 'Create a inital database connection',
	run: async toolbox =>{
		const {
			parameters,
			template,
			print:{success, error}
		} = toolbox

		const name = parameters.first

		if (!name) {
			error('O banco de dados precisa de um nome!')
			return
		}

		await template.generate({
			template: 'mongoose.js.ejs',
			target: 'src/mongoose.js',
			props: {name}
		})

		success('Conexão com o banco de dados iniciada com sucesso!')
	}
}