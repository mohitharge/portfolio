// Import core packages
import { useEffect, useState } from 'react'

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Icon factory utility.
 * Reads icons from a Markdown file and generates icon JSX based on user selection.
 * 
 * @param   {array} icon request props [ iconType, iconKey ]
 * @returns {jsx}   <Icon />
 */
export default function Icon({ icon }) {

  // Logic to read available icons from Markdown file (replace with your implementation)
  const availableIcons = ['circle-notch', 'spinner', 'check']; // Example list

  const [ iconType, iconKey ] = icon

  // Check if selected icon is available before rendering
  const isValidIcon = availableIcons.includes(iconKey);

  const [ stateIconKey, setIconKey ] = useState(isValidIcon ? iconKey : 'circle-notch'); // Default to circle-notch

  useEffect( () => {
    if (isValidIcon) { // Only update state if selected icon is valid
      setIconKey(iconKey);
    }
  }, [isValidIcon,iconKey] )

  return (
    isValidIcon && <FontAwesomeIcon icon={[ iconType, stateIconKey ]} /> // Render only if icon is valid
  )
}