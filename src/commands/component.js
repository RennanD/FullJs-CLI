
module.exports = {
	name: 'component',
	description: 'Cria um novo componente dentro de src/components',
	run: async toolbox =>{
		const {
			parameters,
			createComponent
		} = toolbox

		const name = parameters.first
		const options = parameters.options.type

		await createComponent('src/components',options, name)
	
	}
} 
