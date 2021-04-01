import ReactStylesChild from './ReactStylesChild'
import '../css/parent.css'
import parentCss from '../css/parent.module.css'

function ReactStylesParent(props) {
    const headerColor = props.showColor ? 'header_color' : '';
    //Key should be in camelCase structure and value should be in string
    let styleData = {
        color: "red",
        fontSize: "40px"
    }

    return(
        <>
            <h1 className={`${headerColor} header_size`}>React Parent Style Functional Component</h1>
            <h1 style={styleData}>I am an inline sentence</h1>
            <h1 className={parentCss.module_color_abc}>Module CSS</h1>
            <ReactStylesChild />
        </>
    )
}

export default ReactStylesParent;