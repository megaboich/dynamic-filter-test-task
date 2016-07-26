### Dynamic filter test task
#### Feature Requirements
An administrator can configure filters that are displayed to a user
in his application. Filters can have input parameters in them (ask user).


If a filter requires input, the user should get a pop-up in which he
enters the input. Example filters as defined by the administrator: 
- (Status = ‘Open’ AND Color = ‘Blue); (no input parameters) 
- (Status = ‘Open’ AND AskUser(Type)); (one input parameters) 
- (AskUser(Status) OR (AskUser(Type) AND AskUser(StartDate)); (two input parameters) 


A user is able to filter the tasks based on filters that are
predefined by an Administrator by clicking a button. If there are no
required input parameters, the filter should be applied immediately (no
pop-up before filtering).

#### Input
A task consists out of the following fields: 
- ID (unique txt) 
- Name (text 255) 
- Status (picklist: open, in progress, closed) 
- Type (installation, maintenance, failure) 
- Color (blue, purple, black) 
- Start Date (datetime) 
- End Date (datetime) 
- Description (text 1k)
```
    [
        {
            "Id":"uniqwo1",
            "Name":"WO-0001",
            "Status":"Open",
            "Type":"Installation",
            "StartDate":"22-04-2016 13:00:00",
            "EndDate":"22-04-2016 14:00:00",
            "Color":"Red",
            "Description":"Install new KoelKast SF-123"
        },
        {
            "Id":"uniqwo2",
            "Name":"WO-0002",
            "Status":"In Progress",
            "Type":"Maintenance",
            "StartDate":"22-04-2016 14:00:00",
            "EndDate":"22-04-2016 15:00:00",
            "Color":"Green",
            "Description":"Check freon on split-system"
        },
    ]
```


#### Current implementation status
Implemented:
- Data structure and object model to work with filters, tasks and their configuration
- Reading from configuration files
- UI to list tasks
- UI to provide filtering functionality

Not implemented:
- CSS styling and final UI markup
- Date/time UI component for filter
- Parsing filter as expression from configuration file, currently it is specified as syntax tree 

#### Demo
Demo is available [here](https://megaboich.github.io/dynamic-filter-test-task/#/tasks)

