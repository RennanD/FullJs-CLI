
module.exports = (toolbox) => {
	const {
		filesystem, 
		print:{success, error, warning}, 
		template,
		parameters
	} = toolbox



	generateTemplate = async (type,folder,name)=> {
			await template.generate({
				template: `${type}.js.ejs`,
				target: `${folder}/${name}/index.js`,
				props: {name}

			})

			const styleTemplate = (await isNative())
				? 'styles-rn.js.ejs'
				: 'styles.js.ejs'

			await template.generate({
				template: styleTemplate,
				target: `${folder}/${name}/styles.js`,

			})

			success(`Componente ${name} criado com sucesso!`)
	}  

	async function isNative(){
		const pack = await filesystem.read('package.json', 'json')
		return isNative = !!pack.dependencies['react-native']
	}

	async function createComponent(folder, options, name){
		if (!name) {

			error('Ops, o nome do componente não foi informado!')

			return
		}
		if (!options) {
			
			typeComp = 'func'
			
			generateTemplate(typeComp,folder,name)

			warning('Caso queria alterar o tipo de componente insira --type==class ou --type=arrow')
			success('Functional Component criado por padrão!')

		}

		else if (options === 'class'){

			typeComp = options

			generateTemplate(typeComp,folder,name)

		}

		else if (options === 'arrow'){

			typeComp = options

			generateTemplate(typeComp,folder,name)

		}

		else{

			error('Formato de componente inválido')

		}
	}

	toolbox.createComponent = createComponent
}