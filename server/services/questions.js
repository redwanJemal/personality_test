const db = require('../services/db')
const config = require('../config')

function getAllQuestions(page = 1) {
	const offset = (page - 1) * config.listPerPage
	const data = db.query(
		`SELECT * FROM question LIMIT ?,?`,
		[offset, config.listPerPage]
	)
	const meta = { page }

	return {
		data,
		meta,
	}
}


function getQuestionOptions(questionId) {
	const data = db.query(
		`SELECT o.id, o.option, o.questionId, o.created_at FROM options o INNER JOIN question q on q.id = o.questionId where q.id = ?`,
		[questionId]
	)

	return data
}



module.exports = {
	getAllQuestions,
  getQuestionOptions
}
