# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ReactScoreIndicator(Component):
    """A ReactScoreIndicator component.


Keyword arguments:

- maxValue (number; required)

- stepsColors (list of strings; required)

- textStyle (dict; optional)

- toClassification (boolean; default False)

- value (number; required)

- width (number; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_score_indicator'
    _type = 'ReactScoreIndicator'
    @_explicitize_args
    def __init__(self, value=Component.REQUIRED, maxValue=Component.REQUIRED, width=Component.REQUIRED, stepsColors=Component.REQUIRED, textStyle=Component.UNDEFINED, toClassification=Component.UNDEFINED, **kwargs):
        self._prop_names = ['maxValue', 'stepsColors', 'textStyle', 'toClassification', 'value', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['maxValue', 'stepsColors', 'textStyle', 'toClassification', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['maxValue', 'stepsColors', 'value', 'width']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(ReactScoreIndicator, self).__init__(**args)
