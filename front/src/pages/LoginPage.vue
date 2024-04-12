  <template>
    <div class="q-pa-md flex flex-center" style="height: 100vh">
      <q-card class="q-pa-md" style="width: 400px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Вход</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="onLogin" class="q-gutter-md">
            <q-input filled v-model="login" label="Логин *" lazy-rules :rules="[val => val && val.length > 0 || 'Введите логин']" />
            <q-input filled type="password" v-model="password" label="Пароль *" lazy-rules :rules="[val => val && val.length > 0 || 'Введите пароль']" />
            <div class="row justify-between q-mt-md">
              <q-btn label="Войти" type="submit" color="primary" />
              <q-btn label = 'Зарегестрироваться' color="primary" @click="onRegister"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </template>
<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const login = ref('')
    const password = ref('')

    const onRegister = () => {
      router.push('/reg')
    }
    const onLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3001/auth/login', {
          email: login.value,
          password: login.value
        })
        console.log('Токен', response.data.access_token)
        localStorage.setItem('token', response.data.access_token)
        router.push('/')
      } catch (e) {
        return console.log(e)
      }
    }

    return {
      login,
      password,
      onLogin,
      onRegister
    }
  }
}

</script>

<style>
.q-mt-md {
  justify-content: space-between;
}
</style>
