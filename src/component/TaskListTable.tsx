
type HOCTableProps = {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};
export const TaskListTable = ({ children }: HOCTableProps) => {
    return <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <TableHeader />
                        <tbody className="bg-white divide-y divide-gray-200">
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}

const TableHeader = () => (
    <thead className="bg-gray-50">
        <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
                Job id
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
                Status
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
                Created At
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
                Resolved At
            </th>
        </tr>
    </thead>
)