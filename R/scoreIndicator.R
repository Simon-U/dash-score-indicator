# AUTO GENERATED FILE - DO NOT EDIT

#' @export
scoreIndicator <- function(id=NULL, fadedOpacity=NULL, lineGap=NULL, lineWidth=NULL, maxValue=NULL, stepsColors=NULL, style=NULL, toClassification=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, fadedOpacity=fadedOpacity, lineGap=lineGap, lineWidth=lineWidth, maxValue=maxValue, stepsColors=stepsColors, style=style, toClassification=toClassification, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ScoreIndicator',
        namespace = 'dash_score_indicator',
        propNames = c('id', 'fadedOpacity', 'lineGap', 'lineWidth', 'maxValue', 'stepsColors', 'style', 'toClassification', 'value', 'width'),
        package = 'dashScoreIndicator'
        )

    structure(component, class = c('dash_component', 'list'))
}
