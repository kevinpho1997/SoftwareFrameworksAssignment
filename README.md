# Documentation for Software Frameworks Assignment Phase 1 (3813ICT)

## Git

### Git Layout
GitHub was used as the Version Control System (VCS) for this project, the link to the repository can be found below.

https://github.com/kevinpho1997/SoftwareFrameworksAssignment

At the root of the Git repository is the node modules for the Angular app and its node modules.  In the Angular app is the src folder containing the Angular components, HTML and CSS. The Angular app folder also contains the node.js server that handles HTTP requests.

### Version Control Methodology
Throughout development, I tried my best to only commit working code to ensure that the app compiles if a revert to a previous version. This was particularly with main, as I would work on main directly when making small changes but I would use branches for more complex tasks. The branches allow testing of new functionality without affecting main, which would then be merged into main when they are completed. This allows main to be always be capable of building when pulled from and is best practice when working with a team.

## Data Structures
The main data structures for this Angular project are:
- Users
- Groups
- Channels
- Permissions

Users is an array containing 0 or more user objects. Each user has the following attributes:
- `username`: string
- `email`: string
- `id`: number
- `role`: string 

A User can have the roles: `default`, `super`, `gAdmin`, `gAssist`. These role respectively give the permissions of a default, super admin, group admin and group assistant.

Groups is an array containing 0 or more group objects. Each group has the following attributes:
- `id`: number
- `groupName`: string

Channels is an array containing 0 or more group objects. Each channel has the following attributes:
- `id`: number
- `channelName`: string

Users, Groups and Channels are stored in /server/data as serialised JSON files

Permissions is an array of permission objects. Each permission object contains a `groupId`  (a reference to the `id` of a group object) and an array of members that will have the permission level. Each member will have a `userId` (a reference to an id of a User) and an array of `channelIds` (a reference to an id of a Channel), which are the channels the user is subscribed to. 

```
	{groupId: number, members: [
		{userId: number, channelIds: [number]
	]}
```

## REST API

**For the  following routes, the parameters and return values are as stated in previously in the "data structures" section, unless explicitly stated**

### Auth route
| **Route overview** | This route checks if a user exists in a predefined JSON. If the user exists, it will call a login function to log the user in; returning an error if they do not.                                            |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Route path**     | /auth                                                                                                                                                                                                        |
| **Method**         | POST                                                                                                                                                                                                         |
| **Parameter/s**    | `username`                                                                                                                                                                                            |
| **Return value/s** | if (auth): `{valid: true, user: {username, email, id, role}}`     if !(auth): `{valid: false, errors:{}}`                                                                                                    |
| **Description**    | This route takes a `username` in the http request. If there is a match in the users.json file then the route returns `valid: true` and the user information. If there is no match, valid: false is returned. |

### Set permissions route
| **Route overview** | This route gives app permissions to a user depending on the value of user.role                                                                                           |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Route path**     | /setPermissions                                                                                                                                                          |
| **Method**         | POST                                                                                                                                                                     |
| **Parameter/s**    | `user: {username, email, id, role}`                                                                                                                                      |
| **Return value/s** | ***See below code block for proper formatting                                                                                                                                       |
| **Description**    | This route takes a `user` and returns the `permissions` object where default users have no permissions. Relevant permissions are returned according to the user `roles`. |


```
{

	rolePermissions: {

		// super admin

		canCreateUser: boolean,

		canRemoveUser: boolean,

		canUpgradeUserSuper: boolean,

		// group admin

		canCreateGroup: boolean,

		canCreateGroupChannel: boolean,

		canCreateChannelUser: boolean,

		canInviteCreateChannelUser: boolean,

		canUpdateChannel: boolean,

		canUpgradeUserGAssist: boolean,

		// group assist

		canAddRemoveChannelUser: boolean,

		canCreateGroupChannel: boolean

	}

}

```

### Create User
| **Route overview** | Creates a new user if the username doesn't exist                                                                                                                                  |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Route path**     | /user/create                                                                                                                                                                      |
| **Method**         | POST                                                                                                                                                                              |
| **Parameter/s**    | `{user: {username, email, id: undefined, role}}`                                                                                                                                  |
| **Return value/s** | No user match: `users` user match: `error`                                                                                                                                        |
| **Description**    | The route reads `users.json`, and if there is no `user` match then it will add the `user` to `users` and assign a `userId`. It writes `users` to `users.json` and returns `users` |

