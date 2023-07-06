import { ref } from 'vue'
import axios from 'axios'

export const useUsers = () => {
  const isLoading = ref(true)
  const users = ref([])
  const errorMessage = ref()
  const currenPage = ref(1)

  const getUsersApi = async (page = 1) => {
    try{
    isLoading.value= true; 
    if (page <= 0) page = 1
    isLoading.value= true; 
    const { data } = await axios('https://reqres.in/api/users/', {
      params: { page },
    })
   

    if (!data.data.length > 0) {
      errorMessage.value = 'Nada que mostarar'
      isLoading.value = false
    } else {
      users.value = data.data
      currenPage.value = page
      errorMessage.value = null
    }} catch(e){
      errorMessage.value = 'Nada que mostarar'
    }
    isLoading.value = false
  }
  getUsersApi()
  return {
    isLoading,
    users,
    errorMessage,
    currenPage,
    nextPage: () => getUsersApi(currenPage.value + 1),
    pagePrevious: () => getUsersApi(currenPage.value - 1),
    indexPage: () => getUsersApi(),
  }
}
