import { create } from 'zustand'
import axios from 'axios'

const useTestStore = create((set) => ({
	data: null,
  answer: {},
	getAllQuestions: async () => {
    set({ loading: true });
		try {
			const response = await axios.get('http://localhost:3301/api/sample')
			set({ data: response.data, loading: false })
		} catch (error) {
			set({ error: error.message, loading: false })
		}
	},
  addAnswer: (answer) => {
    set({ answer: answer })
  },
  postAnswer: async () => {
    set({ loading: true });
    try {
			const response = await axios.post('http://localhost:3301/api/sample',useTestStore.getState().answer)
			set({ data: response.data, loading: false })
		} catch (error) {
			set({ error: error.message, loading: false })
		}
  },
}))

export default useTestStore