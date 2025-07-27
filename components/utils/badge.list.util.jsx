import badges from '../../styles/blocks/badges.module.scss';
import { myIconMap } from './myIconMap';

export default function Badges({ list, block, color, fullContainer, page }) {

	const container = {
		hidden: { 
			opacity: 1,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.025
			}
		},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.025,
				staggerChildren: 0.1
			}
		}
	}
	
	const item = {
		hidden: { 
			y: 20, 
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	}

	return (
		<ul
			className={`${badges.list} ${badges[block]} ${fullContainer ? badges.fullContainer : ''}`}
			//Animations
				// ref={ref}
				variants={container}
				initial="hidden"
				// animate={controls}
				whilehover="hover"
		>
		{
		list.map( ({ key, name, type }) => {
			return ( 
				<li 
					key={name}
					style={page == "services" ? {width:"100%", fontSize:"12px"} : {}} 
					className={`${badges.item} ${key}`}
					//Animations
					variants={item} >
					<IconModule iconKey={key} iconType={type} color={color}/>
					<span className={badges.title}>{name}</span>
				</li> 
				)
			}) 
		}
		</ul>
	)
}

function IconModule({ iconKey, color }) {
  const IconComponent = myIconMap[iconKey]
  if (!IconComponent) return null

  // You can style color based on props if needed. Example:
  const style = color === false ? {} : { color: 'currentColor' }

  return <IconComponent style={style} className={color !== false ? 'colored' : ''} />
}
		
		