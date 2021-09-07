---
title: US Power Plant Capacity
description: US Power Plant Capacity for years 2013 through 2015
img: power_plant/us_solar_2015_CA_inset.png
img_alt: Nameplate capacity for US power plants
date: 2017-11-10 # Date should always be in YYYY-MM-DD format
---

# US Power Plant Capacity for years 2013 through 2015

In many visualizations it is useful to annotate relations in a plot or between plots, but it can often be difficult.  These visualizations were created with a tight schedule using R, dplyr, extraGrid and ggplot2.  In ggplot2 annotation functionality refers to axis labels and the title instead noting an important detail or relation between two different plots. Any lines that relate different data marks or regions between plots that use the grid package must calculate coordinates in three different viewports.  The postions in the local viewport for each plot as well as the overall viewport that contains the plots and has a coordinate extent from 0 to 1.  Due to the time alloted the solar plot annotations were added using the Inkscape application.

<img src="power_plant/us_solar_2015_CA_inset.png"/>

## Annotation Capability Exists for D3.js Visualization Framework
Susie Lu has created the d3-annotation and react-annotation packages that can be used with d3.js.  
https://github.com/susielu/d3-annotation

For use with react applications in semiotic
https://react-annotation.susielu.com/

## Ways To Do This in R with grid, gridExtra, and ggplot2
An excellent example that demonstrates the value of annotations between plots is in a github issue created by mattwrkentin
https://github.com/thomasp85/patchwork/issues/216

I did not have enough time to create a d3.js visualization.  An example of how to annotate a relation between two plots using ggplot and extraGrid in R is here torwards the bottom just before "3. Discussion"
https://www.stat.auckland.ac.nz/~paul/Reports/gggrid/gggrid.html



## Grid plots for comparing nameplate capacity (MW) versus years and versus fuel category
The grid plots also need to be designed carefully. Less is often more and the text should complement the plots and clarify details.


Nameplate capacity by State (MW) for years 2013 through 2015
This visualization would be more useful it would be interactive with the ability to drill down to the county level.
<img src="power_plant/map_grid_nameplate_capacity.png"/>

This grid plot did not make it into the report because there is too much to look at to make a comparison between year and fuel type.
<img src="power_plant/map_grid_us_county_capacity_004c_2400x1738.png"/>

