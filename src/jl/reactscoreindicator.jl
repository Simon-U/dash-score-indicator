# AUTO GENERATED FILE - DO NOT EDIT

export reactscoreindicator

"""
    reactscoreindicator(;kwargs...)

A ReactScoreIndicator component.

Keyword arguments:
- `maxValue` (Real; required)
- `stepsColors` (Array of Strings; required)
- `textStyle` (Dict; optional)
- `toClassification` (Bool; optional)
- `value` (Real; required)
- `width` (Real; required)
"""
function reactscoreindicator(; kwargs...)
        available_props = Symbol[:maxValue, :stepsColors, :textStyle, :toClassification, :value, :width]
        wild_props = Symbol[]
        return Component("reactscoreindicator", "ReactScoreIndicator", "dash_score_indicator", available_props, wild_props; kwargs...)
end

