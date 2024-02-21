import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStoreIndicator from 'react-score-indicator'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ScoreIndicator extends Component {
    resolveColor = (color) => {
        // Check if the color is a valid hash color code
        const isHashColor = /^#([0-9a-fA-F]{3}){1,2}$/.test(color);
      
        if (isHashColor) {
          return color; // Return the hash color code as it is
        } else {
          // If not a hash color code, assume it's a CSS variable
          const computedColor = getComputedStyle(document.documentElement).getPropertyValue(color.trim());
      
          // Check if the computed color is a valid hash color code
          const isValidComputedColor = /^#([0-9a-fA-F]{3}){1,2}$/.test(computedColor);
      
          if (isValidComputedColor) {
            return computedColor; // Return the hash color code obtained from the CSS variable
          } else {
            // If the computed color is still not valid, you may handle this case as per your requirements
            console.error(`Invalid color or CSS variable: ${color}`);
            return null; // or return a default color, throw an error, etc.
          }
        }
    };
    
    resolveColorsArray = (stepsColors) => {
        // Map each element in the array using the resolveColor function
        const resolvedColors = stepsColors.map(resolveColor);
      
        // Filter out any null values that may have occurred during resolution
        const validColors = resolvedColors.filter((color) => color !== null);
      
        return validColors;
      };
    render() {
        const { id, setProps, value, maxValue, stepsColors, lineWidth, lineGap, fadedOpacity } = this.props;
        const resolvedColors = resolveColorsArray(stepsColors);
        return (
            <ReactStoreIndicator id ={id} 
                value={value}
                maxValue={maxValue}
                stepsColors={resolvedColors}
                lineWidth={lineWidth}
                lineGap={lineGap}
                fadedOpacity={fadedOpacity}>
                </ReactStoreIndicator>
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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
