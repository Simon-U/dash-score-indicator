% Auto-generated: do not edit by hand
\name{scoreIndicator}

\alias{scoreIndicator}

\title{ScoreIndicator component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
scoreIndicator(id=NULL, fadedOpacity=NULL, lineGap=NULL, lineWidth=NULL,
maxValue=NULL, stepsColors=NULL, value=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{fadedOpacity}{Numeric. Opacity of faded parts, default is 40}

\item{lineGap}{Numeric. Gaps between the lines, default is 5}

\item{lineWidth}{Numeric. OPtional: Width of the line indicating the score, default is 5}

\item{maxValue}{Numeric. Max score value}

\item{stepsColors}{Unnamed list. Array of hex colors for the steps. Default [
  '#d12000',
  '#ed8d00',
  '#f1bc00',
  '#84c42b',
  '#53b83a',
  '#3da940',
  '#3da940',
  '#3da940',
    ]}

\item{value}{Numeric. Current score value}

\item{width}{Numeric. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

