import './Button.scss';

function Button(props) {
    if (props.visibility === '1') {
        return (
            <div className="button button1">
              <img className="button-icon" src={props.icon} alt="" />
              <p className="button-text">{props.text}</p>
            </div>
          );
    } else if (props.visibility === '2') {
        return (
            <div className="button button2">
              <img className="button-icon" src={props.icon} alt="" />
              <p className="button-text">{props.text}</p>
            </div>
          );
    } else {
        return (
            <div className="button button3">
              <img className="button-icon" src={props.icon} alt="" />
              <p className="button-text">{props.text}</p>
            </div>
          );
    }
    
  }
  
  export default Button;