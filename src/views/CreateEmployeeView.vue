<template>
  
      <h1>Create Employee</h1>
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <form @submit.prevent="createEmployee">
            <div class="form-group mt-2">
              <label for="name">Name</label>
              <input type="text" class="form-control" v-model="employee.name">
            </div>
            <div class="form-group mt-2">
              <label for="email">Email</label>
              <input type="text" class="form-control" v-model="employee.email">
            </div>
            <div class="form-group my-3">
              <button class="btn btn-primary" style="color:#bdde68; background-color:#5c5c5c; border: none;">
                    Add Employee
                </button>
            </div>
          </form>
      
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const employee = ref({ name: '', email: '' });
  
      const createEmployee = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/employees/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee.value),
          });
  
          if (response.ok) {
            console.log('Employee created successfully');
            window.alert('Employee created successfully');
            router.push('/employees');
          } else {
            console.error('Failed to create employee');
          }
        } catch (error) {
          console.error('Error creating employee:', error);
        }
      };
  
      return { employee, createEmployee };
    },
  };
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
  