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

#### Approach
Created different groups of objects:
- Data transfer objects. FilterDefinitionDTO, TaskDefinitionDTO are responsible to represent data coming from back-end. Filters configuration and tasks data.
These objects are available to obtain through special services (FiltersConfigService, TasksService) that forms API to communicate with backend.
- Configuration models: 
  * FilterConfigModel - syntax-tree structure to work with filter
  * FieldMetaInfo - information about fields used in filtering - user input type, captions, and options.
- Logic Models:
  * Task - list of tasks to display and filter
  * FilterInteraction - contains mapping information about field in model and required user interaction - associated filter information and selected value.
  * FilterBox - entity representing single filter. Contains list of required user interactions, current status - applied, expanded, etc. Responsible for building actual filter function from filter configuration and user input.
- Converters:
  * FilterConfigModelConverter - responsible for transforming FilterDefinitionDTO to FilterNode. Parse filter expression to syntax tree.
  * TaskModelConverter - converts TaskDefinitionDTO to Task.
- Components:
  * TaskListComponent - UI component for list of tasks
  * FilterBoxComponent - UI component for filter button and it also provides user required filters UI it required
  * FilterInteractionComponent - UI component for user input for different types of data - dropdown, date\time picker, etc.

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

#### List of tools and libraries
- TypeScript. Because of a lot of advantages over JavaScript. Most significant is types and signatures checking during compilation.
- SPA application framework: Angular2. Just framework to build UI. I think for this task ReactJS might suit better, but currently I am working with Angular2, so it was selected to speed up process a bit.
- CSS styles framework: (TBD)