# ***UFOs: Working with JavaScript and HTML***

## Overview of Project

In this project, we created an interactive html website containing a table with data related to UFO sightings.This table has a complete description of the event including the date,city,state,country,shape,duration and commentary surrounding the event. The purpose of our project is to create the interactive html website in which the user can input the information they are looking for, and the website will return all the data found for that specific input. We will be focusing on filtering our table with inputs in the Date,City,State,Country,and Shape cartegories.

## Results

### Process:

In order for the user to obtain data related to the event they are looking for, We can do the following steps.

1. If we want to filter our data based on a date,we will Input the date we are looking for in the white space next to "Enter Date" in the form of mm/dd/yyyy, and click enter afterwards. For example if we want to search for the date January 2nd,2010, we would input the date as 1/2/2010 and the following result should come up:

![date](https://user-images.githubusercontent.com/111034667/202378206-09e58539-a7bf-437b-9794-e6bc39cc05d3.png)

2. If we want to filter our data based on a  city, Input the city we are looking for next to "Enter City " in lowercase and hit enter. For example if we are looking for the city of Orange, we will enter orange and the following results should come up: 

![city](https://user-images.githubusercontent.com/111034667/202378853-e9e332c6-fe8e-48fc-893b-f20db20d199c.png)

3. If we want to filter our data based on a state, Input the abbreviation for the state we are looking for next to "Enter State " in lowercase and hit enter. For example if we are looking for the state of California, we will enter ca and the following results should come up: 

![state](https://user-images.githubusercontent.com/111034667/202379563-307452c9-2745-4e75-af92-2730741f74f8.png)

4. If we want to filter our data based on a country, Input the abbreviation for the country we are looking for next to "Enter Country" in lowercase and hit enter. For example if we are looking for the country of United Kindom , we will enter uk and the following results should come up: 

![country](https://user-images.githubusercontent.com/111034667/202380042-f8c7708a-af48-4279-a4c2-e38c0acbb4c5.png)

5. If we want to filter our data based on a shape, Input the shape we are looking for next to "Enter Shape" in lowercase and hit enter. For example if we are looking for the shape light , we will enter light and the following results should come up: 

![shape](https://user-images.githubusercontent.com/111034667/202380507-108ab255-a6f1-4d4f-b90b-1125e2b321a0.png)

### Results:

Now that we have reviewed how to filter data with one specific category, we can move on to testing out inputing information for multiple categories and seeing if we have data reported for them. For example , let's pick the following information to filter for:

- Date: 1/1/2010
- State : CA
- Shape: light

When we input the information in each slot, we will have the following result:

![all together](https://user-images.githubusercontent.com/111034667/202381999-a5922383-e9d8-4938-b33c-107d94c190bc.png)

Due to our limited data, there are going to be cases where our information will not output information onto the table.

## Summary

We were able to succesfully create an interactive HTML website that includes the option to filter our table containing UFOs sightings data. Our website is able to filter out our data based on the information the user inputs and it will be able to return the information about the sight for the majorityof the times. One of the drawbacks of our design is that depending on the way the user inputs our data will determine whether it will find a result or not. If a user were to input the date as mm/dd instead or the rest of the information in upper case, our code will not be able to retrieve the data to the table. To ensure our website retrieves the data, we can later on update our code to include an error message to be displayed in case the user inputs the information in the wrong format, and include the format that should be written on. Also, we can include a message after the user inputs information that does not match any of our data.In this message we can include the following  "It looks like we do not have any data regarding the information inputed. Please try it again with different information." .

