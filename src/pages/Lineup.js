export default function Lineup({bands}) {

   return (
       <>
       <h1 className="text-7xl font-acier">Lineup</h1>
        <ul className="w-full grid gap-4 grid-cols-3 grid-rows-3 p-4">
            {bands.map((band, index) => 
                <li  key={`band#${index}`} className="bg-gray-600 text-white rounded-md p-4">{band.name}</li>
            )}
        </ul>
        </>
    )
}