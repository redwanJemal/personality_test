import { create } from 'zustand'
import axios from 'axios'

const useTestStore = create((set) => ({
	data: null,
  answer: {},
	result: null,
	error: null,
	loading: false,
	resultLoading: false,
	getAllQuestions: async () => {
    set({ loading: true });
		try {
			const response = await axios.get('http://localhost:3301/api/sample')
			set({ data: response.data, loading: false, error: null })
		} catch (error) {
			set({ error: error.message, loading: false, data: null })
		}
	},
  addAnswer: (answer) => {
    set({ answer: answer })
  },
  postAnswer: async () => {
		set({ resultLoading: true })
    try {
			const response = await axios.post('http://localhost:3301/api/sample',useTestStore.getState().answer)
			console.log(response.data)
			set({ result: response.data, resultLoading: false, answer: {}, error: null })
		} catch (error) {
			set({ error: error.message,  resultLoading: false, result: null })
		}
  },
}))

export default useTestStore