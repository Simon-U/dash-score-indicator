# AUTO GENERATED FILE - DO NOT EDIT

#' @export
reactScoreIndicator <- function(maxValue=NULL, stepsColors=NULL, textStyle=NULL, toClassification=NULL, value=NULL, width=NULL) {
    
    props <- list(maxValue=maxValue, stepsColors=stepsColors, textStyle=textStyle, toClassification=toClassification, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ReactScoreIndicator',
        namespace = 'dash_score_indicator',
        propNames = c('maxValue', 'stepsColors', 'textStyle', 'toClassification', 'value', 'width'),
        package = 'dashScoreIndicator'
        )

    structure(component, class = c('dash_component', 'list'))
}
