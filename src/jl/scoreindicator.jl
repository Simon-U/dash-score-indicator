# AUTO GENERATED FILE - DO NOT EDIT

export scoreindicator

"""
    scoreindicator(;kwargs...)

A ScoreIndicator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fadedOpacity` (Real; optional): Opacity of faded parts, default is 40
- `lineGap` (Real; optional): Gaps between the lines, default is 5
- `lineWidth` (Real; optional): OPtional: Width of the line indicating the score, default is 5
- `maxValue` (Real; optional): Max score value
- `stepsColors` (Array; optional): Array of hex colors for the steps. Default [
  '#d12000',
  '#ed8d00',
  '#f1bc00',
  '#84c42b',
  '#53b83a',
  '#3da940',
  '#3da940',
  '#3da940',
    ]
- `style` (Dict; optional)
- `value` (Real; optional): Current score value
- `width` (Real; optional)
"""
function scoreindicator(; kwargs...)
        available_props = Symbol[:id, :fadedOpacity, :lineGap, :lineWidth, :maxValue, :stepsColors, :style, :value, :width]
        wild_props = Symbol[]
        return Component("scoreindicator", "ScoreIndicator", "dash_score_indicator", available_props, wild_props; kwargs...)
end

