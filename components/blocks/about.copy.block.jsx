import { FaAssistiveListeningSystems, FaProjectDiagram } from 'react-icons/fa';

const iconMap = {
  'ear-listen': FaAssistiveListeningSystems,
  'chart-network': FaProjectDiagram,
};

export default function CopyBlock({ containerClass, iconClass, icon, title, copy }) {
  // If icon is array like ['fat', 'ear-listen'], extract last string
  const iconKey = Array.isArray(icon) ? icon[1] : icon;
  const IconComponent = iconMap[iconKey];

  return (
    <div className={containerClass}>
      <span className={iconClass}>
        {IconComponent ? <IconComponent size={24} /> : null}
      </span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}