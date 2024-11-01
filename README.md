# Lesson 07: Final project beta map and presentation

## Overview

This module's primary objective is to build a "beta" final project that you will share with colleagues in class. A beta version should include all of the desired features and be ready for testing. A short screen-capture video will accompany the beta map to demonstrate its functionality and the desired user experience. The video presentation should also discuss your challenges – and successes – and the future direction of the project. 

## Table of Contents

<!-- TOC -->

- [Lesson 07: Final project beta map and presentation](#lesson-07-final-project-beta-map-and-presentation)
    - [Overview](#overview)
    - [Table of Contents](#table-of-contents)
    - [Introduction](#introduction)
    - [Part I: Beta map (8 pts)](#part-i-beta-map-8-pts)
        - [Deliverable](#deliverable)
    - [Part II: Discuss Beta map (4.5 pts)](#part-ii-discuss-beta-map-45-pts)
        - [Deliverable](#deliverable-1)

<!-- /TOC -->

## Introduction

We're now actively developing final map projects. We aim to have functional prototypes working by the end of this week. This means:

* ALL data collected/processed/formatted
* Data are being loaded into the script (either from a local file or a remote database) and parsed or bound to geometries
* Data are being symbolized in the appropriate thematic way (choropleth, proportional symbols, etc)
* Interaction operators (e.g., overlays, retrieve) are being developed, tested, working (or kinda broken).
* Basic page layout and UI elements are prototyped (e.g., headers, menus, sidebars, info windows).

## Part I: Beta map (8 pts)

During this week, you will focus on making a beta version of your map project. To prototype faster, you may use any of the templates used in previous modules or create a new one. During the last week, we will focus on refining the map, customizing its design, and adding desired features.

When you are ready to share your beta map:

1. Create a new GitHub repository for your map project **on your GitHub account** and work within that repo. Give the repo a short, descriptive name related to your map (e.g., https://github.com/annaleebard/language-and-autism). 

2. Include a README.md file at the root level of the repository and add the contents of your proposal that you developed in the previous module.
 
3. Make the repository public (so people can see/share your awesome code), and add the instructor as a collaborator for pull requests. 

4. [Enable GitHub Pages](https://docs.github.com/en/pages/quickstart) for the repository.


### Deliverable

Share the URL to your GitHub repository (the `.com` URL) in the Canvas Submission page. If you want feedback or collaboration on your code, please comment the area of concern in your code. 

## Part II: Discuss Beta map (4.5 pts)

Post the URL to your GitHub Pages Beta map to the module's discuss forum. With the post, include a 5-minute screen recording of your map for sharing with your instructor and colleagues. There are many free/open source screen-casting video software options, e.g., [ShareX](https://getsharex.com/) or [Jing](https://www.techsmith.com/jing-tool.html).

The presentation should cover the following:

* Minute 1: Introduce your topic and your motivation for the project.
* Minute 2: Briefly describe your target user, their goals and objectives for using the map.
* Minutes 3 - 4: Walk us through a live use case scenario using the map. Explain the various interface components and how the user will use them.
* Minute 5: Conclude with any features, functionality, or design aspects you'd like to attend to or improve upon for the final week (a "wish list").

### Deliverable

Share the URL to your GitHub Pages (the `.io` URL) in the Canvas discussion forum and attach the video to the post. 



#MAP:673 Project Proposal
## 1.	Your data source and (at least a sample of) the data required to meet the map's objectives. 
 	https://tin.er.usgs.gov/mrds/ (sample in data folder)
## 2.	The map topic and geographic phenomena your map will explore.
    a.	What?: Mineral Resources
    b.	Where?: Kentucky
    c.	When?: all discovered As of 2011
    d.	What is the tentative title of your project?: The distribution of Kentucky’s Mineral resources.
        Then, think about how this will be realized in the browser
    e.	Identify your anticipated methods of thematic representation methods (e.g., icons, choropleth, prop symbols, etc.): 
        i.	Font: open sans or lato
        ii.	Color: #fff with #000 border
        iii.	Icon:  
        iv.	Map type: heat
    f.	Briefly describe your anticipated user interface (UI): a title, an info section, a legend that serves as a checklist to enable and disable different mineral resources. 

## 3.	An articulation of the map's objectives and user needs: 
    a.	Why does the map need to be made? Consider your position to the mapping project. Why are you the one to be designing it?: the information is interesting and having a map to visualize it can help you better understand it. I am designing it because I want it to exist and no one else is going to make it.                      

    b.	What type of user do you expect to use this map and what needs do you anticipate they will have?: people with a casual interest as experts likely already know this information and need more specialized maps. 






## 4.	A summary of the predicted technology stack.
    a.	A description of the data and information processing tools used, e.g., QGIS, MapShaper, ArcGIS Pro, etc: just QGIS for now.

    b.	The format you'll use to store your data, e.g., flat files such as CSV, GeoJSON, or dynamically from an API: I plan on using a CSV.

c.	The JS libraries you anticipate using or need like Leaflet, omnivore, Papa Parse, etc: Just leaflet for now more if I encounter problems achieving what I need.

