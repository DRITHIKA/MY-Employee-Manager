// users.jsx

// users.jsx

// users.jsx
localStorage.clear()
export const employees = [
  {
    id: 1,
    name: "Ananya",
    email: "employee1@example.com",
    password: "qwer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the main homepage UI with Figma",
        taskDate: "2024-10-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login redirection issue",
        taskDate: "2024-10-03",
        category: "Development"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Rahul",
    email: "employee2@example.com",
    password: "qwer",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2024-10-08",
        category: "QA"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize query performance",
        taskDate: "2024-10-10",
        category: "Database"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    name: "Sneha",
    email: "employee3@example.com",
    password: "qwer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Prepare slides and present to client",
        taskDate: "2024-10-07",
        category: "Management"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Arjun",
    email: "employee4@example.com",
    password: "qwer",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2024-10-13",
        category: "Documentation"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Meera",
    email: "employee5@example.com",
    password: "qwer",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Patch",
        taskDescription: "Patch the security vulnerabilities",
        taskDate: "2024-10-04",
        category: "Security"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 1
    }
  }
];

export const admin = [
  {
    id: 1,
    name: "Drithika",
    email: "admin@example.com",
    password: "qwer"
  }
];


 
export const setLocalStorage= ()=>{
 localStorage.setItem('employees' , JSON.stringify(employees));
    localStorage.setItem('admin' , JSON.stringify(admin));
}// This function sets the employees and admin data in localStorage

export const getLocalStorage= ()=>{

    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
} 

