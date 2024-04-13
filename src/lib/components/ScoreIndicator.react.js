import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactScoreIndicator from './ReactScoreIndicator.react.'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ScoreIndicator extends Component {
    resolveColor = (color) => {
        const isHashColor = /^#([0-9a-fA-F]{3}){1,2}$/.test(color);
      
        if (isHashColor) {
          return color;
        } else {
          // Check if the color is a CSS variable
          const isCssVariable = color.startsWith('var(');
      
          if (isCssVariable) {
            // Extract the variable name from the var() syntax
            const variableName = color.slice(4, -1).trim();
      
            // Use getComputedStyle to obtain the computed value of the variable
            const computedColor = getComputedStyle(document.documentElement).getPropertyValue(variableName);
      
            // Check if the computed color is a valid hash color code
            const isValidComputedColor = /^#([0-9a-fA-F]{3}){1,2}$/.test(computedColor);
      
            if (isValidComputedColor) {
              return computedColor;
            } else {
              return null; // or handle it as per your application's needs
            }
          } else {
            return null; // or handle it as per your application's needs
          }
        }
      };
    
    resolveColorsArray = (stepsColors) => {
        // Map each element in the array using the resolveColor function
        const resolvedColors = stepsColors.map(this.resolveColor);
      
        // Filter out any null values that may have occurred during resolution
        const validColors = resolvedColors.filter((color) => color !== null);
      
        return validColors;
    };
    
    componentDidUpdate(prevProps) {
        // Check if the value prop has changed
        if (prevProps.value !== this.props.value) {
            const { setProps, value } = this.props;

            // Trigger a callback to Dash with the updated value
            setProps({ value });
        }
      }

    render() {
        const { id, setProps, value, maxValue, stepsColors, lineWidth, lineGap, fadedOpacity, width, toClassification } = this.props;
        const resolvedColors = this.resolveColorsArray(stepsColors);
        return (
            <ReactScoreIndicator id ={id} 
                value={value}
                maxValue={maxValue}
                stepsColors={resolvedColors}
                lineWidth={lineWidth}
                lineGap={lineGap}
                width={width}
            fadedOpacity={fadedOpacity}
            toClassification={toClassification}>
                </ReactScoreIndicator>
        );
    }
}

ScoreIndicator.defaultProps = {
    stepsColors: [
        "#6b90b2",
        "#6b90b2",
        "#6b90b2",
        "#6b90b2",
        "#6b90b2",
        "#6b90b2",
        "#d12000",
        "#d12000",
    ],
    lineWidth: 5,
    lineGap: 5,
    fadedOpacity: 40,
  width: 200,
  style: {},
  toClassification: false,
};
ScoreIndicator.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,


    /**
     * Current score value
     */
    value: PropTypes.number,

    /**
     * Max score value
     */
    maxValue: PropTypes.number,

    /**
     * Array of hex colors for the steps. Default [
  '#d12000',
  '#ed8d00',
  '#f1bc00',
  '#84c42b',
  '#53b83a',
  '#3da940',
  '#3da940',
  '#3da940',
    ]
        */
    stepsColors: PropTypes.array,

    /**
     * OPtional: Width of the line indicating the score, default is 5
     */
    lineWidth: PropTypes.number,

    /**
     * Gaps between the lines, default is 5
     */
    lineGap: PropTypes.number,

    /**
     * Opacity of faded parts, default is 40
     */
    fadedOpacity: PropTypes.number,
    /**
     * Default is false, if true to coClassification turns number into low, medium, high
     */
    toClassification: PropTypes.bool,
    width: PropTypes.number,
    style: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
