type headerProps = {
    headerText: string,
    actionBtnText: string,
    actionBtnClick: Function
};

export const AppHeader = ({ headerText, actionBtnClick, actionBtnText }: headerProps) => {
    return <div>
        <div className="header">
            <a className="logo"> {headerText}</a>
            <div className="header-right">
                <button type="button" onClick={() => (actionBtnClick())} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">{actionBtnText}</button>
            </div>
        </div>
    </div>
}