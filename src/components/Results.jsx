import Loading from "./Loading";

const Results = ({countryData, loading}) => {
    const {data, newConfirmed, newRecovered, totalConfirmed, totalRecovered} = countryData;
    return(
        <>
        <div className="results-container">
            {loading ? <Loading /> : 
                <div>
                    <p>日付：{data.slice(0,10)}</p>
                    <p>新規感染者：{newConfirmed.toLocaleString()}</p>
                    <p>感染者数：{newRecovered.toLocaleString()}</p>
                    <p>新規回復者：{totalConfirmed.toLocaleString()}</p>
                    <p>回復者総数：{totalRecovered.toLocaleString()}</p>
                </div>
            }
        </div>

        </>
    )
}
export default Results;