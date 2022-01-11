---
alice_demo: EpUChtHsAVo
object_recognition: h9DArHZGUMo
grasping_demo: FecQbV2rejo
motion_planning_demo: _uUmV0QUoDQ
layout: default
---

# Demo Projects 
This pages shows some demo projects related to robotics.
* [Demo Project, Cleaning Table with Mobile Manipulator Platform](#demo-project-cleaning-table-with-mobile-manipulator-platform)
* [Simple Object Recognition](#simple-object-recognition)
* [Simple Grasping](#simple-grasping)
* [Simple Motion Planning](#simple-motion-planning)
* [Simple Planning Demo](#simple-planning-demo)
* [Custom PCL Implementations](#custom-pcl-implementations)

## Demo Project, Cleaning Table with Mobile Manipulator Platform

A demonstration was done with a mobile manipulator platform (named Alice). Alice was build by the Robotics Team at the University of Groningen. This demonstration was developed for Philips on behalf of Prof. Schomaker. The purpose was to demonstrate the capabilities of basic industrial maintenance tasks like cleaning and tidying up. In this demo the robot had to clean a table, by either removing a paper cup, or sweeping the table clean. A static camera was stationed behind the table to compute the areas that needed to be cleaned. 
The software was developed by me and Francesco Bidoia. Francesco developed the software for recognition of the areas to clean on the table and the general behaviour of the robot. I developed all the manipulation and movement of the robot by using Point Cloud data to determine the location of the table such that it can drive along side it. 

Video hosted on Prof. Schomaker's YouTube channel:

{% include youtubePlayer.html id=page.alice_demo %}

## Simple Object Recognition 
A simple object recognition demo that makes use of PCL to filter object Region of Interests and CNN for classifications. 
Using Point Cloud data the floor is filtered out and the remaining Point Cloud is clustered, for each cluster the ROI inside the RGB image is determined. The ROI is then resized and classified using a Convolutional Neural Network. This demo can classify 12 objects, the total data gathering and training took about 20 minutes. For each object 10 images are gathered and the dataset is then augmented. 

[Github repository](https://github.com/riktimmers/simple_object_recognition_demo)


{% include youtubePlayer.html id=page.object_recognition %}


## Simple Grasping

{% include youtubePlayer.html id=page.grasping_demo %}


## Simple Motion Planning

{% include youtubePlayer.html id=page.motion_planning_demo %}

## Simple Planning Demo

A simple demo to show the Dijkstra and A* planning algorithms. 

## Custom PCL Implementations 

Some custom PCL function implementations for speed improvements. 
