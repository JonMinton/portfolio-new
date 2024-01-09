
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
        <strong>
            {years[0]} 
            &nbsp;to&nbsp; 
            {years[1]}
          </strong>: {role} at {place}.
    </li>
  )
}

export default EmpEdItem