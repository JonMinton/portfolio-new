
const EmpEdItem = (
    {
        years,
        role, 
        place,
        activities
    }

) => {
  return (
    <li className="history__li">
      <p className="history__subhead">
        <strong>
            {years[0]}
            &nbsp;to&nbsp;
            {years[1] ?? 'present'}
          </strong>: {role} at {place}.
        </p>
          <ul>
            {activities.map((activity, index) => {
              return (
                <li key={index} >
                  {activity}
                </li>
              )
            })}
          </ul>
    </li>
    

  )
}

export default EmpEdItem