### Update User
| **Route overview** | Updates a User                                                                                                                                                                                                   |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Route path**     | /user/:id                                                                                                                                                                                                        |
| **Method**         | POST                                                                                                                                                                                                             |
| **Parameter/s**    | Request parameters: `id`<br/> Request body: `{user: {username, email, id, role}}`                                                                                                                                |
| **Return value/s** | `users`                                                                                                                                                                                                          |
| **Description**    | A `userID` and a `user` object is received and `users.json` is read. It matches the `userID` and `id` of the `user` object and replaces the values with `user`. `users` is written to users.json and the route responds with this return value. |

### Delete User
| **Route overview** | Deletes a user                                                                                                                                                                                                                                                                                                |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Route path**     | /user/delete                                                                                                                                                                                                                                                                                                  |
| **Method**         | POST                                                                                                                                                                                                                                                                                                          |
| **Parameter/s**    | Request parameters: `userId`                                                                                                                                                                                                                                                                                  |
| **Return value/s** | `users`                                                                                                                                                                                                                                                                                                       |
| **Description**    | A `userID` is received and `users.json` and `userInfo.json` is read. It matches the `userID` and `id` and removes the array element with that `userId` from `userInfo.json`. It then matches the `username` from `userInfo.json` and `users.json` and deletes the array element where the username matches.   |

### Get Users


### Get User Channels

### Create Groups

### Delete Group

### Add User to Group

### Remove User from Group

### Create Channel

### Delete Channel

### Add User to Channel

### Remove User from Channel

## Angular Architecture
### Components
#### Login
A login form greets the user upon visiting the site prompting them to login. It is a form requiring a username and password inputs, which sends a HTTP POST request to /api/auth. If the login is valid (`valid = true`), then it sets the `username` and `password` into `localStorage`. It also simutaneously calls the permissions service's `updateUser()` that will update components that is subscribed to `loggedInUser`.

#### Chat - Core
The core functionality of the program. It consists of a navigation bar and a `routerLink` to each component.

#### Chat - Site permissions
| **Action**                           | **Overview**                                                        | **Permission**             | **Has permission**                     |
|--------------------------------------|---------------------------------------------------------------------|----------------------------|----------------------------------------|
| Create user                          | Can create users with Group Admin role.                             | canCreateUser              | Super Admin                            |
| Remove User                          | Can remove all users                                                | canRemoveUser              | Super Admin                            |
| Upgrade permission to super          | Can upgrade another user to Super admin and lower permissions       | canUpgradeUserSuper        | Super Admin                            |
| Create group                         | Can create groups                                                   | canCreateGroup             | Super Admin, Group Admin               |
| Create group channel                 | Can create channels (subgroups) within groups                       | canCreateGroupChannel      | Super Admin, Group Admin               |
| Invite + create channel user         | Can create and or invite users to a channel                         | canInviteCreateChannelUser | Super Admin, Group Admin               |
| Update channel                       | Can remove groups, channels, and users from channels                | canUpdateChannel           | Super Admin, Group Admin               |
| Upgrade permission to Assist         | Can allow a user to become a Group Assis of the group               | canUpgradeUserGAssist      | Super Admin, Group Admin               |
| Add/remove users from group channels | Can add or remove users in the group from channels within the group | canAddRemoveGroupChannels  | Super Admin, Group Admin, Group Assist |
| Create channel within group          | Can create channels within the group                                | canCreateGroupChannel      | Super Admin, Group Admin, Group Assist |

#### Chat - Action Menu WIP
#### Chat - Get Chat History WIP
#### Chat - Messages WIP
#### Groups WIP
#### Channels WIP

### User Administration (UA)
#### UA - CRUD menu
The menu allowing users to perform create, read, update and delete on the main data structures. This menu and certain actions will only be available (and visible) to users who have the appropriate permissions (as show in the permission table above). These permissions are assigned `onInit()` to users by using `setUserRolePermissions` route to return the appropriate permissions based on the current user's role. 

#### Create (register) user
Pressing the "register" button will bring a form that will allow a user to input `username` and `email`, which will be posted to the server to create a user.

#### Edit user WIP

#### Delete user
For super admins, pressing the "delete" button will delete the user from the database. The button and route will not be available for other users.

### Guards
#### Auth (Login) 
This guard is used to stop unauthorised users from accessing routes in which they do not have permissions for. It will give users an alert to say why they cannot access this route and redirect them to login if they need to authenticate themselves.

### Services
#### Auth (Login) 
`loginEvent()`
Takes a `uname` and `pword` and posts it to the server to handle logins
`logoutEvent()`
Logs a user out of their account and removes their data from `localStorage`

#### User Administration (CRUD)
`registerUser()`
Takes a `User` object and posts the data to the server for the creation of a new user.
`getAllUsers()`
Returns all registered users on the website.
`deleteUser()`
Takes a `userId` and posts it to the server to handle deletion of a user.