# Akineko's Requirement

## Functional Requirement

### User Role

- **Admin (Admin User)**
  - Manage User
  - Manage All Post (CREATE, READ, UPDATE, DELETE)
  - Manage Post Report (READ, UPDATE, DELETE)
    - Send Notification to the Reported Post's Author (User)
- **User (Normal User)**
  - View any posts from post list (can be filtered by search word or tags)
  - Manage their own posts (CREATE, READ, UPDATE, DELETE) (but not for the other user's posts).
  - Manage their own comments (CREATE, READ, UPDATE, DELETE) for any posts.
  - Favorite any posts (unless that user's post.)
  - Notification
    - Receive New Notification when.
      - New favorite for the user's post.
      - New comments post on the user's post.
      - Report for the post that received from the admin.

### Workflow

- **Authentication**
- **Post List**
- **Post**
- **Report Post**
- **Notification**

### Tasks

- **Phase 01: Authentication**
  - *Backend*  
    - [ ] Create User Auth API.
  - *Frontend*  
    - [ ] Create User Register UI.
- **Phase 02: Post Management**
- **Phase 03: Notification Management**
- **Phase 04: Report Management**


## Non-Functional Requirement

### Design

- Responsive Design

### Security

### Performance