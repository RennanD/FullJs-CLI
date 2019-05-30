module.exports = {
	name: 'model',
	description: 'Create a Model in aplication',
	run: async toolbox =>{
		const {
			parameters,
			template,
			print:{success, error}
		} = toolbox

		const name = parameters.first

		if (!name) {
			error('Ops, não foi definido um nome para o model!')
			return
		}

		await template.generate({
			template: 'model.js.ejs',
			target: `src/models/${name}.js`,
			props: {name}
		})

		success('Model criado com sucesso!')
	}
}