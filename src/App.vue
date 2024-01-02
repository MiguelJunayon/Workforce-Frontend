<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="sidebar">
        <h1>Workforce Management</h1>
      
      <nav>
        <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/employees">Employees</RouterLink></li>
        <li> <RouterLink to="/departments">Departments</RouterLink></li>
        <li> <RouterLink to="/tasks">Tasks</RouterLink></li>
        </ul>
      </nav>
      </div>
    </div>

    <div class="content">
      <RouterView />
    </div>
 
</template>

<style>
body {
            font-family: Arial, sans-serif;
            background-color: #353635;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 1500px;
            margin: 0;
            padding: 0;
            display: flex;
        }

        .sidebar {
            width: 250px;
            background-color: #353635;
            color: #bdde68;
            padding: 20px 10px;
            position: fixed;
            height: 100%;
            overflow: auto;
            box-shadow:0 0 5px black;
            
        }

        .content {
            margin-left: 250px;
            padding: 20px;
        }

        .sidebar h2 {
            color: #bdde68;
            text-align: center;
            margin-bottom: 20px;
        }

        .sidebar nav ul {
            list-style: none;
            padding: 0;
        }

        .sidebar nav ul li {
            margin-bottom: 10px;
        }

        .sidebar nav ul li a {
            text-decoration: none;
            color: #bdde68;
            padding: 15px 20px;
            border-radius: 25px;
            transition: 0.2s ease-in-out;
            display: block;
        }

        .sidebar nav ul li a:hover {
            background-color: #bdde68;
            color: #fff;
            border-color: #fff;
            transform: scale(1.1);
        }
</style>
