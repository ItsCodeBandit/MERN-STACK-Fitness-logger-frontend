import { WorkoutsContextt } from "../Context/WorkoutContextt";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContextt)

    if (!context) {
        throw Error('useWorkoutsContextt must be used inside an WorkoutsContexttProvider')
    }


    return context
}


