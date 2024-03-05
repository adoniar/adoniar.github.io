import StopWatch from './StopWatch'

export default function RunningExercise ({exercise, SetMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={SetMenuScreen}>Back to Menu</button>
    </div>
  }