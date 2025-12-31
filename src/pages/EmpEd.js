
import Hero from '../components/Hero'
import EmpEdItem from '../components/EmpEdItem'

import emped from '../local-json/education-and-employment.json'


const EmpEd = () => {

    const empedItems = emped.map((item) => {
        return (
            <EmpEdItem
                key = {item.id}
                role = {item.role}
                place = {item.place}
                years = {item.years}
                activities = {item.activities}
            />
        )
    })
    return (
        <>
            <Hero title = "History"/>
            <main id="main-content" className="main">
                <article className="main__article">
                    <h2 className="main__h2">
                        Employment and Education
                    </h2>
                    <ul>
                        {empedItems}
                    </ul>
                </article>
            </main>
        </>
    )
}

export default EmpEd