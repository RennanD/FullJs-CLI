
module.exports = {
	name: 'page',
	description: 'Cria uma nova página dentro de src/pages ou src/screens(React-native)',
	run: async toolbox =>{
		const {
			parameters,
			createComponent,
			filesystem
		} = toolbox

		const name = parameters.first
		const options = parameters.options.type

		async function isNative(){
			const pack = await filesystem.read('package.json', 'json')
			return isNative = !!pack.dependencies['react-native']
		}

		const folder = (await isNative())
				? 'src/screens'
				: 'src/pages'
		

		await createComponent(folder,options, name)
	
	}
} 
