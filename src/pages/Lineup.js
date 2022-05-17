import useFetch from "../hooks/useFetch"

export default function Lineup() {
    const {loading, error, data} = useFetch("https://the-javascript-bar-project.herokuapp.com/bands");
    return (
        <h1 className="text-4xl">Lineup page</h1>
    )
}