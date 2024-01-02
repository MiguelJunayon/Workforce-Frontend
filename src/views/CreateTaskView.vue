<template>
 
    <h1>Create New Task</h1>
    <div class="row">     
      <div class="col-md-5 offset-md-1">
        <form @submit.prevent="createTask">
          <div class="form-group mt-2">
            <label for="employee_id">Employee: </label>
            <select v-model="formData.employee_id" class="form-select">
              <option v-for="employee in employees" :key="employee.id" :value="employee.id">{{ employee.name }}</option>
            </select>
            <p v-if="formErrors.employee_id" class="text-danger">{{ formErrors.employee_id }}</p>
          </div>
          
          <div class="form-group mt-2">
            <label for="title">Title: </label>
            <input type="text" v-model="formData.title" class="form-control">
          </div>
  
          <div class="form-group mt-2">
            <label for="description">Description: </label>
            <input type="text" v-model="formData.description" class="form-control">
          </div>
          
          <div class="form-group my-3">
              <button class="btn btn-primary" style="color:#bdde68; background-color:#5c5c5c; border: none;">
                    Add Task
                </button>
          </div>
        </form>
      </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  employee_id: '',
  title: '',
  description: '',
});

const formErrors = ref({
  employee_id: ''
});

const employees = ref([]);

const fetchEmployees = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/employees');
    if (response.ok) {
      employees.value = await response.json();
      console.log('Fetched Employees:', employees.value);
    } else {
      console.error('Failed to fetch employees');
    }
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

const createTask = async () => {
  // Add validation logic if needed
  try {
    const response = await fetch('http://localhost:8000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      console.log('Task created successfully');
      window.alert('Task created successfully');
      router.push({ name: 'tasks' }); // Assuming you have a route named 'tasks'
    } else {
      console.error('Failed to create task');
    }
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

onMounted(() => {
  fetchEmployees();
});
</script>

<style scoped>
 body {
        font-family: 'Arial', sans-serif;
        background-color: #353635;
    }

    h1 {
        font-size: 2.5em;
        color: #bdde68;
        font-family: Monospace;
    }

    .form-label {
        font-weight: bold;
    }

    label {
        color: #bdde68;
    }

    .form-control {
        width: 27vw;
        padding: 0.375rem 0.75rem;
        margin-bottom: 1rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
    }

    .btn-primary {
        color: #fff;
        border-color: #007bff;
        border-radius: 10px;
    }

    .btn-primary:hover {
        background-color: #0056b3;
        border-color: #0056b3;
    }

    .text-danger {
        color: #dc3545;
    }
  
</style>
