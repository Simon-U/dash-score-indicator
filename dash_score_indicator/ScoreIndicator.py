# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ScoreIndicator(Component):
    """A ScoreIndicator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- fadedOpacity (number; default 40):
    Opacity of faded parts, default is 40.

- lineGap (number; default 5):
    Gaps between the lines, default is 5.

- lineWidth (number; default 5):
    OPtional: Width of the line indicating the score, default is 5.

- maxValue (number; optional):
    Max score value.

- stepsColors (list; default [    "#6b90b2",    "#6b90b2",    "#6b90b2",    "#6b90b2",    "#6b90b2",    "#6b90b2",    "#d12000",    "#d12000",]):
    Array of hex colors for the steps. Default [   '#d12000',
    '#ed8d00',   '#f1bc00',   '#84c42b',   '#53b83a',   '#3da940',
    '#3da940',   '#3da940',     ].

- style (dict; optional)

- toClassification (boolean; default False):
    Default is False, if True to coClassification turns number into
    low, medium, high.

- value (number; optional):
    Current score value.

- width (number; default 200)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_score_indicator'
    _type = 'ScoreIndicator'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, maxValue=Component.UNDEFINED, stepsColors=Component.UNDEFINED, lineWidth=Component.UNDEFINED, lineGap=Component.UNDEFINED, fadedOpacity=Component.UNDEFINED, toClassification=Component.UNDEFINED, width=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'fadedOpacity', 'lineGap', 'lineWidth', 'maxValue', 'stepsColors', 'style', 'toClassification', 'value', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'fadedOpacity', 'lineGap', 'lineWidth', 'maxValue', 'stepsColors', 'style', 'toClassification', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(ScoreIndicator, self).__init__(**args)
