<template>
<div class="form-container">
  <div class="q-pa-md flex flex-center">
    <q-form @submit.prevent="onSubmit">
      <q-input filled v-model="user.name" label="Имя *" lazy-rules :rules="[val => val && val.length > 0 || 'Введите имя']"/>
      <q-input filled v-model="user.phone" label="Телефон *" type="tel" lazy-rules :rules="[val => val && val.length > 0 || 'Введите телефон']"/>
      <q-input filled v-model="user.email" label="Email (Логин) *" lazy-rules :rules="[val => val && val.length > 0 || 'Введите email']"/>
      <q-input filled v-model="user.address" label="Адрес проживания *" lazy-rules :rules="[val => val && val.length > 0 || 'Введите адрес']"/>
      <q-input filled v-model="user.bio" label="Информация о себе" type="textarea" />
      <q-input v-model="user.password" label ='Пароль' type="password"></q-input>
      <div class="q-mt-md">
        <q-btn label="Зарегистрироваться" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const user = ref({
      name: '',
      phone: '',
      email: '',
      address: '',
      bio: '',
      password: ''
    })

    const onSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3001/auth/register', user.value)
        localStorage.setItem('token', response.data)
        console.log(response.data)
        router.push('/login')
      } catch (error) {
        console.error(error)
      }
    }

    return { user, onSubmit }
  }

}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.q-form {
  width: 400px;
}
</style>
