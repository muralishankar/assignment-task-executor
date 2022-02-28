import { TaskItem } from '../store/model'
export const TaskListItem = ({ id, image, status, created_at, resolved_at }: TaskItem) => {
    return <tr key={id}>
        <td className="px-6 py-4 whitespace-nowrap">{id}</td>
        <td className="px-6 py-4 whitespace-nowrap">
            <FoodResult status={status} image={image} />
        </td>
        <td className="px-6 py-4">
            <div className="text-gray-500 text-center">{created_at}</div>
        </td>
        <td className="text-gray-500 text-center">  <div>{resolved_at}</div></td>
    </tr>
}


function FoodResult({ status, image }: FoodResultProps) {
    return (status === "Pending") ?
        <div className="h-10 w-10 text-center">Pending</div> :
        <div className='object-contain h-48 w-96'><img className="object-none h-48 w-96" src={image} alt="" /></div>;

}


type FoodResultProps = {
    status: string,
    image: string
}

