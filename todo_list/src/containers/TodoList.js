import { connect } from 'react-redux'
import { TodoList } from '../components/molecules/TodoList'
import { toggleTodo } from '../store/todolist/actions'

const mapStateToProps = (state) => {
	return {
		todoliststate: state.todolist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


