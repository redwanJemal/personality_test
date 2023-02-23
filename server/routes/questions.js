const express = require('express')
const router = express.Router()
const questions = require('../services/questions')

/* GET question listing. */
router.get('/', function (req, res, next) {
	try {
		const questionList = questions.getAllQuestions(req.query.page)
		if (questionList) {
			for (const question of questionList.data) {
				question.options = questions.getQuestionOptions(question.id)
			}
		}
		
		res.json({
			items: questionList.data,
		})
	} catch (err) {
		console.error(`Error while getting questions `, err.message)
		next(err)
	}
})

router.post('/', function (req, res, next) {
	try {
		const personality = ['Introvert', 'Extrovert']

		const random = Math.floor(Math.random() * personality.length)

		res.json({
			status: 'Success',
			result: personality[random],
		})
	} catch (err) {
		console.error(`Error generating response `, err.message)
		next(err)
	}
})

module.exports = router
