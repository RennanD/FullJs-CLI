module.exports = {
	name: 'express',
	description: 'Create a inital express aplication',
	run: async toolbox =>{
		const {
			template,
			print:{success, error}
		} = toolbox

		await template.generate({
			template: 'server.js.ejs',
			target: 'src/server.js'
		})

		await template.generate({
			template: 'routes.js.ejs',
			target: 'src/routes.js'
		})

		success('Estrutura inicial criada com sucesso!')
	}
}