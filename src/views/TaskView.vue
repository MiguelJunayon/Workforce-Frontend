<template>
  
  <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
        <RouterLink :to="{ path: '/tasks/create' }" class="btn btn-primary me-md-2" type="button" style="color:#bdde68; background-color: #5c5c5c; border: none;">
          Add New Tasks
        </RouterLink>
          
      </div>
   
      <div class="table-container">
        <table class="table table-bordered table-striped table-sn table-custom" >
          <thead>

         <th>Employee ID</th>
        <th>Title</th>
        <th>Description</th>
       
        <th></th>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">

          <td>{{ task.employee_id }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
     
         

          <td class="text-center">
            <button @click="deleteTask(task.id)" class="btn btn-primary" style="color:#bdde68; background-color: #353635; border: none;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                </button>
              </td>
        </tr>
      </tbody>
    </table>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tasks = ref([]);

const fetchTasks = () => {
  fetch('http://localhost:8000/api/tasks')
    .then(response => response.json())
    .then(data => {
      tasks.value = data;
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
    });
};

const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Task deleted successfully');
      window.alert('Task deleted successfully');
      fetchTasks();
    } else {
      console.error('Failed to delete task');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

onMounted(() => {
  fetchTasks();
});
</script>

<style scoped>
 .table-custom {
        width: 80vw;
        border-collapse: collapse;
        background-color: #5c5c5c; /* Background color for the table */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        
    }

    .table-custom th,
    .table-custom td {
        padding: 12px;
        text-align: left;
        border: 2px solid black;
        color: #bdde68; /* Text color for th and td */
        background-color: #5c5c5c;
        
    }

    .table-custom th {
        background-color: #5c5c5c;
        font-weight: bold;
    }

    .table-custom tr:hover {
        background-color:#5c5c5c;
    }
</style>