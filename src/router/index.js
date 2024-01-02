import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import CreateEmployeeView from '../views/CreateEmployeeView.vue'
import DepartmentView from '../views/DepartmentView.vue'
import CreateDepartmentView from '../views/CreateDepartmentView.vue'
import TaskView from '../views/TaskView.vue'
import CreateTaskView from '../views/CreateTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeeView
    },
    {
      path: '/employees/create',
      name: 'create-employees',
      component: CreateEmployeeView
    },
    {
      path: '/departments',
      name: 'departments',
      component: DepartmentView
    },
    {
      path: '/departments/create',
      name: 'create-departments',
      component: CreateDepartmentView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskView
    },
    {
      path: '/tasks/create',
      name: 'create-tasks',
      component: CreateTaskView
    }
    
  ]
})

export default router
