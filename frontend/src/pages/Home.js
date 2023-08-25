// inside package.json ""proxy": "http://localhost:4000/"," was set this is only in development only. not for the real final product
// node ninja
// try adding user authenication soon in this app. 

// 
import { useEffect } from "react"
import { useWorkoutsContext } from "../hookss/useWorkoutsContextt"
import { useAuthContext } from '../hookss/useAuthContext'

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json })
      }
    }

    if (user){
      fetchWorkouts()
    }
    
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home