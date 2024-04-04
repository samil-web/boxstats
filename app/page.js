
'use client'
export default function Page() {
  async function handleClick() {
    const data = await fetch("/api/getdata");
    const json  = await data.json()
    return json
  }
  return (
      
    <div>
      <button className="flex items-center bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Request data</button>
    </div>
  )
}
