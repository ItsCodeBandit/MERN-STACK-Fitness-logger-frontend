import { useWorkoutsContext } from '../hookss/useWorkoutsContextt'
import { useAuthContext } from '../hookss/useAuthContext'

// date fns 
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch }  = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user){
            return
        }
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()


        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }



// <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p> is what gives or tracks how long a workout was made. 
// addSuffix: true   gives me the number of days ago. 
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

        </div>
    )
}



export default WorkoutDetails


