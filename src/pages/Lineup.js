export default function Lineup({bands}) {

   return (
       <>
       <h1 className="text-4xl">Lineup</h1>
        <ul className="w-full grid gap-4 grid-cols-3 grid-rows-3 p-4">
            {bands.map( band => 
                <li className="bg-gray-600 text-white rounded-md p-4">{band.name}</li>
            )}
        </ul>
        </>
    )
}