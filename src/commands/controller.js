module.exports = {
	name: 'controller',
	description: 'Create a Controller for model in aplication',
	run: async toolbox =>{
		const {
			parameters,
			template,
			print:{success, error}
		} = toolbox

		const name = parameters.first

		if (!name) {
			error('Ops, não foi definido um nome para o controller!')
			return
		}

		await template.generate({
			template: 'controller.js.ejs',
			target: `src/controllers/${name}Controller.js`,
			props: {name}
		})

		success('Controller criado com sucesso!')
	}
}