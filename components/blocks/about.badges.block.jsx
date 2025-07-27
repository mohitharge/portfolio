
import Badges 	from '../utils/badge.list.util'
import badges 	from '../../styles/blocks/badges.module.scss';
import { myIconMap } from '../utils/myIconMap';

export default function BadgesBlock({
  title,
  copy,
  list,
  fullContainer,
  block,
  icon,
  invertedColor,
  headerIcon,
  containerClass,
  page,
}) {
  // Get the icon component from map, fallback to null if not found
  const IconComponent = myIconMap[icon];

  return (
    <div className={`${badges.badgeBlockContainer} ${containerClass}`}>
      <span className={headerIcon}>
        {IconComponent ? <IconComponent size={24} /> : null}
      </span>
      <h3>{title}</h3>
      <Copy copy={copy} />
      <Badges
        page={page}
        list={list}
        block={block}
        invertedColor={invertedColor}
        fullContainer={fullContainer}
      />
    </div>
  );
}

function Copy({copy}) {
	if (copy) 
		return (
			<p>{copy}</p>
		)
}