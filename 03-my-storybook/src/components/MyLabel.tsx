import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label Size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * all caps
   */
  allCaps?: boolean;


  /**
   * color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * font color
   */
  fontColor?: string;
}

export const MyLabel = ({ 
  label, 
  size = 'normal', 
  allCaps, 
  color, 
  fontColor 
}: Props) => {
  return (
    <span 
      className={`${ size } ${ color }`}
      style={{ color: fontColor }}
    >{ allCaps ? label.toUpperCase() : label }</span>
  )
}
