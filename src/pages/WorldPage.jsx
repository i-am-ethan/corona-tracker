import Title from "../components/Title";
import Card from "../components/Card"

const WorldPage = (props) => {
    return(
        <>
        <Title />
        <Card allCountriesData={props.allCountriesData} />
        </>
    )
}
export default WorldPage;